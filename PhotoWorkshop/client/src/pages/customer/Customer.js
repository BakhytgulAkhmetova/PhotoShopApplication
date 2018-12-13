import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import PropTypes from 'prop-types';

import { Header } from './Header';
import { Footer } from './Footer';
import { ContentPage } from './ContentPage';
import { getLastCustomer } from '../../store/customer/asyncActions';

const mapStateToProps = (state) => ({
    customer: state.customer.current,
    orderList: state.order.orderCustomerList
});

const mapDispatchToProps = (dispatch) => ({
    getCustomer: () => dispatch(getLastCustomer())
});

const Customer = ({ customer, orderList }) => {
    const fullName = `${customer.FirstName  }${  customer.LastName}`;

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
    lifecycle({
        componentDidMount() {
            this.props.getCustomer();
        }
    })
)(Customer);
