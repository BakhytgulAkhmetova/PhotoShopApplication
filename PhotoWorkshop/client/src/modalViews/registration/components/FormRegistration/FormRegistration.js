import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    }
});

const FormRegistration = ({
    classes,
    customer,
    onChangeCustomer }) => {
    return (
        <form autoComplete='off'>
            <TextField
                required
                onChange={onChangeCustomer}
                name='firstName'
                label='FirstName'
                className={classes.textField}
                value={customer.firstName}
                margin='normal'
                variant='filled'/>
            <TextField
                required
                onChange={onChangeCustomer}
                name='lastName'
                label='LastName'
                value={customer.lastName}
                className={classes.textField}
                margin='normal'
                variant='filled'/>
            <TextField
                required
                onChange={onChangeCustomer}
                name='phone'
                label='Phone'
                value={customer.phone}
                className={classes.textField}
                margin='normal'
                variant='filled'/>
            <TextField
                required
                onChange={onChangeCustomer}
                name='address'
                label='Address'
                value={customer.address}
                className={classes.textField}
                margin='normal'
                variant='filled'/>
            <TextField
                required
                onChange={onChangeCustomer}
                name='login'
                label='Login'
                value={customer.login}
                className={classes.textField}
                type='email'
                autoComplete='email'
                margin='normal'
                variant='filled'/>
            <TextField
                required
                onChange={onChangeCustomer}
                name='password'
                label='Password'
                value={customer.password}
                className={classes.textField}
                type='password'
                autoComplete='current-password'
                margin='normal'
                variant='filled'/>
        </form>
    );
};

FormRegistration.propTypes = {
    classes: PropTypes.object.isRequired,
    customer: PropTypes.object.isRequired,
    onChangeCustomer: PropTypes.func.isRequired
};

export default withStyles(styles)(FormRegistration);

