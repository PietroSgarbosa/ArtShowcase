let conn = require('../dbconfig');

module.exports = (app)=>{

    app.get('/user/user_list', (req, res)=>{

        conn.query("SELECT * FROM project_artshowcase.cadastro", (err, results)=>{

            if(err){
                res.send(err);
            }else{
                res.send(results);
            }
        });

        conn.end();
    });

    app.post('/user/register', (req, res)=>{
            
        let post  = req.body;
        let user = post.nick;
        let nick = post.nick;
        let mail = post.email;
        let pw = post.senha;
        let age = post.idade;
        let gender = post.sexo;

        // insert statment (TESTING PURPOSE)
        let sql = `INSERT INTO project_artshowcase.cadastro
                    (NOME_USUAR, NICK_USUAR, MAIL_USUAR, SENH_USUAR, IDAD_USUAR, SEXO_USUAR)
                     VALUES ('teste', 'teste', 'teste@teste', '123testando', '22', 'masculino');`;

        
        
        // execute the insert statment
        conn.query(sql, (err, results)=>{

            if(err){
                res.send(err);
                
            }else{
                res.send(results);
                app.render('Registro.vue', function (err, html) {
                    // ...
                  })
                
            }
        });
        
    });
    /*NOT WORKING YET
        //TEST INSERT
            /*let sql = `INSERT INTO project_artshowcase.cadastro
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
                '`+gender+`');`;*/

            /*app.get('/user/register', (req, res)=>{
                let query = `INSERT INTO project_artshowcase.cadastro
                            (NOME_USUAR, NICK_USUAR, MAIL_USUAR, SENH_USUAR, IDAD_USUAR, SEXO_USUAR)
                            VALUES ('teste', 'teste', 'teste@teste', '123testando', '22', 'masculino');`;

                conn.query(query, (err, results)=>{

                    if(err){
                        res.send(err);
                    }else{
                        res.send(results);
                    }
                });
            });
    */
   
}
    

