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
    },

    specie: {
        type: Schema.ObjectId, 
        ref: 'specie',
    },

    methods: {
        type: String
    }
})

const Project = model('project', projectSchema);

export default Project