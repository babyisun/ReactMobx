const express = require('express');
const MockJS = require('mockjs');
const config = require('./config');

const app = express();
const port = 3001;

Object.keys(config).forEach(key => {
    const api = key.split(' ');
    const type = api[0].toLowerCase();
    const url = api[1];

    app[type](url, (req, res) => {
        //服务端允许跨域请求
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json({
            errno: 0,
            errmsg: 'success',
            // errno: 3002,
            // errmsg: 'token失效',
            ...MockJS.mock(config[key]),
        })
    });
});

app.listen(port, () => console.log(`😄 Mock server is listening on port ${port}`));