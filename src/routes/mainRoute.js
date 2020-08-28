import koaRouter from 'koa-router'
import flightsService from '../services/flights'

const router = koaRouter()

router.get('/api/flights', async (ctx) => {
  const request = ctx.query
  ctx.assert(request.flightCode, 422, 'Param `flightCode` is mandatory')

  const airline = request.flightCode.substring(0,2)
  const flightNumber = request.flightCode.substring(2)
  try {
    const result = await flightsService.getFlights(airline.toUpperCase(), flightNumber.toUpperCase())
    ctx.body = {
      message: result.length > 0 ? 'RECORD_FOUND' : 'RECORD_NOT_FOUND',
      recordCount: result.length,
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
