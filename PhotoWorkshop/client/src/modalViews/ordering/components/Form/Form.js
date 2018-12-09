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

import './Form.scss';

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

  static getDerivedStateFromProps(props, state) {
      if (props.data !== state.rows) {
          return { rows: props.data };
      }
  }

  handleChange = event => {
      this.setState({ value: event.target.value });
  };

  render() {
      const {
          classes,
          formatList,
          materialList,
          serviceAdditionalList,
          servicePhotoDocumentList,
          servicePhotoShootList } = this.props;
      const { value } = this.state;


      return (
          <form className={classes.root}>
              <FormControl className={classes.formControl}>
                  <RadioGroup
                      className={classes.group}
                      value={value}
                      onChange={this.handleChange}>
                      <FormControlLabel value='photoPrint' control={<Radio/>} label='Photo Print' />
                      <SelectorGroupPhotoPrint
                          formatList={formatList}
                          materialList={materialList}
                          disable={value !== 'photoPrint'} />
                      <FormControlLabel value='photoDocument' control={<Radio/>} label='Photo on document' />
                      <SelectorGroupPhotoDoc
                          servicePhotoDocumentList={servicePhotoDocumentList}
                          serviceAdditionalList={serviceAdditionalList}
                          materialList={materialList}
                          disable={value !== 'photoDocument'}/>
                      <FormControlLabel value='photoShoot' control={<Radio />} label='Photo Shoot'/>
                      <SelectorGroupPhotoShoot
                          servicePhotoShootList={servicePhotoShootList}
                          serviceAdditionalList={serviceAdditionalList}
                          disable={value !== 'photoShoot'}/>
                  </RadioGroup>
                  <div className='form__finishing-options'>
                      <SelectTarif componentLocation='finishing-options__tarif'/>
                      <p className='finishing-options__price'>Price:</p>
                  </div>
              </FormControl>
          </form>
      );
  }
}

Form.propTypes = {
    classes: PropTypes.object.isRequired,
    formatList: PropTypes.array.isRequired,
    materialList: PropTypes.array.isRequired,
    serviceAdditionalList: PropTypes.array.isRequired,
    servicePhotoShootList: PropTypes.array.isRequired,
    servicePhotoDocumentList: PropTypes.array.isRequired
};

export default withStyles(styles)(Form);
