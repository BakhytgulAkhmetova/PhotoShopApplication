import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { styles } from './styles';

class FormAutorisation extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <form className={classes.formAutorise} autoComplete='off'>
                <TextField
                    id='login'
                    label='Login'
                    className={classes.textField}
                    type='email'
                    fullWidth
                    variant='filled'/>
                <TextField
                    id='password'
                    label='Password'
                    className={classes.textField}
                    type='password'
                    fullWidth
                    variant='filled'/>
            </form>
        );
    }
}

FormAutorisation.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormAutorisation);

