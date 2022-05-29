import db from 'mongoose'
import { url } from "./config"
import { logCustom } from "../utls"

const dbStart = () => db.connect(url, { useNewUrlParser: true })
const DBConnected = db.connection

DBConnected.on('connected', () => { logCustom('DB is started') })
DBConnected.on('disconnected', () => { logCustom('DB is disconnected') })
DBConnected.on('error', (e: any) => { logCustom(`DB is error: \n ${e}`) })

export { dbStart, DBConnected }