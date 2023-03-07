import { openDb } from './configDB.js';

class PontoDAO {
  constructor() {
    this.db = openDb();
  }

  async selectAllPontos() {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * from Ponto', (err, rows) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
  
  async selectPonto(id) {
    return new Promise((resolve, reject) => {
      this.db.get('SELECT * from Ponto WHERE id=?', [id], (err, row) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }
  
  async insertPonto(Ponto) {
    return new Promise((resolve, reject) => {
      this.db.run('INSERT INTO Ponto (funcionario, dia, entrada, saida) VALUES (?,?,?,?)', [Ponto.funcionario, Ponto.dia, Ponto.entrada, Ponto.saida], function (err) {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log("Registro inserido com sucesso!");
          resolve(this.lastID);
        }
      });
    });
  }
  
  async updatePonto(Ponto) {
    return new Promise((resolve, reject) => {
      this.db.run('UPDATE Ponto SET funcionario=?, dia=?, entrada=?, saida=? WHERE id=?', [Ponto.funcionario, Ponto.dia, Ponto.entrada, Ponto.saida, Ponto.id], function (err) {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log('Registro atualizado com sucesso');
          resolve(this.changes);
        }
      });
    });
  }
  
  async deletePonto(id) {
    return new Promise((resolve, reject) => {
      this.db.run('DELETE from Ponto WHERE id=?', [id], function (err) {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log('Registro excluído com sucesso');
          resolve(this.changes);
        }
      });
    });
  }

  async selectAllPontos() {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * from Ponto', (err, rows) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  async selectPonto(id) {
    return new Promise((resolve, reject) => {
      this.db.get('SELECT * from Ponto WHERE id=?', [id], (err, row) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  async insertPonto(Ponto) {
    return new Promise((resolve, reject) => {
      this.db.run('INSERT INTO Ponto (funcionario, dia, entrada, saida) VALUES (?,?,?,?)', [Ponto.funcionario, Ponto.dia, Ponto.entrada, Ponto.saida], function (err) {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log("Registro inserido com sucesso!");
          resolve(this.lastID);
        }
      });
    });
  }

  async updatePonto(id) {
    return new Promise((resolve, reject) => {
      this.db.run('UPDATE Ponto SET funcionario=?, dia=?, entrada=?, saida=? WHERE id=?', [Ponto.funcionario, Ponto.dia, Ponto.entrada, Ponto.saida, Ponto.id], function (err) {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log('Registro atualizado com sucesso');
          resolve(this.changes);
        }
      });
    });
  }

  async deletePonto(id) {
    return new Promise((resolve, reject) => {
      this.db.run('DELETE from Ponto WHERE id=?', [id], function (err) {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log('Registro excluído com sucesso');
          resolve(this.changes);
        }
      });
    });
  };
};

export default PontoDAO;