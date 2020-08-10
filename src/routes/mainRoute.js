import koaRouter from 'koa-router'
import flightsService from '../services/flights'

const router = koaRouter()

router.get('/api/flights', async (ctx) => {
  const request = ctx.query
  ctx.assert(request.airline, 422, 'Param `airline` is mandatory')
  ctx.assert(request.flightNumber, 422, 'Param `flightNumber` is mandatory')

  try {
    const result = await flightsService.getFlights(request.airline.toUpperCase(), request.flightNumber.toUpperCase())
    ctx.body = {
      message: result.length > 0 ? 'RECORD_FOUND' : 'RECORD_NOT_FOUND',
      records: result
    }
  } catch (err) {
    console.log('Error was found:', err)
    ctx.body = {
      message: 'ERROR',
      details: err
    }
  }
})

module.exports = router
