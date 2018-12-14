import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { styles } from './styles';

const FormAutorisation = ({ classes, onChangeAuthForm, authenticationForm }) =>  {
    return (
        <form className={classes.formAutorise} autoComplete='off'>
            <TextField
                id='login'
                label='Login'
                value={authenticationForm.login}
                onChange={onChangeAuthForm}
                className={classes.textField}
                name='login'
                type='email'
                fullWidth
                variant='filled'/>
            <TextField
                id='password'
                label='Password'
                value={authenticationForm.password}
                onChange={onChangeAuthForm}
                className={classes.textField}
                name='password'
                type='password'
                fullWidth
                variant='filled'/>
        </form>
    );
};

FormAutorisation.propTypes = {
    classes: PropTypes.object.isRequired,
    onChangeAuthForm: PropTypes.func.isRequired,
    authenticationForm: PropTypes.object.isRequired
};

export default withStyles(styles)(FormAutorisation);
