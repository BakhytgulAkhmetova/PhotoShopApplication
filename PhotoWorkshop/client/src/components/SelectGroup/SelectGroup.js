import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { styles } from './styles';

import './SelectGroup.scss';

const handlers = {
    handleChange: ({ changeSelectedValues, selectedValues,
        handleChangeServices, mainServiceId, formObject }) => event => {
        changeSelectedValues({ ...selectedValues, [event.target.name]: event.target.value });
        if (mainServiceId && formObject.mainServiceId === mainServiceId) {
            handleChangeServices.call(this, event);
        }
    }
};

const getServiceName = (select) => {
    const nameServ = select.name.split('_');

    return nameServ[nameServ.length - 1];
};

const SelectGroup = ({ classes, selectList, disable, handleChange, selectedValues }) => {
    return (
        <div className='selectGroupControl'>{
            selectList.map((select, index) => (
                <FormControl
                    key={select.name + index}
                    className={classes.formControl}>
                    <InputLabel
                        className='inputControl'
                        htmlFor={select.id}>{getServiceName(select)}</InputLabel>
                    <Select
                        inputProps={{
                            name: select.name
                        }}
                        disabled={disable}
                        value={selectedValues[select.name] || ''}
                        onChange={handleChange}>
                        {
                            select.optionList.map((opt) => (
                                <MenuItem
                                    id={opt.ID}
                                    key={opt.ID}
                                    value={opt.Name ? opt.Name : opt.DocumentType} >
                                    {opt.Name ? opt.Name : opt.DocumentType}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            )) }
        </div>

    );
};

SelectGroup.propTypes = {
    classes: PropTypes.object.isRequired,
    selectList:PropTypes.array.isRequired,
    disable: PropTypes.bool.isRequired,
    selectedValues: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    changeSelectedValues: PropTypes.func.isRequired
};

export default compose(
    withStyles(styles),
    withState('selectedValues', 'changeSelectedValues', []),
    lifecycle({
        componentWillMount() {
            const { changeSelectedValues, selectList } = this.props;

            changeSelectedValues(selectList.map((s) => ({ [s.name]: '' })));
        }
    }),
    withHandlers(handlers)
)(SelectGroup);
