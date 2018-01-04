'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AirportSchema = new Schema({
  icao: String,
  name: String
});

module.exports = mongoose.model('airports', AirportSchema);