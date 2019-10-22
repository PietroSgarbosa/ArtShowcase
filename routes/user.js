const conn = require('../dbconfig');
const jwt = require('jsonwebtoken');



module.exports = (app)=>{
   
    app.post('/user/login', (req, res)=>{
        
        const {
            nick,
            senha
        } = req.body; //RECIEVES USER DATA FROM THE FORM

        let sql = `SELECT CODI_USUAR, NICK_USUAR, NOME_USUAR, 
                   MAIL_USUAR, IDAD_USUAR, SEXO_USUAR 
                   FROM cadastro_usuario
                   WHERE NICK_USUAR = '${nick}' AND SENH_USUAR = '${senha}'`; //IF THE USER EXISTS, RETRIEVES ALL IT'S DATA
                                                                              //FOR SENDING IT TO THE FRONT END LATER.
        conn.query(sql, (err, results)=>{
                  
            if(err){
                console.log(err);
                res.sendStatus(400);
            }else if (results.length != 1){
                console.log("Usuário ou senha incorreto(s)");
                res.sendStatus(403);
            }else{
                const user={   //OBJECT WITH ALL USER'S DATA (THE IMPORTANT ONES)
                    id : results[0].CODI_USUAR,
                    name : results[0].NOME_USUAR,
                    nick : results[0].NICK_USUAR,
                    email : results[0].MAIL_USUAR,
                    age : results[0].IDAD_USUAR,
                    gender : results[0].SEXO_USUAR
                };
                jwt.sign({user}, process.env.JWT_SECRET,(err, token) =>{//HERE'S WHERE ALL THE TOKEN SHENANIGANS BEGINS. 
                    console.log("Login realizado! token: " + token);
                    res.status(200).json({token});          //ALL THE INFORMATION CONTAINED IN THE OBJECT "user"
                });                                         //WILL BE ENCODED INTO A TOKEN, AND THE WORD 'secret'
                                                            //IS THE KEY TO DECODE IT. THE LOGGED USER WILL HAVE A SPECIFIC TOKEN
            }                                               //AND A TIMESTAMP FOR US TO KEEP TRACK OF HIM/HER/IT
        });                                                 //OH... AND THIS LINE SEND ALL THE DATA TO THE FRONT            

    });

    app.post('/user/upload_image',verifyToken, (req, res) =>{

        const {
            token,
            titulo,
            descricao
        } = req.body; //RECIEVES DATA FROM THE FORM
        
        jwt.verify(req.token, process.env.JWT_SECRET, (err, authData)=>{//THE API RECIEVES THE TOKEN AND THEN DECODE IT, 
            if(err){                                        //TURNING IT INTO A JSON THAT CONTAINS ALL THE DATA FROM THE USER.
                res.sendStatus(403);                        //ALSO, HERE'S WHERE WE PUT OUR LITTLE SECRET FOR DECONDING.
            }else{                                          //THERE ARE MUCH BETTER WAYS TO HIDE THESE HARD CODED PASSWORDS,
                res.json({                                  //I'LL BE LOOKING FOWARD ON USING THOSE WAYS...
                    message : 'post created',
                    authData
                });
            }
        });
    });

    app.post('/user/logout',verifyToken, (req, res) =>{

        const {
            token
        } = req.body; //RECIEVES DATA FROM THE FORM

        if(err){                                        
            res.sendStatus(400);                        
        }else{                                          
            res.json({                                  
                status : 200
            });
        }
        
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
                console.log("Usuário Criado!");
                res.sendStatus(200);
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

