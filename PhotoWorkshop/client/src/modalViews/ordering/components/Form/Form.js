import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import { SelectorGroupPhotoDoc } from '../SelectorGroupPhotoDoc';
import { SelectorGroupPhotoPrint } from '../SelectorGroupPhotoPrint';
import { SelectorGroupPhotoShoot } from '../SelectorGroupPhotoShoot';
import { SelectTarif } from '../SelectTarif';


const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit * 3
    },
    group: {
        margin: `${theme.spacing.unit}px 0`
    }
});

class Form extends React.Component {
  state = {
      value: 'photoPrint'
  };

  handleChange = event => {
      this.setState({ value: event.target.value });
  };

  render() {
      const { classes } = this.props;

      return (
          <form className={classes.root}>
              <FormControl component='fieldset' className={classes.formControl}>
                  <RadioGroup
                      className={classes.group}
                      value={this.state.value}
                      onChange={this.handleChange}>
                      <FormControlLabel value='photoPrint' control={<Radio />} label='Photo Print' />
                      <SelectorGroupPhotoPrint/>
                      <FormControlLabel value='photoDocument' control={<Radio/>} label='Photo on document' />
                      <SelectorGroupPhotoDoc/>
                      <FormControlLabel value='photoShoot' control={<Radio />} label='Photo Shoot'/>
                      <SelectorGroupPhotoShoot/>
                  </RadioGroup>
              </FormControl>
              <SelectTarif/>
              <p>Price: </p>
          </form>
      );
  }
}

Form.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
