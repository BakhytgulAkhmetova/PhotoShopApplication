import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PhotoCamera  from '@material-ui/icons/PhotoCamera';
import { MenuStaff } from '../MenuStaff';

import { styles } from '../Footer/styles';

import './Footer.scss';

const Footer = (props) => {
    const { classes, isAuth, openManagerModal, openHeadModal  } = props;

    return (
        <BottomNavigation
            showLabels
            className={classes.appFooter}>
            {
                isAuth ? null : [
                    <BottomNavigationAction
                        key='icon'
                        className={classes.appBarIconCamera}
                        label='PhotoWorkShop' icon={<PhotoCamera />} />,
                    <MenuStaff
                        key='menu-staff'
                        openManagerModal={openManagerModal}
                        openHeadModal={openHeadModal}/>
                ]
            }
        </BottomNavigation>
    );
};

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
    openManagerModal: PropTypes.func.isRequired,
    openHeadModal: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired
};

export default withStyles(styles)(Footer);
