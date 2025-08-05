//OBJ

import express from 'express'

const app = express()
app.use(express.json())

const usuarios = []

//Rota

app.post('/cadastro', (req, res) => {
    // console.log(req.body)
    usuarios.push(req.body)
    // res.send('POST certin')
    res.status(201).json(req.body)
})


app.get('/cadastro', (req, res) => {
    // res.send('GET certin')
    res.status(200).json(usuarios)
})

//Porta

app.listen(3000, () => {
    console.log('Servidor rodando no localhost:3000');
});