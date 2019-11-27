const conn = require('../dbconfig');

module.exports = (app)=>{

    //INSERT VOTE
    app.post('/championship/vote_on_image', (req, res) =>{
        
        const {
            id_campeonato,
            id_usuario,
            id_imagem
        } = req.body

        let sql = `INSERT INTO controle_votos (CODI_CAMPE, CODI_USUAR, CODI_IMAGE)
        VALUES ('${id_campeonato}', '${id_usuario}', '${id_imagem}')`;               
                                                                                        
        conn.query(sql, (err, results)=>{ 
            
            if(err){                                        
                res.sendStatus(400);                        
            }else{
                
                res.json({status : 200});
            }
        });   
    });

    //RETURNS WINNER
    app.get('/championship/winner', (req, res) =>{

        const { 
            id_campeonato
        } = req.query;


        let sql = `SELECT a.CODI_USUAR as id_vencedor, b.NOME_USUAR as nome_vencedor FROM participantes_campeonato a 
                   JOIN cadastro_usuario b ON a.CODI_USUAR = b.CODI_USUAR
                   WHERE a.CODI_IMAGE = (SELECT CODI_IMAGE AS vencedor 
                                        FROM controle_votos WHERE CODI_CAMPE = ${id_campeonato}
                                        GROUP BY CODI_IMAGE
                                        ORDER BY  COUNT(CODI_IMAGE) DESC
                                        LIMIT 1);`;               
        
        conn.query(sql, (err, results)=>{ 
            if(err){                                        
                res.sendStatus(400);                        
            }else{
                res.send({ status : 200, results});
            }
        });

    });

    //RETURNS ALL SUBSCRIBED IMAGES
    app.get('/championship/get_championship_images', (req, res) =>{

        const id_campeonato = req.query.id_campeonato;

        let sql = `SELECT b.IMAG_PORTI as img_concorrente, a.QTDE_VOTOS as votos, 
        a.CODI_USUAR as artista FROM participantes_campeonato a
        join upload_imagens b on b.CODI_USUAR = a.CODI_USUAR  and a.CODI_IMAGE = b.CODI_IMAGE 
        WHERE a.CODI_CAMPE = ${id_campeonato};`;                                                                                       
                                                                                        
        conn.query(sql, (err, results)=>{ 
            
            if(err){                                        
                res.sendStatus(400);                        
            }else{
                
                res.json({status : 200, results});
            }
        });   
    });
   
    //RETURNS ALL CHAMPIONSHIPS AVAILABLE
    app.get('/championship/get_championship', (req, res) =>{

        let sql = `SELECT a.CODI_CAMPE as codi_campe, a.CODI_SITUA as situacao, 
        b.NOME_USUAR as criador,
        a.TITU_CAMPE as titulo, a.DESC_CAMPE as descricao, a.TEMA_CAMPE as tema, a.DATA_CRIAC as data_criacao 
        FROM campeonatos a
        join CADASTRO_USUARIO b on b.CODI_USUAR = a.CODI_USUAR;`;               
                                                                                        
        conn.query(sql, (err, results)=>{ 
            
            if(err){                                        
                res.sendStatus(400);                        
            }else{
                
                res.json({status : 200, results});
            }
        });   
    });

    //INSERT USER INTO CHAMPIONSHIP
    app.post('/championship/participate_championship', (req, res) =>{
        
        const {
            id_campeonato,
            id_usuario,
            id_imagem
        } = req.body

        let sql = `INSERT INTO participantes_campeonato (CODI_CAMPE, CODI_USUAR, CODI_IMAGE)
        VALUES ('${id_campeonato}', '${id_usuario}', '${id_imagem}')`;               
                                                                                        
        conn.query(sql, (err, results)=>{ 
            
            if(err){                                        
                res.sendStatus(400);                        
            }else{
                
                res.json({status : 200});
            }
        });   
    });
}

