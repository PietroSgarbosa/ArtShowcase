const conn = require('../dbconfig');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secret';


module.exports = (app)=>{
   
    app.post('/user/login', (req, res)=>{
        
        const {
            usuario,
            senha
        } = req.body;

        let sql = `SELECT CODI_USUAR, NOME_USUAR FROM cadastro WHERE NICK_USUAR = '${usuario}' AND SENH_USUAR = '${senha}'`;

        conn.query(sql, (err, results)=>{
                  
            if(err){
                console.log(err);
                res.sendStatus(400);
            }else if (results.length != 1){
                console.log("Usuário ou senha incorreto(s)");
                res.sendStatus(403);
            }else{
                const user={
                    id : results[0].CODI_USUAR,
                    name : results[0].NOME_USUAR
                };
                jwt.sign({user}, JWT_SECRET,(err, token) =>{//HERE'S WHERE ALL THE TOKEN SHENANIGANS BEGINS. 
                    res.status(200).json({token});          //ALL THE INFORMATION CONTAINED IN THE OBJECT "user"
                });                                         //WILL BE ENCODED INTO A TOKEN, AND THE WORD 'secret'
                                                            //IS THE KEY TO DECODE IT. THE LOGGED USER WILL HAVE A SPECIFIC TOKEN
            }                                               //AND A TIMESTAMP FOR US TO KEEP TRACK OF HIM/HER/IT
        });

    });

    app.post('/user/upload_image',verifyToken, (req, res) =>{
        
        jwt.verify(req.token, JWT_SECRET, (err, authData)=>{//HERE THE API RECIEVES THE TOKEN AND THEN DECODE IT, 
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
        let sql = `INSERT INTO cadastro
                    (NOME_USUAR, NICK_USUAR, MAIL_USUAR, SENH_USUAR, IDAD_USUAR, SEXO_USUAR)
                     VALUES ('${usuario}', '${nick}', '${email}', '${senha}', '${idade}', '${sexo}');`;

        // execute the insert statment
        conn.query(sql, (err)=>{

            if(err){
                console.log(err);
                res.sendStatus(400);
            }else{
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
        res.sendStatus(403);
        }

    }
   
}
    //AINDA NÃO FUNCIONAL
     /**/

