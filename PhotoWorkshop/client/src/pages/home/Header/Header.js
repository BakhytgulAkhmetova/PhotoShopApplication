import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { signout } from '../../../store/authentication/actionCreators';
import { Content } from '../../../modalViews/autorisation/Content';
import { openModal, fillHeader, fillContent, changeStyle } from '../../../store/modal/actionCreators';

import { styles } from './styles';
import './Header.scss';

const mapStateToProps = (state) => ({
    modal: state.modal,
    auth: state.authentication
});

const mapDispatchToProps = (dispatch, { history }) =>  ({
    onSignOut: () => {
        dispatch(signout());
        history.push('/');
    },
    onClick: () => {
        dispatch(fillHeader(<h1 className='capture-autorisation'>Sigh in</h1>));
        dispatch(fillContent(<Content history={history}/>));
        dispatch(changeStyle('modal-autorisation'));
        dispatch(openModal());
    }
});

const Header = ({ onClick, classes, auth, onSignOut }) => {
    return (
        <AppBar position='fixed'>
            <Toolbar>
                {auth.isAuthenticated ?
                    <Button
                        onClick={onSignOut}
                        className={classes.appBarButton}>sign out</Button> :
                    <Button
                        onClick={onClick}
                        className={classes.appBarButton} >sign in</Button>
                }
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    onSignOut: PropTypes.func.isRequired
};

export default  compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
)(Header);
