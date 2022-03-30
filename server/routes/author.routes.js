const mongoose = require('mongoose');

const AuthorController = require('../controllers/author.controller'); 
module.exports = (app) => {
    app.get('/api', AuthorController.createAuthor);
    app.post('/api/author', AuthorController.createAuthor);
    app.get('/api/author', AuthorController.getAllAuthor);
    app.get('/api/author/:id', AuthorController.getAuthor);
    app.put('/api/author/:id', AuthorController.updateAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);

}