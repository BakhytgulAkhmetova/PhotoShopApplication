import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { getManagerrByLoginPassword } from '../../../store/manager/asyncActions';
// import { getCurrentCustomer } from '../../../store/customer/actionCreators';
import { authenticate } from '../../../store/authentication/actionCreators';
import { closeModal } from '../../../store/modal/actionCreators';
import { styles } from './styles';

import './ButtonsAuth.scss';

const mapDispatchToProps = (dispatch, { history, authenticationForm }) => ({
    onCancel: () => dispatch(closeModal()),
    onSignIn: async () => {
        const { login, password } = authenticationForm;
        const authManager = await dispatch(getManagerrByLoginPassword(login.value, password.value));

        if (authManager) {
            dispatch(authenticate());
            // dispatch(getCurrentCustomer(authCustomer));
        }
        dispatch(closeModal());
        history.push('/manager');
    }
});

const ButtonList = ({ onSignIn, classes, onCancel, isValidForm }) => {
    return (
        <div className='btn-list__manager'>
            <Button
                key='cancel'
                onClick={onCancel}
                className={classes.button}
                variant='outlined' size='medium' color='primary'>
            cancel </Button>, <Button
                key='registration'
                disabled={isValidForm}
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
    onCancel: PropTypes.func.isRequired,
    isValidForm: PropTypes.bool.isRequired
};

export default compose(
    withStyles(styles),
    connect(null, mapDispatchToProps)
)(ButtonList);
