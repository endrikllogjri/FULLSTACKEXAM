const mongoose = require('mongoose');

const PetsController = require('../controllers/pet.controller'); 
module.exports = (app) => {
    app.get('/api', PetsController.createPets);
    app.post('/api/pet', PetsController.createPets);
    app.get('/api/pet', PetsController.getAllPets);
    app.get('/api/pet/:id', PetsController.getPets);
    app.put('/api/pet/:id', PetsController.updatePets);
    app.delete('/api/pet/:id', PetsController.deletePets);

}