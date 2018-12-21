import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers } from 'recompose';

import { FormAuth } from '../FormAuth';
import { ButtonList } from '../ButtonList';
import { ButtonListManager } from '../ButtonListManager';
import { emptyAuthForm } from '../data';
import { Validator } from '../../../utils/validator';
import { default as types } from '../../../data/errorType';
import { authForm } from '../../../data/validationConfig';

import './Content.scss';

const validator = new Validator({ types, config: authForm });

const validate = (field, input) => {
    validator.cleanListErrors();

    validator.validate({ [field]: { value: input } });

    return { errors: validator.listErrors[0].msgs, value: input || '' };
};

const handlers = {
    onChangeAuthForm: ({ authenticationForm, changeAuthenticationForm }) => event => {
        const field = event.target.name;
        const value = validate(field, event.target.value);
        const hasErrors = validator.validate(authenticationForm);

        changeAuthenticationForm({ ...authenticationForm, [field]: value, isDisabled: { value: hasErrors } });
    }
};

const Content = ({
    authenticationForm,
    history,
    idButton,
    onChangeAuthForm
}) => {
    return (
        <div>
            <FormAuth
                onChangeAuthForm={onChangeAuthForm}
                authenticationForm={authenticationForm}/>
            {
                idButton === 'manager' ?
                    <ButtonListManager
                        isValidForm={authenticationForm.isDisabled.value}
                        authenticationForm={authenticationForm}
                        history={history}/> :
                    <ButtonList
                        isValidForm={authenticationForm.isDisabled.value}
                        authenticationForm={authenticationForm}
                        history={history}/>
            }
        </div>
    );
};

Content.propTypes = {
    history: PropTypes.object.isRequired,
    authenticationForm: PropTypes.object.isRequired,
    idButton: PropTypes.string,
    onChangeAuthForm: PropTypes.func.isRequired
};

export default compose(
    withState('authenticationForm', 'changeAuthenticationForm', emptyAuthForm),
    withHandlers(handlers)
)(Content);
