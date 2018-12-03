import React, { Component } from 'react'
import classNames from 'classnames'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import styles from './StateDetailView.module.css'
import { ResultCard } from 'components/App/Shared'
import climateDataClient from 'services/climateDataClient'

const stateMap = climateDataClient.getStateMap()

class StateDetailView extends Component {

  render() {
    let resultSet = [...this.props.resultSet].sort((r1, r2) => r1.city.city.localeCompare(r2.city.city))
    return (
      <div
        className={classNames(
          styles.root,
          this.props.open && styles.open
        )}
      >
        <div className={styles.topbar}>
          <div className={styles.closeButton}>
            <IconButton onClick={this.props.onClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
          </div>
          <div className={styles.title}>{stateMap[this.props.stateCode]}</div>
        </div>
        <div className={styles.content}>
          <Grid container spacing={24}>
            {resultSet.map(result => (
              <Grid item xs={12} md={6}>
                <ResultCard result={result} key={result.city.city}/>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    )
  }
}

StateDetailView.defaultProps = {
  onClose: () => {},
  resultSet: [],
}

export default StateDetailView
