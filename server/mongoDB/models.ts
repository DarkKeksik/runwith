import {Schema, model} from 'mongoose'

const SchemaGuest = new Schema({
    ip: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    page: {
        type: String,
    }
})

const ModelGuest = model('guests', SchemaGuest)

export {ModelGuest}