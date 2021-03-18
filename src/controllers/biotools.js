import { spawn } from 'child_process'
import os from 'os'
import path from 'path'


const databasesRoot = path.join(os.homedir(), 'Databases');


export default {

    blast: (req, res ) => {
        try {
            let database = path.join(databasesRoot, req.body.database)
            let outfmt = "6 qseqid qlen sseqid slen stitle pident qcovs length mismatch gapopen evalue bitscore"
            let headers = ['qseqid', 'qlen', 'sseqid', 'slen','stitle', 'pident', 'qcovs','length', 'mismatch', 'gapopen', 'evalue', 'bitscore']         
            let sequences = spawn('echo',[`${req.body.sequences}`])
            let blast= spawn(`${req.body.type}`, ['-db', database,'-max_target_seqs', 5 ,'-evalue', 1e-20, '-perc_identity', 60, '-num_threads', process.env.THREADSM, '-outfmt', outfmt])
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
                    msg: 'Blast terminado',
                    result
                })
            });

        } catch (error) {
            res.status(500).json({
                status: 'danger',
                msg: error
            });
        }

    },

    bbduk: (req, res ) => {
        
    }

}