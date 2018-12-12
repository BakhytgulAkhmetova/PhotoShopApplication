import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { Content } from '../../../../modalViews/autorisation/components/Content';
// import { Content } from '../../../../modalViews/ordering/components/Content';
import { openModal, fillHeader, fillContent, changeStyle } from '../../../../store/actionCreators/modal';

import { styles } from './styles';
import './Header.scss';

const mapStateToProps = (state) => ({
    modal: state.modal
});

const mapDispatchToProps = (dispatch) =>  ({
    onClick: () => {
        dispatch(fillHeader(<h1 className='capture-autorisation'>Sigh in</h1>));
        dispatch(fillContent(<Content/>));
        dispatch(changeStyle('modal-autorisation'));
        dispatch(openModal());
    }
    // onClick: () => {
    //     dispatch(fillHeader(<h1>New order</h1>));
    //     dispatch(fillContent(<Content/>));
    //     dispatch(changeStyle('modal-ordering'));
    //     dispatch(openModal());
    // }
});

const Header = connect(mapStateToProps, mapDispatchToProps)(({ onClick, classes }) => {
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Button
                    onClick={onClick}
                    className={classes.appBarButton} >sign in</Button>
            </Toolbar>
        </AppBar>
    );
});

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default  compose(
    withStyles(styles)
)(Header);
