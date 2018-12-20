import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';

import { MenuCustomer } from '../MenuCustomer';

import './Header.scss';

const Header = ({ fullName, handleSignOut }) => {
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <MenuCustomer
                    handleSignOut={handleSignOut}
                    fullName={fullName}/>
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    fullName: PropTypes.string.isRequired,
    handleSignOut: PropTypes.func.isRequired
};

export default  Header;
