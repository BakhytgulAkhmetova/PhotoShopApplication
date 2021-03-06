import React from 'react';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';
import { ContentPage } from './ContentPage';
import { Content } from '../../modalViews/autorisation/Content';
import { openModal, fillHeader, fillContent, changeStyle } from '../../store/modal/actionCreators';

const mapStateToProps = (state) => ({
    auth: state.authentication
});

const mapDispatchToProps = (dispatch, { history }) => ({
    openManagerModal: (event) => {
        dispatch(fillHeader(<h1 className='capture-autorisation'>Sign in as manager</h1>));
        dispatch(fillContent(<Content
            history={history}
            idButton={event.currentTarget.id}/>));
        dispatch(changeStyle('modal-autorisation'));
        dispatch(openModal());
    },
    openHeadModal: (event) => {
        dispatch(fillHeader(<h1 className='capture-autorisation'>Sign in as head</h1>));
        dispatch(fillContent(<Content
            history={history}
            idButton={event.currentTarget.id}/>));
        dispatch(changeStyle('modal-autorisation'));
        dispatch(openModal());
    }
});

const Home = ({ openManagerModal, openHeadModal, history, auth }) => {
    return (<div>
        <Header history={history}/>
        <ContentPage/>
        <Footer
            isAuth={auth.isAuthenticated}
            history={history}
            openHeadModal={openHeadModal}
            openManagerModal={openManagerModal}/>
    </div>);
};

Home.propTypes = {
    openManagerModal: PropTypes.func.isRequired,
    openHeadModal: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    auth: PropTypes.bool.isRequired
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Home);
