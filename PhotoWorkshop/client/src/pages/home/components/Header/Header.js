import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { styles } from './styles';

const Header = (props) => {
    const { classes } = props;

    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Button className={classes.appBarButton} >Login</Button>
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);