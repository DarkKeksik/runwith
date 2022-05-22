import {Schema} from "mongoose";

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

const SchemaContentMainPage = new Schema({
    id: {
        type: String,
        required: true
    },
    page: {
        type: String
    },
    h1: {
        type: String
    },
    serviceInformation: {
        type: Object
    }
})

export { SchemaGuest, SchemaContentMainPage }