import {openDb} from '../configDB.js';

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Ponto ( id INTEGER PRIMARY KEY AUTOINCREMENT, funcionario TEXT, dia DATE NOT NULL, entrada TIME DEFAULT NULL, saida TIME DEFAULT NULL)')
    })
}

export async function insertPonto(controlePonto){
    openDb().then(db=>{
        db.run('INSERT INTO Ponto (funcionario, dia, entrada, saida) VALUES (?,?,?,?)', [controlePonto.funcionario, controlePonto.dia, controlePonto.entrada, controlePonto.saida]);
    });
}