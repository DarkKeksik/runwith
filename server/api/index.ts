// @TODO возможна NoSQL injection, протестировать
import express from 'express'
import { getPageContent } from "../mongoDB/utils"

const app = express()

// All settings app
app.set('json spaces', 2)
app.use(express.static('dist'))

app.get('/api/get/content', async (req, res) => {
    const { query: { page } } = req
    const contentPageMain = await getPageContent(page as string).then((data: object) => data)
    res.json(contentPageMain)
})

export { app }