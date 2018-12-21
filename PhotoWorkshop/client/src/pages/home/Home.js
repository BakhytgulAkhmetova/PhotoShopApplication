import React from 'react';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Header } from './Header';
import { Footer } from './Footer';
import { ContentPage } from './ContentPage';
import { ContentManager } from '../../modalViews/autorisation/ContentManager';
import { openModal, fillHeader, fillContent, changeStyle } from '../../store/modal/actionCreators';

const mapDispatchToProps = (dispatch) => ({
    openManagerModal: () => {
        dispatch(fillHeader(<h1 className='capture-autorisation'>Sigh in as manager</h1>));
        dispatch(fillContent(<ContentManager/>));
        dispatch(changeStyle('modal-autorisation'));
        dispatch(openModal());
    }
});

const Home = ({ openManagerModal }) => {
    return (<div>
        <Header/>
        <ContentPage/>
        <Footer openManagerModal={openManagerModal}/>
    </div>);
};

Home.propTypes = {
    openManagerModal: PropTypes.func.isRequired
};

export default compose(
    connect(null, mapDispatchToProps)
)(Home);
