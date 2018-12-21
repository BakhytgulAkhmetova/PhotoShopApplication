import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { getCustomerByLoginPassword } from '../../../store/customer/asyncActions';
import { getCurrentCustomer } from '../../../store/customer/actionCreators';
import { authenticate } from '../../../store/authentication/actionCreators';
import { closeModal } from '../../../store/modal/actionCreators';
import { styles } from './styles';

import './ButtonsAuth.scss';

const mapDispatchToProps = (dispatch, { history, authenticationForm }) => ({
    onCancel: () => dispatch(closeModal()),
    onSignIn: async () => {
        const { login, password } = authenticationForm;
        const authCustomer = await dispatch(getCustomerByLoginPassword(login, password));

        if (authCustomer) {
            dispatch(authenticate());
            dispatch(getCurrentCustomer(authCustomer));
        }
        dispatch(closeModal());
        history.push('/customer');
    }
});

const ButtonList = ({ onSignIn, classes, onCancel }) => {
    return (
        <div className='btn-list__manager'>
            <Button
                key='cancel'
                onClick={onCancel}
                className={classes.button}
                variant='outlined' size='medium' color='primary'>
            cancel </Button>, <Button
                key='registration'
                className={classes.button}
                onClick={onSignIn}
                variant='contained' size='medium' color='primary'>
            sign in </Button>
        </div>
    );
};

ButtonList.propTypes = {
    onSignIn: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    onCancel: PropTypes.func.isRequired
};

export default compose(
    withStyles(styles),
    connect(null, mapDispatchToProps)
)(ButtonList);
