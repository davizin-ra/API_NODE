//OBJ

import express from 'express'
import pkg from "@prisma/client"
import cors from 'cors'

const { PrismaClient } = pkg
const prisma = new PrismaClient()

const app = express()
app.use(cors())
app.use(express.json())

const usuarios = []

//Rota

app.post('/cadastro', async (req, res) => {

    await prisma.usuario.create({
        data: {
            email: req.body.email,
            nome: req.body.nome,
            idade: req.body.idade,
        }
    })

    res.status(201).json(req.body)
})


app.get('/cadastro', async (req, res) => {

    const lista_usuarios = await prisma.usuario.findMany();

    res.status(200).json(lista_usuarios)

})

app.put('/cadastro/:id', async (req, res) => {

    await prisma.usuario.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            nome: req.body.nome,
            idade: req.body.idade,
        }
    })


    res.status(201).json({ "message": "Usuário atualizado" })

})

app.delete('/cadastro/:id', async (req, res) => {

    await prisma.usuario.delete({
        where: {
            id: req.params.id
        }
    })


    res.status(201).json({ "message": "Usuário deletado" })

})


//Porta

app.listen(3000, () => {
    console.log('Servidor rodando no localhost:3000');
});