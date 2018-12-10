import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './AboutDialog.module.css'

export default class AboutDialog extends React.Component {

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <h2>
            About
          </h2>
          <p>
            This is a web app that let's you select your ideal climate conditions and view cities/states in the US that match your criteria.
          </p>
          <h2>
            Inspiration
          </h2>
          <p>
            Having endured New York, Minnesota, and Wisconsin winters my entire life, I've made this in search of a warmer home.
          </p>
          <h2>
            Attribution
          </h2>
          <p>
            The map is sourced from <a href="https://commons.wikimedia.org/wiki/File:Blank_US_Map_(states_only).svg" title="wikimedia" target="_blank">wikimedia</a> and is under <a href="https://spdx.org/licenses/CC-BY-SA-3.0.html" title="Creative Commons Attribution-Share Alike 3.0 Unported" target="_blank">Creative Commons Attribution-Share Alike 3.0 Unported</a> license.
          </p>
          <div>Weather icons are made by <a href="https://www.freepik.com/" title="Freepik" target="_blank">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
