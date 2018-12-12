import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PhotoCamera  from '@material-ui/icons/PhotoCamera';
import Button from '@material-ui/core/Button';

import { styles } from '../Footer/styles';

const Footer = (props) => {
    const { classes } = props;

    return (
        <BottomNavigation
            showLabels
            className={classes.appFooter}>
            <BottomNavigationAction className={classes.appBarIconCamera} label='PhotoWorkShop' icon={<PhotoCamera />} />
            <Button className={classes.appBarButton}>for managers</Button>
        </BottomNavigation>
    );
};

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
