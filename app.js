'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _mainRoute = require('./routes/mainRoute');

var _mainRoute2 = _interopRequireDefault(_mainRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();

app.use((0, _koaLogger2.default)());
app.use((0, _koaBodyparser2.default)());
app.use(_mainRoute2.default.routes());

app.listen(5000, async function () {
  console.log('App start to listen at port 5000');
});