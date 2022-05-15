import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router";
const app = express();
import React from 'react';
import App from "../client/App";
import { dbStart } from "./mongoDB";

app.use(express.static('dist'));

app.get('*', async (req, res) => {
    const routingContext = {}
    const content = renderToString (
        <StaticRouter location={req.url} context={routingContext}>
            <App />
        </StaticRouter>
    )

    res.send(`
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <link rel="stylesheet" href="/client/main.css"/>
            <title>Главная | runwith.ru</title>
        </head>
        <body>
            <noscript>Для работы нашего приложения нужен JavaScript</noscript>
            <div id="root">${content}</div>
            <script src="/client/main.js"></script>
        </body>
        </html>
    `);
});


// async IIFE (connect database and start server)
(async () => {
    try {
        await dbStart()
        app.listen(3000, () => {
            console.log(`
                #################################
                Server is listening on port: 3000
                #################################
            `)
        })
    } catch (e) {
        console.log(`
            ###############################
            Server hasn't been started! \n
            ${ e }
            ###############################
        `)
    }
})()