import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import PropTypes from 'prop-types';

import { Header } from './Header';
import { Footer } from './Footer';
import { ContentPage } from './ContentPage';
import { Content } from '../../../src/modalViews/ordering/Content';
import { fillContent, fillHeader, changeStyle, openModal } from '../../store/modal/actionCreators';
import { signout } from '../../store/authentication/actionCreators';
import { cleanOrderList } from '../../store/order/actionCreators';
import { getCustomerOrderList } from '../../store/order/asyncActions';

const mapStateToProps = (state) => ({
    isRegistrated: state.authentication.isRegistrated,
    customer: state.customer.current,
    orderList: state.order.orderCustomerList
});

const mapDispatchToProps = (dispatch) => ({
    handleClick: () => {
        dispatch(fillHeader(<h1 className='capture-ordering'>New order</h1>));
        dispatch(fillContent(<Content/>));
        dispatch(changeStyle('modal-ordering'));
        dispatch(openModal());
    },
    handleSignOut: () => {
        dispatch(cleanOrderList());
        dispatch(signout());
    },
    getOrderList: (customer) => {
        debugger;
        dispatch(getCustomerOrderList(customer.ID));
    }
});

const Customer = ({ customer, handleClick, handleSignOut, orderList }) => {
    const fullName = `${customer.FirstName  }  ${  customer.LastName[0] || ''}.`;

    return (<div>
        <Header
            handleSignOut={handleSignOut}
            fullName={fullName}/>
        <ContentPage
            orderList={orderList}
            handleClick={handleClick}/>
        <Footer/>
    </div>);
};

Customer.propTypes = {
    customer: PropTypes.object.isRequired,
    orderList:PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired,
    handleSignOut: PropTypes.func.isRequired
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
            this.props.getOrderList(this.props.customer);
        }
    })
)(Customer);
