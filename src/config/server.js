//porta do server 
const port = 3003

//responsável para fazer o parser do corpo da requisição 
const bodyParser = require('body-parser')

//servidor web
const express = require('express')

//start servidor web
const server = express()

//aplicação dos middleware  para requisição

//extender o padrao urlencoded - suportar mais tipos de dados 
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

//start porta
server.listen(port, () => console.log(`Backend is Running on port ${port}`))

module.exports = server


