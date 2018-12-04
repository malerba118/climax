import React, { Component } from 'react'
import { Card, CardContent, CardActions, Button, Grid } from '@material-ui/core'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { BarChart } from '../Charts';

import styles from './ResultCard.module.css'; // Import css modules stylesheet as styles

function getTemperatureChartData (result) {
  let keys = result.city.averageHighs ? Object.keys(result.city.averageHighs) : []
  keys = keys.filter(month => month !== 'annual')
  let values = keys.map(key => {
    return {x: key, y: result.city.averageHighs[key]}
  })
  return [
    { key: 'Average Daily Highs', values: values },
  ]
}

function getSunshineChartData (result) {
  let keys = result.city.sunshineProbability ? Object.keys(result.city.sunshineProbability) : []
  keys = keys.filter(month => month !== 'annual')
  let values = keys.map(key => {
    return {x: key, y: result.city.sunshineProbability[key]}
  })
  return [
    { key: 'Percent Chance of Sunshine', values: values },
  ]
}

function getRainfallChartData (result) {
  let keys = result.city.daysWithPrecipitation ? Object.keys(result.city.daysWithPrecipitation) : []
  keys = keys.filter(month => month !== 'annual')
  let values = keys.map(key => {
    return {x: key, y: result.city.daysWithPrecipitation[key]}
  })
  return [
    { key: 'Days with Precipitation', values: values },
  ]
}

function getSnowfallChartData (result) {
  let keys = result.city.snowfall ? Object.keys(result.city.snowfall) : []
  keys = keys.filter(month => month !== 'annual')
  let values = keys.map(key => {
    return {x: key, y: result.city.snowfall[key], key: key}
  })
  return [
    { key: 'Snowfall', values: values },
  ]
}

class ResultCard extends Component {

  render() {
    const {result} = this.props
    let criteriaClasses = {}
    result.criteriaMet.forEach((criteria) => {
      criteriaClasses[criteria.name] = styles.active
    })
    return (
      <Card elevation={4} square>
        <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
          <BarChart
            key={result.city.city + '1'}
            data={getTemperatureChartData(result)}
            title="Average Daily Highs"
            axisConfig={{
             showXAxis: true,
             showXAxisLabel: true,
             xLabel: 'Month',
             xLabelPosition: 'right',
             showYAxis: true,
             showYAxisLabel: true,
             yLabel: 'Fahrenheit',
             yLabelPosition: 'top',
           }}
          />
          <BarChart
            key={result.city.city + '2'}
            data={getSunshineChartData(result)}
            title="Percent Chance of Sunshine"
            axisConfig={{
             showXAxis: true,
             showXAxisLabel: true,
             xLabel: 'Month',
             xLabelPosition: 'right',
             showYAxis: true,
             showYAxisLabel: true,
             yLabel: 'Percent',
             yLabelPosition: 'top',
           }}
          />
          <BarChart
            key={result.city.city + '3'}
            data={getRainfallChartData(result)}
            title="Days with Precipitation"
            axisConfig={{
             showXAxis: true,
             showXAxisLabel: true,
             xLabel: 'Month',
             xLabelPosition: 'right',
             showYAxis: true,
             showYAxisLabel: true,
             yLabel: 'Num Days',
             yLabelPosition: 'top',
           }}
          />
          <BarChart
            key={result.city.city + '4'}
            data={getSnowfallChartData(result)}
            title="Snowfall"
            axisConfig={{
             showXAxis: true,
             showXAxisLabel: true,
             xLabel: 'Month',
             xLabelPosition: 'right',
             showYAxis: true,
             showYAxisLabel: true,
             yLabel: 'Inches',
             yLabelPosition: 'top',
           }}
          />
        </Carousel>
        <CardContent classes={{root: styles.cardContent}}>
          <Grid container>
            <Grid item xs={12}>
              <div className={styles.cardTitle}>
                {result.city.city}, {result.city.state}
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={styles.seasons}>
                <div className={styles.season}>
                  <div className={styles.seasonText}>Spring</div>
                  <div className={styles.seasonSvgs}>
                    <img className={criteriaClasses['averageHighSpring']} src="/svg/thermometer.svg" height="20"/>
                    <img className={criteriaClasses['chanceOfSunshineSpring']} src="/svg/sun.svg" height="20"/>
                    <img className={criteriaClasses['precipitationSpring']} src="/svg/rain.svg" height="20"/>
                  </div>
                </div>
                <div className={styles.season}>
                  <div className={styles.seasonText}>Summer</div>
                  <div className={styles.seasonSvgs}>
                    <img className={criteriaClasses['averageHighSummer']} src="/svg/thermometer.svg" height="20"/>
                    <img className={criteriaClasses['chanceOfSunshineSummer']} src="/svg/sun.svg" height="20"/>
                    <img className={criteriaClasses['precipitationSummer']} src="/svg/rain.svg" height="20"/>
                  </div>
                </div>
                <div className={styles.season}>
                  <div className={styles.seasonText}>Fall</div>
                  <div className={styles.seasonSvgs}>
                    <img className={criteriaClasses['averageHighFall']} src="/svg/thermometer.svg" height="20"/>
                    <img className={criteriaClasses['chanceOfSunshineFall']} src="/svg/sun.svg" height="20"/>
                    <img className={criteriaClasses['precipitationFall']} src="/svg/rain.svg" height="20"/>
                  </div>
                </div>
                <div className={styles.season}>
                  <div className={styles.seasonText}>Winter</div>
                  <div className={styles.seasonSvgs}>
                    <img className={criteriaClasses['averageHighWinter']} src="/svg/thermometer.svg" height="20"/>
                    <img className={criteriaClasses['chanceOfSunshineWinter']} src="/svg/sun.svg" height="20"/>
                    <img className={criteriaClasses['snowfallWinter']} src="/svg/snowflake.svg" height="20"/>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

export default ResultCard
