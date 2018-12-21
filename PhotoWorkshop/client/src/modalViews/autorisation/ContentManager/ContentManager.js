import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers } from 'recompose';

import { FormAuth } from '../FormAuth';
import { ButtonListManager } from '../ButtonListManager';
import { emptyAuthForm } from '../data';

import './Content.scss';

const handlers = {
    onChangeAuthForm: ({ authenticationForm, changeAuthenticationForm }) => event => {
        const field = event.target.name;

        changeAuthenticationForm({ ...authenticationForm, [field]: event.target.value });
    }
};

const Content = ({
    authenticationForm,
    history,
    onChangeAuthForm
}) => {
    return (
        <div>
            <FormAuth
                onChangeAuthForm={onChangeAuthForm}
                authenticationForm={authenticationForm}/>
            <ButtonListManager
                authenticationForm={authenticationForm}
                history={history}/>
        </div>
    );
};


Content.propTypes = {
    history: PropTypes.object.isRequired,
    authenticationForm: PropTypes.object.isRequired,
    onChangeAuthForm: PropTypes.func.isRequired
};

export default compose(
    withState('authenticationForm', 'changeAuthenticationForm', emptyAuthForm),
    withHandlers(handlers),
)(Content);
