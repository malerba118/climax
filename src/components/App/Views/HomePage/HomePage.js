import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import { PromiseButton, CustomRadioGroup } from 'components/App/Shared'
import { FadeIn } from 'components/Universal/Transitions'
import { actions as notificationActions } from 'store/other/notifications'
import climateDataClient from 'services/climateDataClient'
import { inRange, mean } from 'services/utils/utils'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import USAMap from "react-usa-map"
import ContainerDimensions from 'react-container-dimensions'
import { colorBurn } from 'color-blend/unit'

import styles from './HomePage.module.css'

const tabs = ['Spring', 'Summer', 'Fall', 'Winter']

const percentagePartitions = {
  'None': {
    min: 0,
    max: 33
  },
  'Some': {
    min: 33,
    max: 66
  },
  'A lot': {
    min: 66,
    max: 100
  },
}

class HomePage extends Component {

  state = {
    selectedTab: 0,
    averageHighSpringTarget: 65,
    chanceOfSunshineSpringTarget: 'A lot',
    averageHighSummerTarget: 75,
    chanceOfSunshineSummerTarget: 'A lot',
    averageHighFallTarget: 65,
    chanceOfSunshineFallTarget: 'Some',
    averageHighWinterTarget: 45,
    chanceOfSunshineWinterTarget: 'Some',
  }

  onFieldChange = (key) => (e, value) => {
    this.setState({
      [key]: value
    })
  }

  onTabChange = (e, value) => {
    this.setState({
      selectedTab: value
    })
  }

  render() {
    let searchCriteria = [
      {
        name: 'averageHighSpring',
        isMet: (climate) => {
          return inRange(climate.averageHigh('spring'), this.state.averageHighSpringTarget - 5, this.state.averageHighSpringTarget + 5)
        }
      },
      {
        name: 'chanceOfSunshineSpring',
        isMet: (climate) => {
          let partition = percentagePartitions[this.state.chanceOfSunshineSpringTarget]
          return inRange(climate.chanceOfSunshine('spring'), partition.min, partition.max)
        }
      },
      {
        name: 'averageHighSummer',
        isMet: (climate) => {
          return inRange(climate.averageHigh('summer'), this.state.averageHighSummerTarget - 5, this.state.averageHighSummerTarget + 5)
        }
      },
      {
        name: 'chanceOfSunshineSummer',
        isMet: (climate) => {
          let partition = percentagePartitions[this.state.chanceOfSunshineSummerTarget]
          return inRange(climate.chanceOfSunshine('summer'), partition.min, partition.max)
        }
      },
      {
        name: 'averageHighFall',
        isMet: (climate) => {
          return inRange(climate.averageHigh('fall'), this.state.averageHighFallTarget - 5, this.state.averageHighFallTarget + 5)
        }
      },
      {
        name: 'chanceOfSunshineFall',
        isMet: (climate) => {
          let partition = percentagePartitions[this.state.chanceOfSunshineFallTarget]
          return inRange(climate.chanceOfSunshine('fall'), partition.min, partition.max)
        }
      },
      {
        name: 'averageHighWinter',
        isMet: (climate) => {
          return inRange(climate.averageHigh('winter'), this.state.averageHighWinterTarget - 5, this.state.averageHighWinterTarget + 5)
        }
      },
      {
        name: 'chanceOfSunshineWinter',
        isMet: (climate) => {
          let partition = percentagePartitions[this.state.chanceOfSunshineWinterTarget]
          return inRange(climate.chanceOfSunshine('winter'), partition.min, partition.max)
        }
      },
    ]
    let searchResults = climateDataClient.search(searchCriteria)
    let stateColors = getStateColors(searchResults)
    console.log(stateColors)
    return (
      <FadeIn>
        <div className={styles.root}>
          <div className={styles.controls}>
            <div className={styles.controlsHeader}>
              <div className={styles.appTitle}>
                <h2>City Matcher</h2>
              </div>
              <Tabs
                className={styles.tabs}
                value={this.state.selectedTab}
                onChange={this.onTabChange}
                indicatorColor="primary"
                textColor="primary"
              >
                {tabs.map((tabName) => (
                  <Tab label={tabName} key={tabName} classes={{root: styles.tabRoot, labelContainer: styles.tabLabel}}/>
                ))}
              </Tabs>
            </div>
            <div className={styles.controlsBody}>
              {tabs[this.state.selectedTab] === 'Spring' && (
                <div>
                  <div className={styles.field}>
                    <div className={styles.sliderLabel}>
                      <Typography>Average Daily High Temperature</Typography>
                      <Typography>{`${this.state.averageHighSpringTarget-5} - ${this.state.averageHighSpringTarget+5} F`}</Typography>
                    </div>
                    <Slider
                      value={this.state.averageHighSpringTarget}
                      min={40}
                      max={100}
                      aria-labelledby="label"
                      step={10}
                      onChange={this.onFieldChange('averageHighSpringTarget')}
                    />
                  </div>
                  <div className={styles.field}>
                    <div className={styles.radioGroupLabel}>
                      <Typography>Chance of Sunshine</Typography>
                    </div>
                    <CustomRadioGroup
                      onChange={this.onFieldChange('chanceOfSunshineSpringTarget')}
                      value={this.state.chanceOfSunshineSpringTarget}
                      labels={['None', 'Some', 'A lot']}
                    />
                  </div>
                </div>
              )}
              {tabs[this.state.selectedTab] === 'Summer' && (
                <div>
                  <div className={styles.field}>
                    <div className={styles.sliderLabel}>
                      <Typography>Average Daily High Temperature</Typography>
                      <Typography>{`${this.state.averageHighSummerTarget-5} - ${this.state.averageHighSummerTarget+5} F`}</Typography>
                    </div>
                    <Slider
                      value={this.state.averageHighSummerTarget}
                      min={60}
                      max={110}
                      aria-labelledby="label"
                      step={10}
                      onChange={this.onFieldChange('averageHighSummerTarget')}
                    />
                  </div>
                  <div className={styles.field}>
                    <div className={styles.radioGroupLabel}>
                      <Typography>Chance of Sunshine</Typography>
                    </div>
                    <CustomRadioGroup
                      onChange={this.onFieldChange('chanceOfSunshineSummerTarget')}
                      value={this.state.chanceOfSunshineSummerTarget}
                      labels={['None', 'Some', 'A lot']}
                    />
                  </div>
                </div>
              )}
              {tabs[this.state.selectedTab] === 'Fall' && (
                <div>
                  <div className={styles.field}>
                    <div className={styles.sliderLabel}>
                      <Typography>Average Daily High Temperature</Typography>
                      <Typography>{`${this.state.averageHighFallTarget-5} - ${this.state.averageHighFallTarget+5} F`}</Typography>
                    </div>
                    <Slider
                      value={this.state.averageHighFallTarget}
                      min={40}
                      max={100}
                      aria-labelledby="label"
                      step={10}
                      onChange={this.onFieldChange('averageHighFallTarget')}
                    />
                  </div>
                  <div className={styles.field}>
                    <div className={styles.radioGroupLabel}>
                      <Typography>Chance of Sunshine</Typography>
                    </div>
                    <CustomRadioGroup
                      onChange={this.onFieldChange('chanceOfSunshineFallTarget')}
                      value={this.state.chanceOfSunshineFallTarget}
                      labels={['None', 'Some', 'A lot']}
                    />
                  </div>
                </div>
              )}
              {tabs[this.state.selectedTab] === 'Winter' && (
                <div>
                  <div className={styles.field}>
                    <div className={styles.sliderLabel}>
                      <Typography>Average Daily High Temperature</Typography>
                      <Typography>{`${this.state.averageHighWinterTarget-5} - ${this.state.averageHighWinterTarget+5} F`}</Typography>
                    </div>
                    <Slider
                      value={this.state.averageHighWinterTarget}
                      min={0}
                      max={70}
                      aria-labelledby="label"
                      step={10}
                      onChange={this.onFieldChange('averageHighWinterTarget')}
                    />
                  </div>
                  <div className={styles.field}>
                    <div className={styles.radioGroupLabel}>
                      <Typography>Chance of Sunshine</Typography>
                    </div>
                    <CustomRadioGroup
                      onChange={this.onFieldChange('chanceOfSunshineWinterTarget')}
                      value={this.state.chanceOfSunshineWinterTarget}
                      labels={['None', 'Some', 'A lot']}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className={styles.controlsFooter}>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.mapContainer}>
              <ContainerDimensions>
                { ({ width }) =>
                  <USAMap customize={stateColors} width={Math.max(width)} onClick={(e) => console.log(e.target)} />
                }
              </ContainerDimensions>
            </div>
          </div>
        </div>
      </FadeIn>
    )
  }
}

function getStateColors(searchResults) {
  let sums = searchResults.reduce(
    (sumMap, result) => {
      let sumArr
      if (sumMap[result.city.state]) {
        sumArr = [...sumMap[result.city.state], result.criteriaMet.length/6]
      }
      else {
        sumArr = [result.criteriaMet.length/6]
      }
      return {
        ...sumMap,
        [result.city.state]: sumArr
      }
    },
    {}
  )
  Object.keys(sums).forEach((state) => {
    let blended = colorBurn(
      {r: 255/255, g: 102/255, b: 99/255, a: mean(sums[state])},
      {r: 230/255, g: 230/255, b: 230/255, a: .9},
    )
    sums[state] = {
      fill: `rgba(${blended.r*255},${blended.g*255},${blended.b*255},${blended.a})`
    }
  })
  return sums
}


export default HomePage
