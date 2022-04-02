const mongoose = require("mongoose");
const PetsSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"],
  minlength:[3,"Author name must be at least 3 characters long!!"],
  unique: true },
  type: { type : String},
  description: {type : String},
  skill1: {type: String},
  skill2: {type: String},
  },
  { timestamps: true }
);
module.exports = mongoose.model("Pets", PetsSchema);
