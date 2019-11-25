const conn = require('../dbconfig');

module.exports = (app)=>{
   
    //RETURNS ALL CHAMPIONSHIPS AVAILABLE
    app.get('/championship/get_championship', (req, res) =>{

        /*let sql = `SELECT CODI_CAMPE as codi_campe, CODI_SITUA as situacao, 
        (SELECT A.NOME_USUAR FROM CADASTRO_USUARIO AS A, CAMPEONATOS AS B WHERE A.CODI_USUAR = B.CODI_USUAR) as criador, 
        TITU_CAMPE as titulo, DESC_CAMPE as descricao, TEMA_CAMPE as tema, DATA_CRIAC as data_criacao FROM campeonatos;`;  */  

        let sql = `SELECT CODI_CAMPE as codi_campe, CODI_SITUA as situacao, 
        CODI_USUAR as criador, 
        TITU_CAMPE as titulo, DESC_CAMPE as descricao, TEMA_CAMPE as tema, DATA_CRIAC as data_criacao FROM campeonatos;`;               
                                                                                        
        conn.query(sql, (err, results)=>{ 
            
            if(err){                                        
                res.sendStatus(400);                        
            }else{
                
                res.json({status : 200, results});
            }
        });   
    });
}

