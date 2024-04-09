import express from "express";
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static('public'));
console.log(__dirname)

let lista = {usuarios : [
    'juan',
    'pedro',
    'diego'
]}

app.get('/abracadabra/usuarios', (req, res) => {
    res.json(lista)
})

const verificarUsuario = (req, res, next) => {
    const usuario = req.params.usuario;
    const valido = lista.usuarios.find( nombre => nombre === usuario)

    if (valido) {
        next()
    } else {
        res.sendFile(__dirname + '/public/assets/img/who.jpeg');
    }
}

app.get('/abracadabra/juego/:usuario', verificarUsuario, (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
    
})

app.get('/abracadabra', (req, res)=>{
})

app.get('/*', (req, res)=>{
    res.send('Esta página no existe')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`)
})