
/*// TOKEN OUTPUT (WHAT IT RETURNS) --> Authorization: Bearer <access_token> //Bearer moves a token to the Header of the request

    //VERIFY TOKEN
    module.exports = function  (req, res, next){
        //GET AUTH HEADER VALUE
        const token = req.headers['authorization'];
        //CHECK IF token IS UNDEFINED
        if(typeof token !== 'undefined'){
            //SPLIT AT SPACE
            const bearer = token.split(' '); //TURNS STRING INTO AN ARRAY --> [Bearer, <access_token>]
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

    }*/