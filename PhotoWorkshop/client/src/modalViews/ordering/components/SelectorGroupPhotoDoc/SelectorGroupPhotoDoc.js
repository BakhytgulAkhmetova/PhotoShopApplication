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

const docTypes = ['Passport', 'Visa'];
const material = ['Glossy', 'Opaque'];
const additionalServices = ['Suit', 'Recond on Flesh memory'];

class SelectorGroupPhotoDoc extends React.Component {
  state = {
      docTypes: '',
      material: '',
      additionalServices: ''
  };

  handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
  };

  render() {
      const { classes, disable } = this.props;

      return (
          <div className={classes.root} >
              <FormControl className={classes.formControl}>
                  <InputLabel htmlFor='docTypes-simple'>Document</InputLabel>
                  <Select
                      disabled={disable}
                      value={this.state.docTypes}
                      onChange={this.handleChange}
                      inputProps={{
                          name: 'docTypes',
                          id: 'docTypes-simple'
                      }}>
                      <MenuItem value=''>
                          <em>None</em>
                      </MenuItem>
                      {
                          docTypes.map((name, index) => (
                              <MenuItem key={name + index} value={name} >{name}</MenuItem>
                          ))
                      }
                  </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                  <InputLabel htmlFor='material-simple'>Material</InputLabel>
                  <Select
                      disabled={disable}
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

SelectorGroupPhotoDoc.propTypes = {
    classes: PropTypes.object.isRequired,
    disable: PropTypes.bool.isRequired
};

export default withStyles(styles)(SelectorGroupPhotoDoc);
