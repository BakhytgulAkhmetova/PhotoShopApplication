import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

const mapStateToProps = (state) => ({
    auth: state.authentication
});

const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log(rest);
    return (
        <Route
            {...rest}
            render={props =>
                rest.auth.isAuthenticated ? (
                    <Component {...props}/>
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: props.location }
                        }}/>
                )
            }/>
    );
};

export default compose(
    connect(mapStateToProps)
)(PrivateRoute);
