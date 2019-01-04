import React from 'react';
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
    onOpenManager:({ changeOpen, openManagerModal }) => event => {
        changeOpen(false);
        openManagerModal(event);
    },
    onOpenHead: ({ changeOpen, openHeadModal }) => event => {
        changeOpen(false);
        openHeadModal(event);
    }
};

const MenuStaff = ({ classes, fullName, open,
    handleToggle,
    onOpenHead,
    onOpenManager,
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
                                    <MenuItem id='manager' onClick={onOpenManager}>Manager</MenuItem>
                                    <MenuItem id='head' onClick={onOpenHead}>Head</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
};

export default compose(
    withState('open', 'changeOpen', false),
    withHandlers(handlers),
    withStyles(styles)
)(MenuStaff);
