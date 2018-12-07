import React from 'react';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';

import { FormRegistration } from '../FormRegistration';
import { ButtonList } from '../ButtonList';

const handlers = {
    onChangeCustomer: ({ customer, changeCustomer }) => event => {
        const field = event.target.name;

        changeCustomer({ ...customer, [field]: event.target.value });
    }
};

const Content = connect(null, null)(({
    customer,
    onChangeCustomer
}) => (<div>
    <FormRegistration
        onChangeCustomer={onChangeCustomer}
        customer={customer}/>
    <ButtonList customer={customer}/>
</div>));

Content.propTypes = {
};

export default compose(
    withState('customer', 'changeCustomer', {}),
    withHandlers(handlers),
)(Content);
