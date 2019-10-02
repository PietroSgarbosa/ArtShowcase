
module.exports = (app)=>{

    app.post('/user/register', (req, res)=>{ //REGISTER USER INTO DATABASE
        
        let mysql  = require('mysql');
        let config = require('../dbconfig');
        let connection = mysql.createConnection(config);
        
          let post  = req.body;
          let user = post.usuario;
          let nick = post.apelido;
          let mail = post.email;
          let pw = post.senha;
          let age = post.idade;
          let gender = post.sexo;

        // insert statment
        let sql = `INSERT INTO project_artshowcase.cadastro
        (NOME_USUAR,
        NICK_USUAR,
        MAIL_USUAR,
        SENH_USUAR,
        IDAD_USUAR,
        SEXO_USUAR)
        VALUES
        ('`+user+`',
        '`+nick+`',
        '`+mail+`',
        '`+pw+`',
        `+age+`,
        '`+gender+`');`;

        res.statusCode = 200;
        
        // execute the insert statment
        connection.query(sql, (err, results)=>{

            if(err){
                results.send(err);
            }else{
                
                results.send(results);
            }
        });

        connection.end();
        
    });

    app.get('/user/login', (req, res)=>{ //VALIDATE USER INSERTED DATA FOR LOGIN

        let post  = req.body

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            user: [{
                cod: 2,
                name: post.nick,
                nick: 'Testolino',
                mail: 'teste2@etset.com',
                pw: 'testando123',
                age: 8,
                gender: 'panzer'
            }]
        });
    });

}