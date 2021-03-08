import os from 'os'
import path from 'path'
import fs from 'fs'
import Assembly from '../models/assembly'
import Project from '../models/project'

const home = os.homedir()

export default {

    add: async(req, res) => {
        try {
            let { project, code } = req.body
            let existAssembly = await Assembly.findOne({ code })
            
            //.populate('project',{ code:1 })

            if(existAssembly){
                return res.status(400).json({
                    status: 'warning',
                    msg: `The Assembly code is already registered: ${code}`
                })
            }
            
            let assembly = await Assembly.create(req.body)

            let codeProject = await Project.findOne({ _id: project })

            fs.mkdir(path.join(home, `/Projects/${codeProject.code}/${code}`), { recursive: true }, (err) => {
                if (err) throw err;
                res.json({
                    status: 'success',
                    msg: `Project ${code} has been created`,
                })               
            });

        } catch (error) {
            res.status(500).json({
                status: 'danger',
                msg: error
            });
        }
    },

    list: async( req, res ) => {
        try {
            let assembly = await Assembly.find({})
            .populate('project',{code:1})
            .populate('specie',{scientific_name:1})
            ;

            res.json({
                status: 'success',
                msg: `Total assemblys: `,
                result: assembly
            });


        } catch (error) {
            res.status(500).json({
                status: 'danger',
                msg: error
            });
        }
    },

    edit: async( req, res ) => {
        try {
            const { id } = req.params;
            const { body } = req;
    
            const assembly = await Assembly.findOne( { _id: id } );
    
            if(!assembly){
                return res.status(400).json({
                    status: 'warning',
                    msg: `The record does not exist`,
                    result: ''
                })
            }
    
            await Assembly.findByIdAndUpdate( id, body, { new: true, runValidators: true });
    
            res.json({
                status: 'success',
                msg: `Specie ${assembly.code} has been updated`,

            })
    
        } catch (error) {
            res.status(500).json({
                status: 'danger',
                msg: error,
            });
        }
    },

    delete: async( req, res ) => {
        try {
            const { id } = req.params;
    
            const assembly = await Assembly.findOne( { _id: id } ).populate('project',{ code:1 });
    
            if(!assembly){
                return res.status(400).json({
                    status: 'warning',
                    msg: `The record does not exist`
                })
            }
            
            await Assembly.findByIdAndDelete({ _id: id });
            //await User.findByIdAndUpdate( id, {status: false }, { new: true, runValidators: true } )

            fs.rmdir(path.join(home, `/Projects/${assembly.project.code}/${assembly.code}`), { recursive: true }, (error) => { 
                if (error) { 
                    res.status(500).json({
                        status: 'danger',
                        msg: 'cannot delete the user folder',
                    })
                }

                res.json({
                    status: 'success',
                    msg: `Assembly ${assembly.code}  has been deleted`
                })
            });

        } catch (error) {
            res.status(500).json({
                status: 'danger',
                msg: error
            });
        }
    }
}