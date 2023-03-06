// import {openDb} from './configDB.js';
import { createTable, insertPonto, updatePonto, selectAllPontos, selectPonto, deletePonto } from './controller/controlePonto.js'

import express from 'express';
const app = express();
app.use(express.json());

createTable();

app.get('/', function (req, res){
    res.send('Api rodando');
});

app.get('/Pontos',  async function (req, res){
let Pontos = await selectAllPontos();
res.json(Pontos)
});

app.get('/Ponto',  async function (req, res){
    let Ponto = await selectPonto(req.body.id);
    res.json(Ponto)
    });

app.post('/Ponto', function (req, res){
    insertPonto(req.body)
    res.json({
        "statusCode": 200
    })
})

app.put('/Ponto', function (req, res){
    if(req.body && !req.body.id){
        res.json({
            "statusCode": "400",
        "msg": "Você precisa informar um id"
        })
    } else{
        updatePonto(req.body)
        res.json({
            "statusCode": 200
        })
    }
})

app.delete('/Ponto',  async function (req, res){
    let Ponto = await deletePonto();
    res.json(Ponto) 
    });

app.listen(3000, () => console.log("Api rodando."));

