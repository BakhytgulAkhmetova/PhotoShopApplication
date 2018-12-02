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

class FormAutorisation extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <form autoComplete='off'>
                <TextField
                    id='login'
                    label='Login'
                    className={classes.textField}
                    type='email'
                    autoComplete='email'
                    margin='normal'
                    variant='filled'/>
                <TextField
                    id='password'
                    label='Password'
                    className={classes.textField}
                    type='password'
                    autoComplete='current-password'
                    margin='normal'
                    variant='filled'/>
            </form>
        );
    }
}

FormAutorisation.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormAutorisation);

