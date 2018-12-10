import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { actions as notificationActions } from 'store/other/notifications'
import { connect } from 'react-redux'
import styles from './ShareableLinkDialog.module.css'

class ShareableLinkDialog extends React.Component {

  copyToClipboard = () => {
    if (this.inputField && this.inputField.select) {
      this.inputField.select()
      document.execCommand("copy")
      this.props.showNotification({
        type: 'info',
        message: 'Copied to clipboard!'
      })
    }
  }

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <h2>
            Shareable Link
          </h2>
          <DialogContentText>
            Share this link with others to show them your search options.
          </DialogContentText>
          <TextField
            inputRef={(r) => this.inputField = r}
            style={{marginTop: 10}}
            margin="dense"
            id="name"
            value={this.props.link}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.copyToClipboard} color="primary">
            Copy Link
          </Button>
          <Button onClick={this.props.onClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = {
  showNotification: notificationActions.showNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShareableLinkDialog)
