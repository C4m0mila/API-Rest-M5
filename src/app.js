// import {openDb} from './configDB.js';
import { createTable, insertPonto } from './controller/controlePonto.js'

import express from 'express';
const app = express();
app.use(express.json());

createTable();

app.get('/', function (req, res){
    res.send('Hello World');
});

app.post('/controlePonto', function (req, res){
    insertPonto(req.body)
    res.json({
        "statusCode": 200
    })
})

app.listen(3000, () => console.log("Api rodando."));