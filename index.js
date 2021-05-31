const express = require('express');
const bodyParser = require('body-parser');
const post =require('./data');

const app = express();

app.use(bodyParser.json());


app.post('/post',(req, res) => {
    post.push(req.body)
    res.status(201).json(post)
} )




// Configuramos el servidor
app.listen(3000, () => {
    console.log('escuchando el puerto: 3000')
})