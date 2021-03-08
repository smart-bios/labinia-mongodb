import {Schema , model} from 'mongoose';

const proteinSchema = new Schema({
    identifier: {
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
    },
    preferred_name:{
        type: String
    },
    funcional_COG:{
        type: String
    },
    GOs:{
        type: String
    },
    KEGG_ko:{
        type: String
    },
    KEGG_pathway:{
        type: String
    }
},{
    timestamps: true
});
const Protein = model('protein',proteinSchema);

export default Protein;