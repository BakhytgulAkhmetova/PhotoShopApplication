import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { styles } from './styles';

const AppHeader = (props) => {
    const { classes } = props;

    return (
        <AppBar position='fixed'>
            <Toolbar>
                <IconButton aria-label='Menu'>
                    <MenuIcon/>
                </IconButton>
                <Button className={classes.appBarButton} >Login</Button>
            </Toolbar>
        </AppBar>
    );
};

AppHeader.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppHeader);
