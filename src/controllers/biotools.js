import { exec, spawn } from 'child_process'
import os from 'os'
import path from 'path'
import fs from 'fs'
import zipdir from 'zip-dir'
import Storage from '../models/storage'

const home = os.homedir()
const databasesRoot = path.join(os.homedir(), 'Databases');
const bbduk  = '/opt/biotools/bbmap/bbduk.sh'
const spades = '/opt/biotools/Spades/SPAdes-3.13.0-Linux/bin/spades.py'
const prokka = '/opt/biotools/prokka/bin/prokka'

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

    bbduk: (req, res ) => {
        try {
            let fq1 = path.join(os.homedir(), req.body.fq1)
            let fq2 = path.join(os.homedir(), req.body.fq2)
            let output = path.join(os.homedir(), `Storage/${req.body.user._id}/results`)
            let log = ''
            let msg = 'Input is being processed as paired'
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
            if(!req.body.paired){
                params.splice(2,2)
                msg='Input is being processed as unpaired'
            } 
    
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

                    Storage.insertMany([trimfq1, trimfq2], (err, data) => {
                        if(err) console.log('Something went wrong!', err);
                        res.json({
                            status: 'success',
                            msg,
                            result: JSON.parse(log)
                        })
                    })
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
    },

    unicycler: (req, res) => {
        try {
            let fq1 = path.join(os.homedir(), req.body.fq1)
            let fq2 = path.join(os.homedir(), req.body.fq2)
            let output = path.join(os.homedir(), `Storage/${req.body.user._id}/tmp/${req.body.name}`)
            let unicycler = spawn('unicycler',['-1', fq1, '-2', fq2,'--mode', req.body.mode, '--min_fasta_length', req.body.length, '-t', process.env.THREADSH,'-o', output,'--spades_path', spades, '--keep', 0])
            
            unicycler.stderr.on('data', (data) => {console.log(data.toString())});
            unicycler.stdout.on('data', (data) => {console.log(data.toString())});
            
            unicycler.on('close', (code) => {
                console.log(`unicycler process exited with code ${code}`);
                if(code == 0){

                    zipdir(output, { saveTo: `${home}/Storage/${req.body.user._id}/results/${req.body.name}.zip` }, function (err, buffer) {
                        if(err) console.log('Something went wrong!', err);

                        fs.rename(`${output}/assembly.fasta`, `${home}/Storage/${req.body.user._id}/results/${req.body.name}_genomic.fna`, (err) => {
                            if(err) console.log('Something went wrong!', err);
                            
                        });
                    })
                    
                    let aResult = {
                        user: `${req.body.user._id}`,
                        filename: `${req.body.name}.zip`,
                        path: `Storage/${req.body.user._id}/results/${req.body.name}.zip`,
                        description: `Unicycler assembly result`,
                        type: 'other',
                        category: 'result'
                    }

                    let aGenomic = {
                        user: `${req.body.user._id}`,
                        filename: `${req.body.name}_genomic.fna`,
                        path: `Storage/${req.body.user._id}/results/${req.body.name}_genomic.fna`,
                        description: `Draft genome Unicycler assembly`,
                        type: 'fasta',
                        category: 'result'
                        
                    }

                    Storage.insertMany([aResult, aGenomic], (err, data) => {
                        if(err) console.log('Something went wrong!', err);
                        res.json({
                            status: 'success',
                            msg:'Unicycler finished',
                            result: data
                        })
                    })
                }else{
                    res.json({
                        status: 'danger',
                        msg: 'Unicycler finished with error',
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
    },

    quast: (req, res ) => {

        try {
            let assembly = path.join(os.homedir(), req.body.assembly)
            let reference = path.join(os.homedir(), `Databases/references_genomes/${req.body.reference}_genomic`)
            let output = path.join(os.homedir(), `Storage/${req.body.user._id}/tmp/${req.body.name}`);
            
            let quast = spawn('quast.py', ['-r', `${reference}.fna`, '-g', `${reference}.gff`, '-t', process.env.THREADSM, '-o', output, '--no-html','--no-icarus', assembly])
            
            quast.stdout.on('data', (data) => {console.log(data.toString())})

            quast.on('close', (code) => {
                console.log(`Quast process exited with code ${code}`);
                if(code == 0){
                    zipdir(output, { saveTo: `${home}/Storage/${req.body.user._id}/results/${req.body.name}.zip` }, function (err, buffer) {
                        if(err) console.log('Something went wrong!', err);
                        console.log('Quast result zipped')
                    })

                    let qResult = {
                        user: `${req.body.user._id}`,
                        filename: `${req.body.name}.zip`,
                        path: `Storage/${req.body.user._id}/results/${req.body.name}.zip`,
                        description: 'Quast report result',
                        type: 'other',
                        category: 'result'
                    }

                    Storage.create(qResult, (err, data) => {
                        if(err) console.log('Something went wrong!', err);

                        res.json({
                            status: 'success',
                            msg:'Quast finished',
                            result: {
                                quast: data,
                                report: `${output}/report.tsv`,
                                unaligned: `${output}/contigs_reports/unaligned_report.tsv`
                            }
                        })
                    })
                    
                }else{
                    return res.json({
                        status: 'danger',
                        msg: 'Quast finished with error',
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

    },

    prokka: (req, res) => {
        try {
            console.log(req.body)
            let assembly = path.join(os.homedir(), req.body.assembly)
            let output = path.join(os.homedir(), `Storage/${req.body.user._id}/tmp/${req.body.name}`);
           
            let cmd_prokka = spawn( prokka, ['--outdir', output, '--prefix', req.body.name, '--locustag', req.body.locustag, '--kingdom', req.body.kingdom, '--cpus', process.env.THREADSH, '--force', assembly])
            
            console.log(cmd_prokka)
            cmd_prokka.stderr.on('data', (data) => {console.log(data.toString())});


            cmd_prokka.on('close', (code) => {
                console.log(`prokka process exited with code ${code}`);
                if(code == 0){

                    zipdir(output, { 
                        saveTo: `${home}/Storage/${req.body.user._id}/results/${req.body.name}.zip` 
                    }, function (err, buffer) {
                        if(err) console.log('Something went wrong!', err);
                        
                        console.log('Prokka result zipped')
                    })

                    let pResult = {
                        user: req.body.user._id,
                        filename: `${req.body.name}.zip`,
                        path: `Storage/${req.body.user._id}/results/${req.body.name}.zip`,
                        description: 'Prokka prediccion result',
                        type: 'other',
                        category: 'result'
                    }

                    Storage.create(pResult, (err, data) => {
                        if(err) console.log('Something went wrong!', err);
                        res.json({
                            status: 'success',
                            msg:'Prokka finished',
                            result: {
                                prokka: data,
                                report: `${output}/${req.body.name}.txt`
                            }
                        })
                    })                
                }else{
                    return res.json({
                        status: 'danger',
                        msg: 'Prokka finished with error',
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