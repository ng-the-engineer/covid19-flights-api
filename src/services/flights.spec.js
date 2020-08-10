import { expect } from 'chai'
import flightsService from './flights'

describe('Flights API Test', () => {
  it('should return records', async () => {
    const actual = await flightsService.getFlights('CX', '857')
    expect(actual).to.be.an('array')
    expect(actual.length).to.be.gt(0)
    expect(actual[0]).to.have.keys(['airline', 'flight_number', 'origin', 'destination', 'arrival_date', 'case_number', 'seat_number'])
  })
})