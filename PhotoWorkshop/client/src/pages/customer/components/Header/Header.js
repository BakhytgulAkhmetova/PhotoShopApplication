import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers } from 'recompose';

import './Header.scss';

const handlers = {
    handleClick: ({ changeAnchorEl }) => event => {
        changeAnchorEl(event.currentTarget);
    },
    handleClose: ({ changeAnchorEl }) => event => {
        changeAnchorEl(null);
    }
};

const Header = ({ anchorEl, handleClick, handleClose }) => {
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Avatar
                    className='toolbar__avatar'
                    aria-haspopup='true'
                    onClick={handleClick}>H</Avatar>
                <Menu
                    id='simple-menu'
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
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
    withState('anchorEl', 'changeAnchorEl', null),
    withHandlers(handlers)
)(Header);
