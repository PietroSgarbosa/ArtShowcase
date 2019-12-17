const conn = require('../dbconfig');
const jwt = require('jsonwebtoken');

module.exports = (app)=>{
   
    //CHECK IF THE USER IS VALID FOR LOGIN
    app.post('/user/login', (req, res)=>{
        
        const {
            nick,
            senha
        } = req.body; //RECIEVES USER DATA FROM THE FORM

        let sql = `SELECT CODI_USUAR, NICK_USUAR, NOME_USUAR, 
                   MAIL_USUAR, IDAD_USUAR, SEXO_USUAR, IMAG_PERFI 
                   FROM cadastro_usuario
                   WHERE NICK_USUAR = '${nick}' AND SENH_USUAR = '${senha}'`; //IF THE USER EXISTS, RETRIEVES ALL IT'S DATA
                                                                              //FOR SENDING IT TO THE FRONT END LATER.
        conn.query(sql, (err, results)=>{
                  
            if(err){
                console.log(err);
                res.sendStatus(400);
            }else if (results.length != 1){
                
                res.sendStatus(403);
            }else{
                const user={   //OBJECT WITH ALL USER'S DATA (THE IMPORTANT ONES)
                    id : results[0].CODI_USUAR,
                    name : results[0].NOME_USUAR,
                    nick : results[0].NICK_USUAR,
                    email : results[0].MAIL_USUAR,
                    age : results[0].IDAD_USUAR,
                    gender : results[0].SEXO_USUAR,
                    photo : results[0].IMAG_PERFI
                };
                //jwt.sign({user}, process.env.JWT_SECRET,(err, token) =>{//HERE'S WHERE ALL THE TOKEN SHENANIGANS BEGINS. 
                    res.status(200).json({user});          //ALL THE INFORMATION CONTAINED IN THE OBJECT "user"
               // });                                         //WILL BE ENCODED INTO A TOKEN, AND THE WORD 'secret'
                                                            //IS THE KEY TO DECODE IT. THE LOGGED USER WILL HAVE A SPECIFIC TOKEN
            }                                               //AND A TIMESTAMP FOR US TO KEEP TRACK OF HIM/HER/IT
        });                                                 //OH... AND THIS LINE SEND ALL THE DATA TO THE FRONT            

    });
    
    //INSERT IMAGE TO THE USER'S ALBUM
    app.post('/user/upload_image', (req, res, err) =>{

        const {
            id,
            imagem,
            titulo,
            descricao
        } = req.body; //RECIEVES DATA FROM THE FORM     
        
        let sql = `INSERT INTO upload_imagens (CODI_USUAR, IMAG_PORTI, TITU_IMAGE, DESC_IMAGE) 
                   VALUES ('${id}', '${imagem}', '${titulo}', '${descricao}');`;
                                                        
        conn.query(sql, (err)=>{                                            
            if(err){
                console.log(err);
                console.log("--------------------------------");                                    
                res.sendStatus(403);                        
            }else{                                           
                res.sendStatus(200);
            }
        });
           
        
    });

    //UPDATE USER'S DATA
    app.put('/user/update_user_data', (req, res, err) =>{

        let {
            id,
            nick,
            descricao,
            gender,
            newUsername,
            newDescricaoUser,
            newGender
        } = req.body; //RECIEVES DATA FROM THE FORM    

        newUsername = newUsername == null ? nick : newUsername;
        newDescricaoUser = newDescricaoUser == null ? descricao : newDescricaoUser;
        newGender = newGender == null ? gender : newGender;
        
        let sql = `UPDATE cadastro_usuario SET NICK_USUAR = '${newUsername}', DESC_USUAR = '${newDescricaoUser}', SEXO_USUAR = '${newGender}'
                   WHERE CODI_USUAR = '${id}';`;   
        
        conn.query(sql, (err, results)=>{                                            
            if(err){
                console.log(err);
                console.log("--------------------------------");                                    
                res.sendStatus(400);                        
            }else{                      
                res.sendStatus(200);
            }
        });
             
    });

    //UPDATE USER'S PROFILE PICTURE
    app.put('/user/update_profile_pic', (req, res, err) =>{

        const {
            imagem,
            id
        } = req.body; //RECIEVES DATA FROM THE FORM     
        
        let sql = `UPDATE cadastro_usuario SET IMAG_PERFI = '${imagem}'
                   WHERE CODI_USUAR = '${id}';`;
                                                        
        conn.query(sql, (err, results)=>{                                            
            if(err){
                console.log(err);
                console.log("--------------------------------");                                    
                res.sendStatus(400);                        
            }else{   
                                                        
                res.sendStatus(200);
            }
        });
             
    });

    //RETRIEVES USER'S DATA (TESTING PURPOSE)
    app.get('/user/get_user_data', (req, res) =>{

        let sql = `SELECT NICK_USUAR AS nick, NOME_USUAR as nome, IMAG_PERFI as imagem FROM cadastro_usuario;`;               
                                                                                        
        conn.query(sql, (err, results)=>{ 
            
            if(err){                                        
                res.sendStatus(400);                        
            }else{
                
                res.json({status : 200, results});
            }
        });   
    });

    //SEARCH ALL USER'S IMAGES FOR FUTURE LISTING
    app.get('/user/search_images', (req, res) =>{

        //STORE THE INFO FROM THE GET REQUEST
        const id = req.query.id;

        let sql = `SELECT CODI_IMAGE as cod_image, TITU_IMAGE as titulo_image, IMAG_PORTI as porti_image, DESC_IMAGE as desc_image FROM upload_imagens WHERE CODI_USUAR = '${id}';`;              
                                                                                        
        conn.query(sql, (err, results)=>{ 
            
            if(err){                                        
                res.sendStatus(404);                        
            }else{
                res.json({status : 200, results});
            }
        });
        
    });

    //SEARCH ALL USER'S IMAGES FOR FUTURE LISTING
    app.get('/user/search_image_title', (req, res) =>{

        //STORE THE INFO FROM THE GET REQUEST
        const id = req.query.id;
        let sql = `SELECT CODI_IMAGE as cod_image, TITU_IMAGE as titulo_image FROM upload_imagens WHERE CODI_USUAR = '${id}';`;              
                                                                                        
        conn.query(sql, (err, results)=>{ 
            
            if(err){                                        
                res.sendStatus(404);                        
            }else{
                res.json({status : 200, results});
            }
        });
        
    });

    //DELETES USER IMAGE
    app.delete('/user/delete_image', (req, res) =>{

        const {
            user_id,
            image_id
            } = req.query;

        let sql = `DELETE FROM upload_imagens WHERE CODI_IMAGE = '${image_id}' AND CODI_USUAR = '${user_id}';`;              
                                                                                        
        conn.query(sql, (err, results)=>{ 
            
            if(err){                                        
                res.sendStatus(400);                        
            }else{
                res.sendStatus(200);
            }
        });
        
    });

    //USER REGISTER
    app.post('/user/register', (req, res)=>{
            
        const {
            usuario,
            nick,
            email,
            senha,
            idade,
            sexo
        } = req.body;

        // insert statment (WORKS AMAZINGLY!!!)
        let sql = `INSERT INTO cadastro_usuario
                    (NOME_USUAR, NICK_USUAR, MAIL_USUAR, SENH_USUAR, IDAD_USUAR, SEXO_USUAR)
                     VALUES ('${usuario}', '${nick}', '${email}', '${senha}', '${idade}', '${sexo}');`;

        // execute the insert statment
        conn.query(sql, (err)=>{

            if(err){
                console.log(err);
                console.log("--------------------------------");
                res.sendStatus(400);
            }else{
                res.sendStatus(200);
            }
        });
        
    });

    //CREATE CHAMPIONSHIP
    app.post('/user/create_championship', (req, res)=>{
            
        const {
            id,
            titulo_campeonato,
            descricao_campeonato,
            tema_campeonato
        } = req.body;

        var _fim_inscricao = new Date();
        _fim_inscricao.setDate(_fim_inscricao.getDate() + 2);
        _fim_inscricao.setMonth(_fim_inscricao.getMonth());
        _fim_inscricao.setFullYear(_fim_inscricao.getFullYear());
        
        var fim_inscricao = new Date(_fim_inscricao.getFullYear(),_fim_inscricao.getMonth(),_fim_inscricao.getDate());
        console.log(fim_inscricao);

        var _fim_campeonato = new Date();
        _fim_campeonato.setDate(_fim_campeonato.getDate() + 7);
        _fim_campeonato.setMonth(_fim_campeonato.getMonth());
        _fim_campeonato.setFullYear(_fim_campeonato.getFullYear());

        var fim_campeonato = new Date(_fim_campeonato.getFullYear(), _fim_campeonato.getMonth(),_fim_campeonato.getDate());
        console.log(fim_campeonato);
        
        let sql = `INSERT INTO campeonatos
                    (CODI_SITUA, CODI_USUAR, TITU_CAMPE, DESC_CAMPE, TEMA_CAMPE, FIM__INSCR, DATA_ENCER)
                     VALUES (0, '${id}', '${titulo_campeonato}', '${descricao_campeonato}', '${tema_campeonato}','${fim_inscricao}','${fim_campeonato}');`;

        
        conn.query(sql, (err)=>{

            if(err){
                console.log(err);
                console.log("--------------------------------");
                res.sendStatus(400);
            }else{
                res.send({status : 200});
            }
        });
        
    });

    
    // TOKEN OUTPUT (WHAT IT RETURNS) --> Authorization: Bearer <access_token> //Bearer moves a token to the Header of the request

  //VERIFY TOKEN
    function verifyToken (req, res, next){
        //GET AUTH HEADER VALUE
        const bearerHeader = req.headers['authorization'];
        //CHECK IF bearerHeader IS UNDEFINED
        if(typeof bearerHeader !== 'undefined'){
            //SPLIT AT SPACE
            const bearer = bearerHeader.split(' '); //TURNS STRING INTO AN ARRAY --> [Bearer, <access_token>]
            //GET TOKEN FROM ARRAY -->[Bearer, <access_token> <--GET THIS GUY]
            const bearerToken = bearer[1];
            //SET THE TOKEN
            req.token = bearerToken;
            //NEXT middleware
            next();
        }else{
        //forbidden '403'
        console.log("Acesso negado!");
        res.sendStatus(403);
        }

    }
   
}
    //AINDA NÃO FUNCIONAL
     /**/
