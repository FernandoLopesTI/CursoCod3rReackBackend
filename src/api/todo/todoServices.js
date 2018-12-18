const Todo = require('./todo')

Todo.methods(['get','post','put','delete'])
Todo.updateOptrions({new: true, runValidations: true})

module.exports = Todo
