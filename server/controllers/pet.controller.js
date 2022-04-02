const mongoose = require("mongoose");

const Pets = require("../models/pet.model");

module.exports.createPets = (request, response) => {
  Pets.create(request.body)
    .then((pets) => response.json(pets))
    .catch((err) => response.status(400).json(err));
};

module.exports.getPets = (request, response) => {
  Pets.findOne({ _id: request.params.id })
    .then((pets) => response.json(pets))
    .catch((err) => response.json(err));
};

module.exports.updatePets = (request, response) => {
  Pets.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPets) => response.json(updatedPets))
    .catch((err) => response.status(400).json(err));
};

module.exports.deletePets = (request, response) => {
  Pets.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};

module.exports.getAllPets = (request, response) => {
  Pets.find({}).sort({name: 1})
    .then((pets) => {
      console.log(pets);
      response.json(pets);
    })
    .catch((err) => {
      console.log(err);
      response.json(err);
    });
};
