const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
  email: String,
  phone: String,
  type: String,
  problem: String,
  date: String,
  time: String
});

const info = mongoose.model('info', infoSchema);

module.exports = info;

