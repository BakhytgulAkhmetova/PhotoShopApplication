import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import { store } from './store/store';
import { Home } from './pages/home';
import { ModalProvider } from './components/ModalProvider';

import './app.scss';

class App extends Component {
    render() {
        console.log(store.getState());
        return (
            <Provider store={store}>
                <div>
                    <Router>
                        <Route path='/' component={Home} />
                    </Router>
                    <ModalProvider/>
                </div>
            </Provider>);
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default App;
