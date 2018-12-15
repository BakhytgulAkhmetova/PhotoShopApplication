import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PropTypes from 'prop-types';

import { Header } from './Header';
import { Footer } from './Footer';
import { ContentPage } from './ContentPage';
// import { getLastCustomer } from '../../store/customer/asyncActions';

const mapStateToProps = (state) => ({
    isRegistrated: state.authentication.isRegistrated,
    customer: state.customer.current,
    orderList: state.order.orderCustomerList
});

const mapDispatchToProps = (dispatch, { isRegistrated }) => {
    // const get = isRegistrated ? () => dispatch(getLastCustomer())
    //     : ;

    // return {
    //     getCustomer: get
    // };
};

const Customer = ({ customer, orderList }) => {
    const fullName = `${customer.FirstName  }  ${  customer.LastName[0] || ''}.`;

    return (<div>
        <Header fullName={fullName}/>
        <ContentPage/>
        <Footer/>
    </div>);
};

Customer.propTypes = {
    customer: PropTypes.object.isRequired,
    orderList:PropTypes.array.isRequired
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // lifecycle({
    //     componentDidMount() {
    //         debugger;
    //     }
    // })
)(Customer);
