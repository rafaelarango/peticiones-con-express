const express = require('express');
const bodyParser = require('body-parser');
const post =require('./data');

const app = express();

app.use(bodyParser.json());


app.get('/post',(req, res) => {
    res.status(200).json(post)
} )




// Configuramos el servidor
app.listen(3000, () => {
    console.log('escuchando el puerto: 3000')
})