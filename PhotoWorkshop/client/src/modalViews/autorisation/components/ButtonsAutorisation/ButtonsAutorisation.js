import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import { fillHeader, fillContent, changeStyle } from '../../../../store/actionCreators/modal';
import { Content } from '../../../registration/components/Content';

import './ButtonsAutorisation.scss';

const mapDispatchToProps = (dispatch) => ({
    onOpenRegistration: () => {
        dispatch(fillHeader(<h1>Registration</h1>));
        dispatch(fillContent(<Content/>));
        dispatch(changeStyle('modal-registration'));
    }
});

const ButtonsAutorisation = connect(null, mapDispatchToProps)(({ onOpenRegistration, onSignIn }) => [<Button
    key='cancel'
    onClick={onOpenRegistration}
    variant='outlined' size='medium' color='primary'>
registration </Button>, <Button
    key='registration'
    onClick={onSignIn}
    variant='contained' size='medium' color='primary'>
sign in </Button>]);

ButtonsAutorisation.propTypes = {
    onOpenRegistration: PropTypes.func.isRequired
};

export default ButtonsAutorisation;
