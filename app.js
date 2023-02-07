import express from 'express'
import chalk from 'chalk'

var app = express()

// rota
app.get('/', (req, res) => {
    res.send('Rota da Seda!!!')
})

// rota pra contatos
app.get('/contatos', (req, res) => {
    res.send('Rota dos Mongols!!!')
})

//roda com parametro
var cursos = ['JAVA SCRIPT', 'C#', 'JAVA', 'PHP', 'PHYTON']

app.get('/cursos/:id', (req, res) => {
    let id = req.params.id 
    return res.json([cursos[id]])
})

//servidor
app.listen (3000, () => {
    console.log('Portal 3000 aberto!')
})
