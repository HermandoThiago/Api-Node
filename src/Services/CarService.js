const db = require('../db');

module.exports = {
    SearchAll: () => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM Cars', (error, results) => {

                if(error) {rejeitado(error); return;}
                aceito(results)
            })

        })
    },
    SearchOne: (id) => {

        return new Promise((aceito, rejeitado) => {

            db.query(`SELECT * FROM Cars WHERE  ID = ?`, [id], (error, results) => {

                if(error) {rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0])
                }else{
                    aceito(false)
                }
            })

        })

    },
    InsertCar: (modelo, placa, ano, km) => {

        return new Promise((aceito,rejeitado) => {

            db.query('INSERT INTO cars (Modelo, placa, Ano, kmRodados) VALUES (?, ?, ?, ?)', [modelo, placa, ano, km], (error, results) => {
                if(error) {rejeitado(error); return;}
                aceito(results.InsertCod)
            });

        });

    },

    AlterCar:(id, modelo, placa, ano, km)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('UPDATE cars SET Modelo = ?, placa = ?, Ano = ?, KmRodados = ? WHERE ID = ?',
                [modelo, placa, ano, km, id],
                (error, results) => {
                    if(error){ rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },

    DeleteCar: (id) => {

        return new Promise((aceito, rejeitado) => {

            db.query('DELETE FROM cars WHERE ID = ?', [id], (error, results) => {
                if(error) {rejeitado(error); return;}
                aceito(results)
            })

        })

    }
}