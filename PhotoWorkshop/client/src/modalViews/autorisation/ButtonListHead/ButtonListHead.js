import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { getHeadByLoginPassword } from '../../../store/head/asyncActions';
import { getCurrentHead } from '../../../store/head/actionCreators';
import { authenticate } from '../../../store/authentication/actionCreators';
import { closeModal } from '../../../store/modal/actionCreators';
import { styles } from './styles';

import './ButtonsAuth.scss';

const mapDispatchToProps = (dispatch, { history, authenticationForm }) => ({
    onCancel: () => dispatch(closeModal()),
    onSignIn: async () => {
        const { login, password } = authenticationForm;

        const authHead = await dispatch(getHeadByLoginPassword(login.value, password.value));

        if (authHead) {
            dispatch(authenticate());
            dispatch(getCurrentHead(authHead));
        }
        dispatch(closeModal());
        history.push('/head');
    }
});

const ButtonListHead = ({ onSignIn, classes, onCancel, isValidForm }) => {
    return (
        <div className='btn-list__manager'>
            <Button
                key='cancel'
                onClick={onCancel}
                className={classes.button}
                variant='outlined' size='medium' color='primary'>
            cancel </Button> <Button
                key='signHead'
                disabled={isValidForm}
                className={classes.button}
                onClick={onSignIn}
                variant='contained' size='medium' color='primary'>
            sign in </Button>
        </div>
    );
};

ButtonListHead.propTypes = {
    onSignIn: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    onCancel: PropTypes.func.isRequired,
    isValidForm: PropTypes.bool.isRequired
};

export default compose(
    withStyles(styles),
    connect(null, mapDispatchToProps)
)(ButtonListHead);
