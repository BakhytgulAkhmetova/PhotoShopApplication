import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import { store } from './store/store';
import { Home } from './pages/home';
import { Customer } from './pages/customer';
import { ModalProvider } from './components/ModalProvider';

import './app.scss';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Router>
                        <Switch>
                            <Route path='/customer' component={Customer} />
                            <Route path='/' component={Home} />
                        </Switch>

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
