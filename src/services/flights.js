import records from '../data/flights'
import moment from 'moment'

const getFlights = (airline, flightNumber) => {
  return records.filter(record => (record.airline === airline && record.flight_number === flightNumber))
  .sort((a, b) => moment(b.arrival_date, 'DD/MM/YYYY') - moment(a.arrival_date, 'DD/MM/YYYY')
  )
  .map(record => {
    record.path = `${record.origin} > ${record.destination}`
    record.shortDate = record.arrival_date.substring(0,5)
    return record
  })
}

module.exports = {
  getFlights
}