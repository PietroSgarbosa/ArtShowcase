const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');


let port = 3035;
let ip = '127.0.0.1';
let app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true}));
app.use(bodyParser.json({limit: '10mb', extended: true}));



consign().include('routes').into(app);

app.listen(port, ip, ()=>{

    console.log("Servidor Online na porta: " + port);

});