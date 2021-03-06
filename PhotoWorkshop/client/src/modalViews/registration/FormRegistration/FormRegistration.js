import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    formRegistration: {
        margin: 'auto',
        width: '480px'
    },
    errorMessage: {
        color: 'red',
        fontSize: '14px',
        textTransform: 'lowercase'
    }
});

const FormRegistration = ({
    classes,
    registrationForm,
    onChangeForm }) => {
    const errors = Object.keys(registrationForm).filter((key) => (registrationForm[key].errors
    && registrationForm[key].errors.length));

    return (
        <form autoComplete='off' className={classes.formRegistration}>
            <TextField
                required
                onChange={onChangeForm}
                name='firstName'
                label='FirstName'
                className={classes.textField}
                value={registrationForm.firstName.value}
                margin='normal'
                variant='filled'/>
            <TextField
                required
                onChange={onChangeForm}
                name='lastName'
                label='LastName'
                value={registrationForm.lastName.value}
                className={classes.textField}
                margin='normal'
                variant='filled'/>
            <TextField
                required
                onChange={onChangeForm}
                name='phone'
                label='Phone'
                value={registrationForm.phone.value}
                className={classes.textField}
                margin='normal'
                variant='filled'/>
            <TextField
                required
                onChange={onChangeForm}
                name='address'
                label='Address'
                value={registrationForm.address.value}
                className={classes.textField}
                margin='normal'
                variant='filled'/>
            <TextField
                required
                onChange={onChangeForm}
                name='login'
                label='Login'
                value={registrationForm.login.value}
                className={classes.textField}
                type='email'
                autoComplete='email'
                margin='normal'
                variant='filled'/>
            <TextField
                required
                onChange={onChangeForm}
                name='password'
                label='Password'
                value={registrationForm.password.value}
                className={classes.textField}
                type='password'
                autoComplete='current-password'
                margin='normal'
                variant='filled'/>
            {errors.map((key, index) => (
                <div key={key + index} > {key} :
                    {registrationForm[key].errors.map((er, num) => (
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

FormRegistration.propTypes = {
    classes: PropTypes.object.isRequired,
    registrationForm: PropTypes.object.isRequired,
    onChangeForm: PropTypes.func.isRequired
};

export default withStyles(styles)(FormRegistration);
