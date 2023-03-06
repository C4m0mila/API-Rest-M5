import {openDb} from '../configDB.js';

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Ponto ( id INTEGER PRIMARY KEY AUTOINCREMENT, funcionario TEXT, dia DATE NOT NULL, entrada TIME DEFAULT NULL, saida TIME DEFAULT NULL)')
        console.log('Tabela criada com sucesso');
    }).catch((error) => {
      console.error(error);    
    });
}

export async function insertPonto(controlePonto){
    openDb().then(db=>{
        db.run('INSERT INTO Ponto (funcionario, dia, entrada, saida) VALUES (?,?,?,?)', [controlePonto.funcionario, controlePonto.dia, controlePonto.entrada, controlePonto.saida]);
    }).then(() => {
        console.log("Registro inserido com sucesso!");
    }).catch((err) => {
        console.log("Erro ao inserir registro: ", err);
    });
}

export async function updatePonto(controlePonto){
    openDb().then(db=>{
        db.run('UPDATE Ponto SET funcionario=?, dia=?, entrada=?, saida=? WHERE id=?', [controlePonto.funcionario, controlePonto.dia, controlePonto.entrada, controlePonto.saida, controlePonto.id]);
    }) .then(() => {
            console.log('Registro atualizado com sucesso');
            return true;
          })
          .catch(err => {
            console.error(err);
            return false;
          });
}


export async function selectAllPontos(){
   return openDb().then(db=>{
       return db.all('SELECT * from Ponto')
        .then(res=>res)
    });
}

export async function selectPonto(id){
  return openDb().then(db => {
    return db.get('SELECT * from Ponto WHERE id=?', [id])
      .then(res => res)
      .catch(err => {
        console.error(err);
        throw err;
      });
  });
}

export async function deletePonto(id){
    return openDb().then(db => {
      return db.get('DELETE from Ponto WHERE id=?', [id])
        });
  }

