'use strict';

var _chai = require('chai');

var _flights = require('./flights');

var _flights2 = _interopRequireDefault(_flights);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Flights API Test', function () {
  it('should return records', async function () {
    var actual = await _flights2.default.getFlights('CX', '857');
    (0, _chai.expect)(actual).to.be.an('array');
    (0, _chai.expect)(actual.length).to.be.gt(0);
    (0, _chai.expect)(actual[0]).to.have.keys(['airline', 'flight_number', 'origin', 'destination', 'arrival_date', 'case_number', 'seat_number']);
  });
});