const mongoose = require('mongoose');


const ObjectSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: Number },
    description: { type: String }
}, { timestamps: true });
module.exports = mongoose.model('Object', ObjectSchema);