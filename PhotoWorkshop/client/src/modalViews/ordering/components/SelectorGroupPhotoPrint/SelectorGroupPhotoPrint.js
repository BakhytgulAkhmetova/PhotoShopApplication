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

const format = ['small', 'big'];
const material = ['Glossy', 'Opaque'];

class SelectorGroupPhotoPrint extends React.Component {
  state = {
      format: '',
      material: ''
  };

  handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
  };

  render() {
      const { classes } = this.props;

      return (
          <div className={classes.root} >
              <FormControl className={classes.formControl}>
                  <InputLabel htmlFor='format-simple'>Format</InputLabel>
                  <Select
                      value={this.state.format}
                      onChange={this.handleChange}
                      inputProps={{
                          name: 'format',
                          id: 'format-simple'
                      }}>
                      <MenuItem value=''>
                          <em>None</em>
                      </MenuItem>
                      {
                          format.map((name, index) => (
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
          </div>
      );
  }
}

SelectorGroupPhotoPrint.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SelectorGroupPhotoPrint);
