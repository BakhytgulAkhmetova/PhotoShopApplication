import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { styles } from './styles';

import './RadioGroup.scss';

const RadioGroup = ({
    listRadio,
    selectedValue,
    handleChange
}) => {
    return (
        <div className='root'>
            { listRadio.map((el) =>
                (
                    <FormControlLabel
                        key={el.id + el.value}
                        control={
                            <Radio
                                id={el.id}
                                checked={+selectedValue.id === +el.id}
                                onChange={handleChange}
                                name='radio-button-demo'
                                value={el.value}/>
                        }
                        label={el.value}/>))}
        </div>);
};

RadioGroup.propTypes = {
    selectedValue: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    listRadio: PropTypes.array.isRequired
};

export default compose(
    withStyles(styles),
)(RadioGroup);
