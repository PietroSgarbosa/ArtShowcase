let mysql  = require('mysql');
let config = require('./dbconfig');
let connection = mysql.createConnection(config);
 
// insert statment
let sql = `INSERT INTO project_artshowcase.cadastro
(CODI_USUAR,
NOME_USUAR,
NICK_USUAR,
MAIL_USUAR,
SENH_USUAR,
IDAD_USUAR,
SEXO_USUAR)
VALUES
(2,
'TESTE2',
'Testolino',
'teste2@etset.com',
'testando123',
'8,
'panzer');`;
 
// execute the insert statment
connection.query(sql, (err, results)=>{

    if(err){
        results.send(err);
    }else{
        results.send(results);
    }
});
 
connection.end();