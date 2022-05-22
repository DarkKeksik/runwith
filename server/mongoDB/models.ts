import { model } from 'mongoose'
import { SchemaGuest, SchemaContentMainPage } from './schemas'

const ModelGuest = model('guests', SchemaGuest)
const ModelContentMainPage = model('content', SchemaContentMainPage)

export {ModelGuest, ModelContentMainPage}