import React, { Component } from 'react'
import { range } from 'services/utils/utils'

import styles from './MapKey.module.css'; // Import css modules stylesheet as styles

class MapKey extends Component {

  render() {
    let {n, color, ...other} = this.props
    return (
      <div {...other} style={{display: 'flex'}}>
        <div style={{position: 'absolute', height: '100%', width: '100%', backgroundColor: 'white'}}></div>
        {range(n).map((i) => (
          <div key={i} style={{flex: '1', zIndex: 0, height: '100%', background: `rgba(190,60,60,${i/n})`}}></div>
        ))}
      </div>
    )
  }
}

export default MapKey
