import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { styles } from './styles';

class SelectorGroupPhotoPrint extends React.Component {
  state = {
      format: '',
      material: ''
  };

  handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
  };

  render() {
      const { classes, disable, formatList,
          //   order,
          //   changeOrder,
          materialList } = this.props;

      return (
          <div>
              <FormControl className={classes.formControl}>
                  <InputLabel htmlFor='format-simple'>Format</InputLabel>
                  <Select
                      disabled={disable}
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
                          formatList.map((format) => (
                              <MenuItem
                                  key={format.ID + format.Name}
                                  value={format.Name} >
                                  {format.Name}</MenuItem>
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
                          materialList.map((material) => (
                              <MenuItem
                                  key={material.ID + material.Name}
                                  value={material.Name} >
                                  {material.Name}</MenuItem>
                          ))
                      }
                  </Select>
              </FormControl>
          </div>
      );
  }
}

SelectorGroupPhotoPrint.propTypes = {
    order: PropTypes.object.isRequired,
    changeOrder: PropTypes.isRequired,
    classes: PropTypes.object.isRequired,
    disable: PropTypes.bool.isRequired,
    formatList: PropTypes.array.isRequired,
    materialList: PropTypes.array.isRequired
};

export default withStyles(styles)(SelectorGroupPhotoPrint);
