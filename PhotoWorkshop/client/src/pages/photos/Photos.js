import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';
import { ContentPage } from './ContentPage';
import { signout } from '../../store/authentication/actionCreators';
import { cleanOrderList } from '../../store/order/actionCreators';

const mapStateToProps = (state) => ({
    isRegistrated: state.authentication.isRegistrated,
    customer: state.customer.current,
    orderList: state.order.orderCustomerList
});

const mapDispatchToProps = (dispatch) => ({
    handleSignOut: () => {
        dispatch(cleanOrderList());
        dispatch(signout());
    }
});

const Photos = ({ customer, handleSignOut, history }) => {
    const fullName = `${customer.FirstName  }  ${  customer.LastName[0] || ''}.`;

    return (<div>
        <Header
            history={history}
            handleSignOut={handleSignOut}
            fullName={fullName}/>
        <ContentPage/>
        <Footer/>
    </div>);
};

Photos.propTypes = {
    customer: PropTypes.object.isRequired,
    orderList:PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired,
    handleSignOut: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Photos);
