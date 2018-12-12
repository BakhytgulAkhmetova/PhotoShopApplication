import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { fillHeader, fillContent, changeStyle } from '../../../../store/actionCreators/modal';
import { Content } from '../../../registration/components/Content';

import './ButtonsAutorisation.scss';

const mapDispatchToProps = (dispatch) => ({
    onOpenRegistration: () => {
        dispatch(fillHeader(<h1 className='capture-registration'>Registration</h1>));
        dispatch(fillContent(<Content/>));
        dispatch(changeStyle('modal-registration'));
    }
});

const styles = theme => ({
    button: {
        margin: '5px 15px'
    }
});


const ButtonList = connect(null, mapDispatchToProps)(({ onOpenRegistration, onSignIn, classes }) => [<Button
    key='cancel'
    className={classes.button}
    onClick={onOpenRegistration}
    variant='outlined' size='medium' color='primary'>
registration </Button>, <Button
    key='registration'
    className={classes.button}
    onClick={onSignIn}
    variant='contained' size='medium' color='primary'>
sign in </Button>]);

ButtonList.propTypes = {
    onOpenRegistration: PropTypes.func.isRequired
};

export default withStyles(styles)(ButtonList);
