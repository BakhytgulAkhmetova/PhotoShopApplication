import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { MenuCustomer } from '../MenuCustomer';

import './Header.scss';

const Header = () => {
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <MenuCustomer/>
            </Toolbar>
        </AppBar>
    );
};

export default  Header;
