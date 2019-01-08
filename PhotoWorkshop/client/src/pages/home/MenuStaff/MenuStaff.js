import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
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

const MenuStaff = ({ classes,
    onOpenHead,
    onOpenManager
}) => {
    return (
        <div className={classes.root}>
            <Button
                onClick={onOpenManager}
                id='manager'
                className={classes.appBarButton}>manager</Button>
            <Button
                onClick={onOpenHead}
                id='head'
                className={classes.appBarButton} >head</Button>
        </div>
    );
};

MenuStaff.propTypes = {
    classes: PropTypes.object,
    onOpenHead: PropTypes.func,
    onOpenManager: PropTypes.func
};

export default compose(
    withState('open', 'changeOpen', false),
    withHandlers(handlers),
    withStyles(styles)
)(MenuStaff);
