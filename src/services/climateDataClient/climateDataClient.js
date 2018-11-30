import climateData from './data.json'
import Climate from 'services/models/Climate'

class ClimateDataClient {

  getCities() {
    return Object.values(climateData)
  }

  search(criteria = []) {
    let cities = this.getCities()
    let climates = cities.map(city => new Climate(city))
    let results = climates.map(climate => {
      let criteriaMet = criteria.filter(c => c.isMet(climate))
      return {
        criteriaMet,
        city: climate.location
      }
    })
    results.sort((a, b) => a.criteriaMet.length < b.criteriaMet.length ? 1 : -1)
    return results
  }

}

// Export Singleton
const climateDataClient = new ClimateDataClient()

export default climateDataClient
