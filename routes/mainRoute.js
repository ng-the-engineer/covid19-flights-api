'use strict';

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _flights = require('../services/flights');

var _flights2 = _interopRequireDefault(_flights);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _koaRouter2.default)();

router.get('/api/flights', async function (ctx) {
  var request = ctx.query;
  ctx.assert(request.airline, 422, 'Param `airline` is mandatory');
  ctx.assert(request.flightNumber, 422, 'Param `flightNumber` is mandatory');

  try {
    var result = await _flights2.default.getFlights(request.airline.toUpperCase(), request.flightNumber.toUpperCase());
    ctx.body = {
      message: result.length > 0 ? 'RECORD_FOUND' : 'RECORD_NOT_FOUND',
      records: result
    };
  } catch (err) {
    console.log('Error was found:', err);
    ctx.body = {
      message: 'ERROR',
      details: err
    };
  }
});

module.exports = router;