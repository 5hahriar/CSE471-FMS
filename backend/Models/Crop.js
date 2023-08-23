const mongoose = require("mongoose");

const CropSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  field: {
    type: String,
    required: true,
    maxlength: 25,
  },
  name: {
    type: String,
    required: true,
    maxlength: 25,
  },
  yield: {
    type: String,
    required: true,
  },
  moisture: {
    type: String,
    required: true,
  },
  nitro: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Crop", CropSchema);
