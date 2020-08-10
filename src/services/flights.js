import records from '../data/flights'

const getFlights = (airline, flightNumber) => {
  return records.filter(record => (record.airline === airline && record.flight_number === flightNumber))
}

module.exports = {
  getFlights
}