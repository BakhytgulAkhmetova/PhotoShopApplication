import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { PersistGate } from 'redux-persist/integration/react';

import { default as storage } from './store/store';
import { Home } from './pages/home';
import { Customer } from './pages/customer';
import { Manager } from './pages/manager';
import { ModalProvider } from './components/ModalProvider';
import { PrivateRoute } from './components/PrivateRoute';

import './app.scss';

export class App extends Component {
    // history = createBrowserHistory(this.props);
    render() {
        const { store, persistor } = storage();

        return (
            <Provider store={store}>
                <PersistGate loading={null}  persistor={persistor}>
                    <div>
                        <Router>
                            <Switch>
                                <PrivateRoute path='/customer' component={Customer} />
                                <PrivateRoute path='/manager' component={Manager} />
                                <Route path='/' component={Home} />
                            </Switch>
                        </Router>
                        <ModalProvider/>
                    </div>
                </PersistGate>
            </Provider>);
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    forceRefresh: PropTypes.bool
};

