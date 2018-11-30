import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { FlatButton } from 'components/App/Shared'

import styles from './Toolbar.module.css';


class Toolbar extends Component {

  logOut = () => {
    this.props.logOut()
      .then(() => {
        this.props.history.push('/login')
      })
  }

  goTo = (path) => {
    this.props.history.push(path)
  }

  render() {
    const isAuthed = true
    return (
      <div className={styles.Toolbar}>
        <FlatButton
          className={styles.toolbarButton}
          onClick={() => this.goTo('/')}
        >
          City Match
        </FlatButton>
        {isAuthed && (
          <div className={styles.right}>
            <FlatButton
              hoverTone="dark"
              className={styles.toolbarButton}
              onClick={() => this.goTo('/about')}
            >
              About
            </FlatButton>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Toolbar))
