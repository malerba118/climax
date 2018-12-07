import React from 'react'
import { BarChart as D3BarChart } from 'react-charts-d3';
import styles from './BarChart.module.css'; // Import css modules stylesheet as styles
import isEqual from 'lodash/isEqual'

class BarChart extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    //to prevent charts from thinking they need to update even though data is the same
    // if (!isEqual(nextProps.data, this.props.data)) {
    //   return true
    // }
    return false
  }

  render () {
    return (
      <div className={styles.chart}>
        <div className={styles.title}>{this.props.title}</div>
        <D3BarChart
          noDataMessage="No Data Available"
          title=""
          height={250}
          data={this.props.data}
          axisConfig={this.props.axisConfig}
          showLegend={false}
        />
      </div>
    )
  }
}

BarChart.defaultProps = {
  data: [],
}

export default BarChart
