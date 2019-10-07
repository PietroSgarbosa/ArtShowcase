var mysql = require('mysql');

let connection  = mysql.createConnection({
  host    : '127.0.0.1',
  port    : '3000',
  user    : 'user_test',
  password: '123456',
  database: 'project_artshowcase'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro de conexão: ' + err.stack);
    return;
  }
 
console.log('Conectado ao BD! ID: ' + connection.threadId);
});

module.exports = connection;