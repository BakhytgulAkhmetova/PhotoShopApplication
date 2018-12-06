import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import { compose, withState } from 'recompose';

import './Header.scss';

const Header = ({ anchorEl, handleClick, handleClose }) => {
    return (
        <AppBar position='fixed'>
            <Toolbar>
                Manager
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    anchorEl: PropTypes.any.isRequired,
    handleClick: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired
};

export default  compose(
    withState('anchorEl', 'changeAnchorEl', null)
)(Header);
