import records from '../data/flights'
import moment from 'moment'

const getFlights = (airline, flightNumber) => {
  return records.filter(record => (record.airline === airline && record.flight_number === flightNumber))
  .sort((a, b) => moment(b.arrival_date, 'DD/MM/YYYY') - moment(a.arrival_date, 'DD/MM/YYYY')
  )
}

module.exports = {
  getFlights
}