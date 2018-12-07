import React from 'react';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';

import { Form } from '../Form';
import { ButtonList } from '../ButtonList';
import { emptyCustomer } from '../../../../store/customer/initilalState';

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
    <Form
        onChangeCustomer={onChangeCustomer}
        customer={customer}/>
    <ButtonList customer={customer}/>
</div>));

Content.propTypes = {
};

export default compose(
    withState('customer', 'changeCustomer', emptyCustomer),
    withHandlers(handlers),
)(Content);
