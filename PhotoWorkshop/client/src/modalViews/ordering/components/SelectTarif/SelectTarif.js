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

const tarifs = ['Standart', 'Emergency'];

class SelectTarif extends React.Component {
  state = {
      tarifs: ''
  };

  handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
  };

  render() {
      const { classes } = this.props;

      return (
          <FormControl className={classes.formControl}>
              <InputLabel htmlFor='tarif-simple'>Tarif</InputLabel>
              <Select
                  value={this.state.tarifs}
                  onChange={this.handleChange}
                  inputProps={{
                      name: 'tarifs',
                      id: 'tarif-simple'
                  }}>
                  <MenuItem value=''>
                      <em>None</em>
                  </MenuItem>
                  {
                      tarifs.map((name, index) => (
                          <MenuItem key={name + index} value={name} >{name}</MenuItem>
                      ))
                  }
              </Select>
          </FormControl>
      );
  }
}

SelectTarif.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SelectTarif);
