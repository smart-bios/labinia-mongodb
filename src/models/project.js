import { Schema, model } from 'mongoose'

const projectSchema = new Schema({

    code: {
        type: String,
        unique: true
    },

    advisor: {
        type: String
    },

    description: {
        type: String,
    }
},{

    timestamps: true
  
})

const Project = model('project', projectSchema);

export default Project