import React, { Component } from 'react'
import { Card, CardContent, CardActions, Button, Grid } from '@material-ui/core'

import styles from './ResultCard.module.css'; // Import css modules stylesheet as styles


class ResultCard extends Component {

  render() {
    const {result} = this.props
    return (
      <Card elevation={0} square>
        <CardContent>
          <Grid container>
            <Grid item xs={6}>
              <div className={styles.cardTitle}>
                {result.city.city}
              </div>
              <br/>
              <div className={styles.cardAuthor}>
                {result.city.state}
              </div>
            </Grid>
            <Grid item xs={6}>
              <br/>
              <br/>
              <div className={styles.cardDate}>
              </div>
            </Grid>
          </Grid>
        </CardContent>
        <div className={styles.cardContentDivider}></div>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default ResultCard
