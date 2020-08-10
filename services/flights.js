'use strict';

var _flights = require('../data/flights');

var _flights2 = _interopRequireDefault(_flights);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getFlights = function getFlights(airline, flightNumber) {
  return _flights2.default.filter(function (record) {
    return record.airline === airline && record.flight_number === flightNumber;
  });
};

module.exports = {
  getFlights: getFlights
};