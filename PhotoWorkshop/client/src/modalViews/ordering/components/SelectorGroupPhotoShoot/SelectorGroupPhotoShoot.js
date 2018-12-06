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

const photoShootType = ['Family', 'Love story', 'Individual'];
const material = ['Glossy', 'Opaque'];
const additionalServices = ['Creation Idea', 'Rent of clothes', 'Make up', 'Hairstyle'];

class SelectorGroupPhotoShoot extends React.Component {
  state = {
      photoShootType: '',
      additionalServices: ''
  };

  handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
  };

  render() {
      const { classes } = this.props;

      return (
          <div className={classes.root} >
              <FormControl className={classes.formControl}>
                  <InputLabel htmlFor='photoShootType-simple'>Photo shoot</InputLabel>
                  <Select
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
                          photoShootType.map((name, index) => (
                              <MenuItem key={name + index} value={name} >{name}</MenuItem>
                          ))
                      }
                  </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                  <InputLabel htmlFor='material-simple'>Material</InputLabel>
                  <Select
                      value={this.state.material}
                      onChange={this.handleChange}
                      inputProps={{
                          name: 'material',
                          id: 'material-simple'
                      }}>
                      <MenuItem value=''>
                          <em>None</em>
                      </MenuItem>
                      {
                          material.map((name, index) => (
                              <MenuItem key={name + index} value={name} >{name}</MenuItem>
                          ))
                      }
                  </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                  <InputLabel htmlFor='additionalServices-simple'>Additional</InputLabel>
                  <Select
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
                          additionalServices.map((name, index) => (
                              <MenuItem key={name + index} value={name} >{name}</MenuItem>
                          ))
                      }
                  </Select>
              </FormControl>
          </div>
      );
  }
}

SelectorGroupPhotoShoot.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SelectorGroupPhotoShoot);
