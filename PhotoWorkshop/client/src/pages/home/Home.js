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

const mapDispatchToProps = (dispatch, { history }) => ({
    openManagerModal: (event) => {
        dispatch(fillHeader(<h1 className='capture-autorisation'>Sigh in as manager</h1>));
        dispatch(fillContent(<Content
            history={history}
            idButton={event.currentTarget.id}/>));
        dispatch(changeStyle('modal-autorisation'));
        dispatch(openModal());
    }
});

const Home = ({ openManagerModal, history }) => {
    return (<div>
        <Header history={history}/>
        <ContentPage/>
        <Footer
            history={history}
            openManagerModal={openManagerModal}/>
    </div>);
};

Home.propTypes = {
    openManagerModal: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

export default compose(
    withRouter,
    connect(null, mapDispatchToProps)
)(Home);
