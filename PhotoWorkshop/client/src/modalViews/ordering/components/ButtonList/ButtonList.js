import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import { closeModal } from '../../../../store/actionCreators/modal';
import { addCustomer } from '../../../../store/actionCreators/customer';

const mapDispatchToProps = (dispatch, { customer }) => ({
    onCancel: () => {
        dispatch(closeModal());
    },
    onRegistrate: async () => {
        await dispatch(addCustomer(customer));
        dispatch(closeModal());
    }
});

const ButtonList = connect(null, mapDispatchToProps)(({ onCancel, onRegistrate }) => [<Button
    key='cancel'
    onClick={onCancel}
    variant='outlined' size='medium' color='primary'>
cancel </Button>, <Button
    key='registration'
    onClick={onRegistrate}
    variant='contained' size='medium' color='primary'>
order </Button>]);

export default ButtonList;
