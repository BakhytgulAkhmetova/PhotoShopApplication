import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { MenuHead } from '../MenuHead';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';

import './Header.scss';

const Header = ({ handleSignOut, handleGetOrders, fullName, history }) => {
    return (
        <AppBar position='fixed'>
            <Toolbar className='toolbar-manager'>
                <h2>Head: {fullName}</h2>
                <MenuHead
                    history={history}
                    handleGetOrders={handleGetOrders}
                    handleSignOut={handleSignOut}
                    fullName={fullName}/>
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    handleGetOrders: PropTypes.func.isRequired,
    handleSignOut: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    fullName: PropTypes.string.isRequired
};

export default withStyles(styles)(Header);
