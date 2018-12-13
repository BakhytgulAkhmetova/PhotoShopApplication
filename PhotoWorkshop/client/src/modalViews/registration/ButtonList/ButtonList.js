import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';

import { closeModal } from '../../../store/modal/actionCreators';
import {  authenticate } from '../../../store/authentication/actionCreators';
import { addCustomer } from '../../../store/customer/asyncActions';

import { styles } from './styles';

const mapDispatchToProps = (dispatch, { customer, history }) => {
    return {
        onCancel: () => {
            dispatch(closeModal());
        },
        onRegistrate: async () => {
            // const customeDispatch = await Object.keys(customer).map(k => [k, customer[k].value]);
            // debugger;

            // const tt = await customeDispatch.reduce((o, arr) =>
            //     (Object.defineProperty(o, arr[0], { value: arr[1] })), {});
            // console.log(tt);

            await dispatch(addCustomer(customer));
            dispatch(authenticate());
            dispatch(closeModal());
            history.push('/customer');
        }
    };
};

const ButtonList = ({ onCancel, onRegistrate, classes, isValidForm }) => [<Button
    key='cancel'
    onClick={onCancel}
    className={classes.buttonLeft}
    variant='outlined' size='medium' color='primary'>
cancel </Button>, <Button
    key='registration'
    onClick={onRegistrate}
    disabled={isValidForm}
    className={classes.buttonRight}
    variant='contained' size='medium' color='primary'>
ok </Button>];

export default compose(
    connect(null, mapDispatchToProps),
    withStyles(styles)
)(ButtonList);
