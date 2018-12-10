import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './ShareableLinkDialog.module.css'

export default class ShareableLinkDialog extends React.Component {

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle style={{paddingBottom: 8}}>Shareable Link</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Share this link with others to show them your search options.
          </DialogContentText>
          <TextField
            style={{marginTop: 10}}
            margin="dense"
            id="name"
            disabled
            value={this.props.link}
            fullWidth
          />
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
