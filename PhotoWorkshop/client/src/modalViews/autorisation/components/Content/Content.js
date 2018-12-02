import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';

import { FormAutorisation } from '../FormAutorisation';
import { ButtonsAutorisation } from '../ButtonsAutorisation';
import { emptyCustomer } from '../../../../store/data';

// const handlers = {
//     onChangeCustomer: ({ customer, changeCustomer }) => event => {
//         const field = event.target.name;

//         changeCustomer({ ...customer, [field]: event.target.value });
//     }
// };

const Content = connect(null, null)(() => (
    <div>
        <FormAutorisation/>
        <ButtonsAutorisation/>
    </div>
));

Content.propTypes = {
};

export default compose(
    withState('customer', 'changeCustomer', emptyCustomer),
    withHandlers(),
)(Content);
