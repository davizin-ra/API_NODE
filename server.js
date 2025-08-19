//OBJ

import express from 'express'

import pkg from "@prisma/client"
const { PrismaClient } = pkg;
const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const usuarios = []

//Rota

app.post('/cadastro', async (req, res) => {

    await prisma.usuario.create({
        data:{
            email: req.body.email,
            nome: req.body.nome,
            idade: req.body.idade,
        }
    })

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