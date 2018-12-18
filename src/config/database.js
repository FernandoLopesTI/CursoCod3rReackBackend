const mongoose = require('mongoose')
//dizer para o mongoose usar a api de Promise do node
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')
