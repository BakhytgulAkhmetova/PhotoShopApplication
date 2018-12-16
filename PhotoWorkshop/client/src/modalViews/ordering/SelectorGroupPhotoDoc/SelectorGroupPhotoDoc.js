import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { styles } from './styles';

class SelectorGroupPhotoDoc extends React.Component {
  state = {
      docTypes: '',
      material: '',
      additionalServices: ''
  };

  handleChange = event => {
      const { order, changeOrder } = this.props;
      const name = event.target.name;
      const idService = event.currentTarget.id;
      const valueService = event.target.value;

      this.setState({ [name]: valueService });
      if (!order.services.some(el => el.id === idService)) {
          changeOrder({ ...order, services: order.services.concat([{
              id: idService,
              name }]) });
      } else {
          const index = order.services.findIndex(el => el.id === idService);
          const newServ = order.services.map((el, i) => {
              const res = i === index  ? { id: idService, name } : el;

              return res;
          });

          changeOrder({ ...order, services: newServ });
      }

      console.log(event.target);
  };

  render() {
      const { classes, disable, serviceAdditionalList,
          materialList,
          servicePhotoDocumentList } = this.props;

      // console.log(serviceAdditionalList);

      return (
          <div>
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
                                  itemID={service.serviceName}
                                  key={service.ID + service.DocumentType}
                                  name={service.serviceName}
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
                          materialList.map(({ ID, Name, serviceName }) => (
                              <MenuItem
                                  service={serviceName}
                                  itemID={serviceName}
                                  key={ID + Name}
                                  value={Name} >{Name}</MenuItem>
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
                          serviceAdditionalList.map(({ ID, Name, serviceName }) => (
                              <MenuItem
                                  itemID={serviceName}
                                  key={ID + Name}
                                  value={Name} >{Name}</MenuItem>
                          ))
                      }
                  </Select>
              </FormControl>
          </div>
      );
  }
}

SelectorGroupPhotoDoc.propTypes = {
    order: PropTypes.object.isRequired,
    changeOrder: PropTypes.isRequired,
    classes: PropTypes.object.isRequired,
    disable: PropTypes.bool.isRequired,
    materialList: PropTypes.array.isRequired,
    serviceAdditionalList: PropTypes.array.isRequired,
    servicePhotoDocumentList: PropTypes.array.isRequired
};

export default withStyles(styles)(SelectorGroupPhotoDoc);
