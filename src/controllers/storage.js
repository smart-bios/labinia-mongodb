import os from 'os'
import path from 'path'
import fs from 'fs'
import Storage from '../models/storage'

const home = os.homedir()
const extensions = ['fasta','faa','ffn','fna','fa','fastq','fq','gz','tsv','cvs']

export default {

    upload : ( req, res ) => {

        if (!req.files || Object.keys(req.files).length === 0) {

            return res.status(400).send('No files were uploaded.');
        }

        let sampleFile = req.files.file;
        let file_name = sampleFile.name.split('.');
        let extension = file_name[file_name.length -1];

        if(extensions.indexOf(extension) < 0){
            
            return res.status(400).json({
                status: 'danger',
                msg: 'La extension del archivo no es valida'
            });
        }

        let store = path.join( home, `/storage/${req.body.id}/${sampleFile.name}` )

        let upload = {
            user: req.body.id,
            filename: sampleFile.name,
            path: `storage/${req.body.id}/${sampleFile.name}`,
            description: req.body.description,
            category: req.body.category
        }

        sampleFile.mv(store, function(err) {

            if (err) {
                return res.status(500).json({
                    status: 'danger',  
                    msg: 'No se pudo subier el archivo',
                    result: err
                });
            }
            
            Storage.create(upload, function(err, result) {
                res.json({
                    status: 'success',
                    msg: 'Archivo recibido',
                    result       
                });
            });
        });
    },

    delete: async(req, res) => {
        try {
            let _id = req.params.id;
            let file = await Storage.findOne({ _id });

            if(!file){
                return res.status(400).json({
                    status: 'warning',
                    msg: `The record does not exist`
                })
            }

            let name = await Storage.findByIdAndDelete({ _id });

            fs.unlink(path.join(home, name.path), (err) => {
                if (err) { 
                    return res.json({
                        status: 'danger',
                        msg: 'No se pudo borrar el archivo',
                        result: err
                    })
                } 
                res.json({
                    status: 'success',
                    msg: `File ${name.filename} deleted `,
                })
            })  
            
        } catch (error) {
            res.status(500).json({
                status: 'danger',
                msg: error
            });
        }

    },

    download: (req, res ) => {


    }
}