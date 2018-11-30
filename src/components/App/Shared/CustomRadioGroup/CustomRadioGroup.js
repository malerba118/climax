import React from 'react'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'

class CustomRadioGroup extends React.Component {

  render () {
    return (
      <RadioGroup
        aria-label="position"
        name="position"
        value={this.props.value}
        onChange={this.props.onChange}
        row
      >
        {this.props.labels.map((label) => (
          <FormControlLabel
            value={label}
            control={<Radio color="primary" />}
            label={label}
            labelPlacement="start"
          />
        ))}
      </RadioGroup>
    )
  }
}

CustomRadioGroup.defaultProps = {
  value: '',
  onChange: () => {},
}

export default CustomRadioGroup
