import {Schema , model} from 'mongoose';

const nucleotideSchema = new Schema({

    id: {
        type: String, 
        required: true,
        unique: true
    },

    assembly: {
        type: Schema.ObjectId, 
        ref: 'assembly',
        required: true
    },
    sequence: {
        type: String, 
        required: true
    },

    legth: {
        type: Number
    },
    
    desc: {
        type: String
    }
},{
    timestamps: true
});
const Nucleotide = model('nucleotide',nucleotideSchema);

export default Nucleotide;