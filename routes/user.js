let conn = require('../dbconfig');

module.exports = (app)=>{

    app.post('/user/login', (req, res)=>{

        const {
            nick,
            senha
        } = req.body;

        let sql = `SELECT * FROM project_artshowcase.cadastro WHERE NICK_USUAR = '${nick}' AND SENH_USUAR = '${senha}'`;

        conn.query(sql, (err, results, fields)=>{
           
            console.log(results.length);
                       
            if(err){
                console.log(err);
                res.sendStatus(400);
            }else if (results.length != 1){
                console.log("Usuário ou senha incorreto(s)");
                res.sendStatus(404);
            }else{
                console.log("Login realizado!");
                res.sendStatus(200);
            }
        });

    });

    app.post('/user/register', (req, res)=>{
            
        const {
            usuario,
            nick,
            email,
            senha,
            idade,
            sexo
        } = req.body;

        // insert statment (TESTING PURPOSE)
        let sql = `INSERT INTO project_artshowcase.cadastro
                    (NOME_USUAR, NICK_USUAR, MAIL_USUAR, SENH_USUAR, IDAD_USUAR, SEXO_USUAR)
                     VALUES ('${usuario}', '${nick}', '${email}', '${senha}', '${idade}', '${sexo}');`;

        // execute the insert statment
        conn.query(sql, (err, results)=>{

            if(err){
                console.log(err);
                res.sendStatus(400);
            }else{
                res.sendStatus(200);
            }
        });
        
    });

    //TEST INSERT
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
    });*/
   
}
    //AINDA NÃO FUNCIONAL
     /**/

