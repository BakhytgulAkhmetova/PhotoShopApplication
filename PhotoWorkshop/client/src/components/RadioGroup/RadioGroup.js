import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers } from 'recompose';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { styles } from './styles';

const valueList = ['Photo on Document', 'Photoshoot', 'PhotoPrint'];

const handlers = {
    handleChange: ({ changeSelectedValue }) => event => {
        changeSelectedValue(event.target.value);
    }
};

const RadioGroup = ({
    selectedValue,
    handleChange
}) => {
    return (
        <div>
            { valueList.map((el, index) =>
                (
                    <FormControlLabel
                        key={el + index}
                        value={el}
                        control={
                            <Radio
                                checked={selectedValue === el}
                                onChange={handleChange}
                                name='radio-button-demo'
                                value={el}/>
                        }
                        label={el}/>))}
        </div>);
};

RadioGroup.propTypes = {
    selectedValue: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default compose(
    withStyles(styles),
    withState('selectedValue', 'changeSelectedValue', ''),
    withHandlers(handlers)
)(RadioGroup);
