import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { styles } from './styles';

const FormAuth = ({ classes, onChangeAuthForm, authenticationForm }) =>  {
    const errors = Object.keys(authenticationForm).filter((key) => (authenticationForm[key].errors
        && authenticationForm[key].errors.length));
    // console.log(errors);

    return (
        <form className={classes.formAutorise} autoComplete='off'>
            <TextField
                id='login'
                label='Login'
                value={authenticationForm.login.value}
                onChange={onChangeAuthForm}
                className={classes.textField}
                name='login'
                type='email'
                fullWidth
                variant='filled'/>
            <TextField
                id='password'
                label='Password'
                value={authenticationForm.password.value}
                onChange={onChangeAuthForm}
                className={classes.textField}
                name='password'
                type='password'
                fullWidth
                variant='filled'/>
            {errors.map((key, index) => (
                <div key={key + index} > {key} :
                    {authenticationForm[key].errors.map((er, num) => (
                        <div
                            key={er + num}
                            className={classes.errorMessage}>
                            {er}</div>
                    ))}
                </div>
            ))}
        </form>
    );
};

FormAuth.propTypes = {
    classes: PropTypes.object.isRequired,
    onChangeAuthForm: PropTypes.func.isRequired,
    authenticationForm: PropTypes.object.isRequired
};

export default withStyles(styles)(FormAuth);
