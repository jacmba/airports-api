'use strict';

let Airport = require('../models/airportModel');

module.exports = {
  getAirport: (req, res) => {
    let icao = req.swagger.params.icao.value.toUpperCase();
    Airport.find({icao: icao})
    .then(airport => {
      //if(airpo)
      return res.json(airport);
    })
    .catch(e => {
      console.error(e);
      return res.status(400).send(e);
    });
  }
};