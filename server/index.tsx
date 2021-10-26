import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { App } from "../client/App";
const app = express();

app.use(express.static('dist'));


app.get('*', async (req, res) => {
    const content = renderToString(App());

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <link rel="stylesheet" href="/client/main.css"/>            
            <title>React SSR</title>
        </head>
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root">${content}</div>
            <script src="/client/main.js"></script>
        </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log(`Server is listening on port: 3000`);
});
