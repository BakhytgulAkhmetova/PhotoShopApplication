import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PhotoCamera  from '@material-ui/icons/PhotoCamera';

import { styles } from '../Footer/styles';

const Footer = ({ classes }) => {
    return (
        <BottomNavigation
            showLabels
            className={classes.appFooter}>
            <BottomNavigationAction label='PhotoWorkShop' icon={<PhotoCamera />} />
        </BottomNavigation>
    );
};

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
