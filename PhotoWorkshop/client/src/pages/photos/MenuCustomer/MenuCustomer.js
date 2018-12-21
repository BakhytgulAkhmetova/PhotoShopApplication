import React from 'react';
// import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import { compose, withState, withHandlers } from 'recompose';

import { styles } from './styles';

const handlers = {
    handleToggle: ({ open, changeOpen }) => event => {
        changeOpen({ open: !open });
    },
    handleClose: ({ changeOpen }) => event => {
        changeOpen(false);
    },
    onMainServices:({ changeOpen, history }) => event => {
        changeOpen(false);
        history.push('/');
    },
    onSignOut: ({ handleSignOut, changeOpen }) => event => {
        changeOpen(false);
        handleSignOut.apply(this);
    },
    onGoToProfile: ({ changeOpen, history }) => event => {
        changeOpen(false);
        history.push('/customer');
    }
};

const MenuCustomer = ({ classes, fullName, open,
    handleToggle,
    onSignOut,
    onMainServices,
    onGoToProfile,
    handleClose
}) => {
    return (
        <div className={classes.root}>
            <Button
                aria-owns={open ? 'menu-list-grow' : undefined}
                className={classes.appBarButton}
                onClick={handleToggle}>
                {fullName || 'customer'}
            </Button>
            <Popper
                open={open} transition
                disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        id='menu-list-grow'
                        style={{ transformOrigin: placement === 'bottom' ?
                            'center top' : 'center bottom' }}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList>
                                    <MenuItem onClick={onMainServices}>Main services info</MenuItem>
                                    <MenuItem onClick={onSignOut}>Sign out</MenuItem>
                                    <MenuItem onClick={onGoToProfile}>Profile</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
};

// MenuCustomer.propTypes = {
//     classes: PropTypes.object.isRequired
// };

export default compose(
    withState('open', 'changeOpen', false),
    withHandlers(handlers),
    withStyles(styles)
)(MenuCustomer);
