const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

let connection  = mysql.createConnection({
  host    : process.env.DB_HOST,
  port    : process.env.DB_PORT,
  user    : process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA
});

connection.connect((err) => {
  if (err) {
    console.error('Erro de conexão: ' + err.stack);
    return;
  }
 
console.log('Conectado ao BD! ID: ' + connection.threadId);
});

module.exports = connection;