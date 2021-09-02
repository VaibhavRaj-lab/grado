const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("course", courseSchema);
