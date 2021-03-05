import { Schema, model } from 'mongoose'


const specieSchema = new Schema({

    name: {
        type: String
    },

    scientific_name: {
        type: String,
        unique: true
    },

    short_name: {
        type: String,
        unique: true
    },

    alias: {
        type: String,
        unique: true
    },

    description: {

    }
},{

  timestamps: true

})

const Specie = model('specie', specieSchema);


export default Specie;