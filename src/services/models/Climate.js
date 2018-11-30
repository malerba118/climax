
function mean(arr) {
  return arr.reduce( ( p, c ) => p + c, 0 ) / arr.length
}

const months = ['mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec', 'jan', 'feb']

const seasons = {
  spring: ['mar', 'apr', 'may'],
  summer: ['jun', 'jul', 'aug'],
  fall: ['sep', 'oct', 'nov'],
  winter: ['dec', 'jan', 'feb'],
}

function getMonths(season) {
  let selectedMonths = seasons[season]
  return selectedMonths || months
}

class Climate {

    constructor(location) {
      this.location = location
    }

    averageHigh(season) {
      let months = getMonths(season)
      let avg = mean(
        months.map(month => this.location.averageHighs[month])
      )
      return avg
    }

    chanceOfSunshine(season) {
      if (!this.location.sunshineProbability) {
        return NaN
      }
      let months = getMonths(season)
      let avg = mean(
        months.map(month => this.location.sunshineProbability[month])
      )
      return avg
    }

}

export default Climate
