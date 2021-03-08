import { Schema, model } from 'mongoose'

const asemblySchema = new Schema({

    project: {
        type: Schema.ObjectId, 
        ref: 'project',
    },
    
    specie: {
        type: Schema.ObjectId, 
        ref: 'specie',
    },

    code: {
        type: String,
        required: true
    },

    methods: {
        type: String,
    },
    version: {
        type: String,
        default: 'v1.0'
    },
    level: {
        type: String,
        default: 'contig',
        enum: ['contig','scaffold','complete']
    },
    contig: {
        type: Number,
        required: true
    },
    size: {
        type: String
    },
    cds: {
        type: String
    },
    genes: {
        type: String
    },
    rRNA: {
        type: String
    },
    tRNA: {
        type: String
    }
},{

  timestamps: true

})

const Assembly = model('assembly', asemblySchema);

export default Assembly