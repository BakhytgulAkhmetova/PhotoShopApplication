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
      const { classes, disable, serviceAdditionalList, materialList, servicePhotoDocumentList } = this.props;

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
                          servicePhotoDocumentList.map((service) => (
                              <MenuItem
                                  key={service.ID + service.DocumentType}
                                  value={service.DocumentType} >{service.DocumentType}</MenuItem>
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
                          materialList.map(({ ID, Name }) => (
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

SelectorGroupPhotoDoc.propTypes = {
    classes: PropTypes.object.isRequired,
    disable: PropTypes.bool.isRequired,
    materialList: PropTypes.array.isRequired,
    serviceAdditionalList: PropTypes.array.isRequired,
    servicePhotoDocumentList: PropTypes.array.isRequired
};

export default withStyles(styles)(SelectorGroupPhotoDoc);
