import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import { closeModal } from '../../../../store/modal/actionCreators';
import { addCustomer } from '../../../../store/customer/asyncActions';

import { styles } from './styles';

const mapDispatchToProps = (dispatch, { customer }) => ({
    onCancel: () => {
        dispatch(closeModal());
    },
    onRegistrate: async () => {
        await dispatch(addCustomer(customer));
        dispatch(closeModal());
    }
});

const ButtonList = connect(null, mapDispatchToProps)(({ onCancel, onRegistrate, classes }) => [<Button
    key='cancel'
    onClick={onCancel}
    className={classes.buttonLeft}
    variant='outlined' size='medium' color='primary'>
cancel </Button>, <Button
    key='registration'
    onClick={onRegistrate}
    className={classes.buttonRight}
    variant='contained' size='medium' color='primary'>
ok </Button>]);

export default withStyles(styles)(ButtonList);
