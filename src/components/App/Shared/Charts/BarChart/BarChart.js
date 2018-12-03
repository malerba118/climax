import React from 'react'
import { BarChart as D3BarChart } from 'react-charts-d3';
import styles from './BarChart.module.css'; // Import css modules stylesheet as styles


class BarChart extends React.Component {

  state = {
    data: []
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (JSON.stringify(nextProps.data) === JSON.stringify(prevState.data)) {
      return
    }
    console.log(nextProps.data)
    return {
      data: nextProps.data
    }
  }

  render () {
    return (
      <div className={styles.chart}>
        <div className={styles.title}>{this.props.title}</div>
        <D3BarChart
          noDataMessage="No Data Available"
          height={250}
          data={this.state.data}
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
