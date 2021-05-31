const express = require('express');
const bodyParser = require('body-parser');
const post =require('./data');

const app = express();

app.use(bodyParser.json());


app.patch('/post:id',(req, res) => {
    const nuevoPost = post.map(elemento => {
        if(elemento.id == req.params.id){
            elemento = req.body
        }else{
            return elemento
        }
    })
    res.status(200).json(nuevoPost)
})




// Configuramos el servidor
app.listen(3000, () => {
    console.log('escuchando el puerto: 3000')
})