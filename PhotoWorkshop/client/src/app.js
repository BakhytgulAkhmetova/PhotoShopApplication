import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';

import { store } from './store/store';
import { Home } from './pages/home';

import './app.scss';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Router>
                        <Route path='/' component={Home} />
                    </Router>
                    <Modal open={store.getState().modalReducer.modal.isOpen}>
                        <div/>
                    </Modal>)
                </div>
            </Provider>);
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default App;
