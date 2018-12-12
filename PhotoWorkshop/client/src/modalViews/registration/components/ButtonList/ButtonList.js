import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

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

const styles = theme => ({
    buttonLeft: {
        margin: '5px 15px',
        width: '130px'
    },
    buttonRight: {
        marginLeft: '120px',
        width: '130px'
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
