const mysql = require('mysql')

const connection = mysql.createConnection({

    host: process.env.DbHost,
    user: process.env.DbUser,
    password: process.env.DbPass,
    database: process.env.DbName

})

connection.connect((error) => {

    if(error) throw error
    console.log(`Conectado ao banco de dados: ${process.env.DbName}`)
    
})

module.exports = connection;