import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { fillHeader, fillContent, changeStyle } from '../../../store/modal/actionCreators';
import { getCustomerByLoginPassword } from '../../../store/customer/asyncActions';
import { Content } from '../../registration/Content';
import { authenticate } from '../../../store/authentication/actionCreators';
import { closeModal } from '../../../store/modal/actionCreators';
import { styles } from './styles';

import './ButtonsAutorisation.scss';

const mapDispatchToProps = (dispatch, { history, authenticationForm }) => ({
    onOpenRegistration: () => {
        dispatch(fillHeader(<h1 className='capture-registration'>Registration</h1>));
        dispatch(fillContent(<Content history={history}/>));
        dispatch(changeStyle('modal-registration'));
    },
    onSignIn: async () => {
        const { login, password } = authenticationForm;
        const authCusotmer = await dispatch(getCustomerByLoginPassword(login, password));

        if (authCusotmer) {
            dispatch(authenticate());
        }

        dispatch(closeModal());
        history.push('/customer');
    }
});

const ButtonList = ({ onOpenRegistration, onSignIn, classes }) => [<Button
    key='cancel'
    className={classes.button}
    onClick={onOpenRegistration}
    variant='outlined' size='medium' color='primary'>
registration </Button>, <Button
    key='registration'
    className={classes.button}
    onClick={onSignIn}
    variant='contained' size='medium' color='primary'>
sign in </Button>];

ButtonList.propTypes = {
    onOpenRegistration: PropTypes.func.isRequired
};

export default compose(
    withStyles(styles),
    connect(null, mapDispatchToProps)
)(ButtonList);
