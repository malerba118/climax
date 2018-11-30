import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { PrivateRoute, Notifications } from 'components/App/Shared'
import { HomePage, Toolbar } from './Views'
import { rolesEnum } from 'enums'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import climateDataClient from 'services/climateDataClient'
import Climate from 'services/models/Climate'

import styles from './App.module.css'; // Import css modules stylesheet as styles

// climateDataClient.getCities().forEach(city => {
//   let climate = new Climate(city)
//   console.log('summer', city.state, climate.chanceOfSunshine('summer'))
//   console.log('winter', city.state, climate.averageHigh('winter'))
// })

// climateDataClient.search([
//   {
//     name: 'averageHigh',
//     isMet: (climate) => {
//       return inRange(climate.averageHigh('summer'), 90, 100)
//     }
//   },
//   {
//     name: 'chanceOfSunshine',
//     isMet: (climate) => {
//       return inRange(climate.chanceOfSunshine('summer'), 90, 100)
//     }
//   },
// ])

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className={styles.app}>
          <div className={styles.body}>
            <Notifications />
            <Route
              exact
              path="/"
              component={HomePage}
            />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
