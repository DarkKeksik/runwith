import { model } from 'mongoose'
import { SchemaGuest, SchemaContentMainPage } from './schemas'

const ModelGuest = model('guests', SchemaGuest)
const ModelContentPages = model('contents', SchemaContentMainPage)

export {ModelGuest, ModelContentPages}