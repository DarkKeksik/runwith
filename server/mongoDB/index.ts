import db from 'mongoose'
import { url } from "./config"

const dbStart = () => db.connect(url, { useNewUrlParser: true })

export { dbStart, db }