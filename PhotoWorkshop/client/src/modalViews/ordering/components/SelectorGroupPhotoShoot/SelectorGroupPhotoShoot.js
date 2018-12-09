import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2
    }
});

class SelectorGroupPhotoShoot extends React.Component {
  state = {
      photoShootType: '',
      additionalServices: ''
  };

  handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
  };

  render() {
      const { classes, disable, serviceAdditionalList, servicePhotoShootList } = this.props;

      return (
          <div className={classes.root} >
              <FormControl className={classes.formControl}>
                  <InputLabel htmlFor='photoShootType-simple'>Photo shoot</InputLabel>
                  <Select
                      disabled={disable}
                      value={this.state.photoShootType}
                      onChange={this.handleChange}
                      inputProps={{
                          name: 'photoShootType',
                          id: 'photoShootType-simple'
                      }}>
                      <MenuItem value=''>
                          <em>None</em>
                      </MenuItem>
                      {
                          servicePhotoShootList.map(({ ID, Name }) => (
                              <MenuItem key={ID + Name} value={Name} >{Name}</MenuItem>
                          ))
                      }
                  </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                  <InputLabel htmlFor='additionalServices-simple'>Additional</InputLabel>
                  <Select
                      disabled={disable}
                      value={this.state.additionalServices}
                      onChange={this.handleChange}
                      inputProps={{
                          name: 'additionalServices',
                          id: 'additionalServices-simple'
                      }}>
                      <MenuItem value=''>
                          <em>None</em>
                      </MenuItem>
                      {
                          serviceAdditionalList.map(({ ID, Name }) => (
                              <MenuItem key={ID + Name} value={Name} >{Name}</MenuItem>
                          ))
                      }
                  </Select>
              </FormControl>
          </div>
      );
  }
}

SelectorGroupPhotoShoot.propTypes = {
    classes: PropTypes.object.isRequired,
    disable: PropTypes.bool.isRequired,
    materialList: PropTypes.array.isRequired,
    serviceAdditionalList: PropTypes.array.isRequired,
    servicePhotoShootList: PropTypes.array.isRequired
};

export default withStyles(styles)(SelectorGroupPhotoShoot);
