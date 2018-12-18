const express = require('express')

module.exports = (server) => {
    //app Routes
    const router = express.Router()
    server.use('/api', router)

    //Todo Routes

    const todoService = require('../api/todo/todoServices')
    todoService.register(router, '/todos')
}