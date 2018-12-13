import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers } from 'recompose';

import { FormRegistration } from '../FormRegistration';
import { ButtonList } from '../ButtonList';
import { Validator } from '../../../utils/validator';
import { default as types } from '../../../data/errorType';
import { regFormCustomer } from '../../../data/validationConfig';
import { emptyRegForm } from '../data';

const validator = new Validator({ types, config: regFormCustomer });

const validate = (field, input) => {
    validator.cleanListErrors();

    validator.validate({ [field]: { value: input } });

    return { errors: validator.listErrors[0].msgs, value: input || '' };
};

const handlers = {
    onChangeCustomer: ({ registrationForm, changeRegistrationForm }) => event => {
        const field = event.target.name;
        const value = validate(field, event.target.value);
        const hasErrors = validator.validate(registrationForm);

        changeRegistrationForm({ ...registrationForm, [field]: value, isDisabled: { value: hasErrors } });
    }
};

const Content = ({
    registrationForm,
    history,
    onChangeCustomer
}) => {
    return (<div>
        <FormRegistration
            onChangeForm={onChangeCustomer}
            registrationForm={registrationForm}/>
        <ButtonList
            history={history}
            isValidForm={registrationForm.isDisabled.value}
            customer={registrationForm}/>
    </div>);
};

Content.propTypes = {
    registrationForm: PropTypes.object.isRequired,
    onChangeCustomer: PropTypes.func.isRequired,
    isValidForm: PropTypes.bool.isRequired,
    updateIsValidForm: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

export default compose(
    withState('registrationForm', 'changeRegistrationForm', emptyRegForm),
    withHandlers(handlers),
)(Content);
