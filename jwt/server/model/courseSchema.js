const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const advanceScehma = new Schema({
  adRealPrice: { type: Number, required: true },
  adFakePrice: { type: Number, required: true },
});
const basicShema = new Schema({
  basicRealPrice: { type: Number, required: true },
  basicFakePrice: { type: Number, required: true },
});
const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  advancePrice: [advanceScehma],
  basicPrice: [basicShema],
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
