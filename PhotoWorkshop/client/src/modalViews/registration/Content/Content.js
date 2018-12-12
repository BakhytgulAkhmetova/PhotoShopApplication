import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers } from 'recompose';

import { FormRegistration } from '../FormRegistration';
import { ButtonList } from '../ButtonList';

const handlers = {
    onChangeCustomer: ({ customer, changeCustomer }) => event => {
        const field = event.target.name;

        changeCustomer({ ...customer, [field]: event.target.value });
    }
};

const Content = ({
    customer,
    history,
    onChangeCustomer
}) => {
    return (<div>
        <FormRegistration
            onChangeCustomer={onChangeCustomer}
            customer={customer}/>
        <ButtonList
            history={history}
            customer={customer}/>
    </div>);
};

Content.propTypes = {
    customer: PropTypes.object.isRequired,
    onChangeCustomer: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

export default compose(
    withState('customer', 'changeCustomer', {}),
    withHandlers(handlers),
)(Content);
