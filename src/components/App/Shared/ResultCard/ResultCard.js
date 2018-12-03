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
    return (
      <Card elevation={0} square>
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
        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              <div className={styles.cardTitle}>
                {result.city.city}, {result.city.state}
              </div>
            </Grid>
          </Grid>
        </CardContent>
        {/*<CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>*/}
      </Card>
    )
  }
}

export default ResultCard
