import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';

import './Header.scss';

const Header = ({ handleSignOut, classes, fullName }) => {
    return (
        <AppBar position='fixed'>
            <Toolbar className='toolbar-manager'>
                <h2>Manager: {fullName}</h2>
                <Button
                    className={classes.appBarButton}
                    onClick={handleSignOut}>
                    Sign out</Button>
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    handleSignOut: PropTypes.func.isRequired,
    fullName: PropTypes.string.isRequired
};

export default withStyles(styles)(Header);
