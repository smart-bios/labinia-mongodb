import { spawn } from 'child_process'
import os from 'os'
import path from 'path'
import Storage from '../models/storage'


const databasesRoot = path.join(os.homedir(), 'Databases');
const bbduk  = '/opt/biotools/bbmap/bbduk.sh'

export default {

    blast: (req, res ) => {
        try {
            let database = path.join(databasesRoot, req.body.database)
            //let outfmt = "6 qseqid qlen sseqid slen stitle pident qcovs length mismatch gapopen evalue bitscore"
            //let headers = ['qseqid', 'qlen', 'sseqid', 'slen','stitle', 'pident', 'qcovs','length', 'mismatch', 'gapopen', 'evalue', 'bitscore']         
            let sequences = spawn('echo',[`${req.body.sequences}`])
            let blast= spawn(`${req.body.type}`, ['-db', database,'-max_target_seqs', 5 ,'-evalue', 1e-20, '-perc_identity', 60, '-num_threads', process.env.THREADSM, '-outfmt',15])
            let result = ''
            sequences.stdout.on('data', (data) => { blast.stdin.write(data) });
            sequences.stderr.on('data', (data) => { console.error(`stderr seq: ${data}`); });
            sequences.on('close', (code) => {
                if (code != 0) {
                    console.log(`echo process exited with code ${code}`);
                    return res.json({
                        status: 'danger',
                        msg: 'ERROR sequences blast'
                    })
                }
                blast.stdin.end();
            });

            blast.stdout.on('data', (data) => { result += data.toString();});    
            blast.stderr.on('data', (data) => { console.error(`blaststderr: ${data}`);});

            blast.on('close', (code) => {
                console.log(`blast process exited with code ${code}`);
                if (code !== 0) {
                    console.log(`echo process exited with code ${code}`);
                    return res.json({
                        status: 'danger',
                        msg: 'ERROR Blast'
                    })
                }
    
                res.json({
                    status: 'success',
                    msg: 'Blast finished',
                    result: JSON.parse(result)
                })
            });

        } catch (error) {
            res.status(500).json({
                status: 'danger',
                msg: error
            });
        }

    },

    bbduk: async (req, res ) => {
        try {
            let fq1 = path.join(os.homedir(), req.body.fq1)
            let fq2 = path.join(os.homedir(), req.body.fq2)
            let output = path.join(os.homedir(), `Storage/${req.body.user._id}/results`)
            let log = ''
            let params = [  
                `in1=${fq1}`,
                `out1=${output}/${req.body.basename}_R1_good.fq.gz`, 
                `in2=${fq2}`,
                `out2=${output}/${req.body.basename}_R2_good.fq.gz`, 
                'ref=/opt/biotools/bbmap/resources/adapters.fa', 
                `minavgquality=${req.body.minavgquality}`,
                `trimq=${req.body.trimq}`,
                `qtrim=${req.body.qtrim}`, 
                `minlen=${req.body.length}`,
                'json=t'
            ]
            if(!req.body.paired) params.splice(2,2)
    
            let  cmd_bbduk = spawn(bbduk, params)
           
            cmd_bbduk.stderr.on('data', (data) => {
                log += data.toString()
                console.log(data.toString())
            });

            cmd_bbduk.on('close', (code) => {
                console.log(`BBDuk process exited with code ${code}`);
                if(code == 0){

                    let trimfq1 = {
                        user: req.body.user._id,
                        filename: `${req.body.basename}_R1_good.fq.gz`,
                        description: `BBDuk triming result`,
                        path: `Storage/${req.body.user._id}/results/${req.body.basename}_R1_good.fq.gz`,
                        type: 'fastq',
                        category: 'result'
                    }

                    let trimfq2 = {
                        user: req.body.user._id,
                        filename: `${req.body.basename}_R2_good.fq.gz`,
                        description: `BBDuk triming result`,
                        path: `Storage/${req.body.user._id}/results/${req.body.basename}_R2_good.fq.gz`,
                        type: 'fastq',
                        category: 'result'
                    }

                    Storage.insertMany([trimfq1, trimfq2])
                    .then(function(){
                        console.log("Data inserted")
                        res.json({
                            status: 'success',
                            msg: 'BBDuk finished',
                            result: JSON.parse(log)
                        })
                    }).catch(function(error){
                        console.log(error)  
                    });
                }else{
                    res.json({
                        status: 'danger',
                        msg: 'BBDuk finished with error',
                        result: ''
                    })
                }
            })
        } catch (error) {
            res.status(500).json({
                status: 'danger',
                msg: error
            });
        }
    }

}