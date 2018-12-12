import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';

import { FormAutorisation } from '../FormAutorisation';
import { ButtonList } from '../ButtonList';
import { emptyCustomer } from '../../../../store/data';

// import './Content.scss';

// const handlers = {
//     onChangeCustomer: ({ customer, changeCustomer }) => event => {
//         const field = event.target.name;

//         changeCustomer({ ...customer, [field]: event.target.value });
//     }
// };

const Content = connect(null, null)(() => (
    <div className='autorisation-content'>
        <FormAutorisation/>
        <ButtonList/>
    </div>
));

Content.propTypes = {
};

export default compose(
    withState('customer', 'changeCustomer', emptyCustomer),
    withHandlers(),
)(Content);
