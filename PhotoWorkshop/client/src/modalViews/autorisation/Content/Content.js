import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';

import { FormAutorisation } from '../FormAutorisation';
import { ButtonList } from '../ButtonList';
// import { emptyCustomer } from '../../../../store/customer/initilalState';

// import './Content.scss';

// const handlers = {
//     onChangeCustomer: ({ customer, changeCustomer }) => event => {
//         const field = event.target.name;

//         changeCustomer({ ...customer, [field]: event.target.value });
//     }
// };

const Content = ({ history }) => {
    console.log(history);

    return (
        <div className='autorisation-content'>
            <FormAutorisation/>
            <ButtonList history={history}/>
        </div>
    );
};


Content.propTypes = {
    history: PropTypes.object.isRequired
};

export default compose(
    withState('customer', 'changeCustomer', {}),
    withHandlers(),
)(Content);
