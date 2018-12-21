import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import PropTypes from 'prop-types';

import { Header } from './Header';
import { Footer } from './Footer';
import { ContentPage } from './ContentPage';
import { signout } from '../../store/authentication/actionCreators';
import { cleanOrderList } from '../../store/order/actionCreators';
import { getAllOrderList } from '../../store/order/asyncActions';

const mapStateToProps = (state) => ({
    manager: state.manager.current,
    orderListAll: state.order.orderListAll
});

const mapDispatchToProps = (dispatch) => ({
    handleSignOut: () => {
        dispatch(cleanOrderList());
        dispatch(signout());
    },
    getOrderList: () => {
        dispatch(getAllOrderList());
    }
});

const Manager = ({ handleSignOut, manager, orderListAll }) => {
    const fullName = `${manager.FirstName  }  ${  manager.LastName[0] || ''}.`;

    return (<div>
        <Header
            fullName={fullName}
            handleSignOut={handleSignOut}/>
        <ContentPage orderListAll={orderListAll}/>
        <Footer/>
    </div>);
};

Manager.propTypes = {
    history: PropTypes.object.isRequired,
    handleSignOut: PropTypes.func.isRequired,
    manager: PropTypes.object.isRequired,
    orderListAll: PropTypes.array.isRequired
};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    lifecycle({
        componentDidMount() {
            this.props.getOrderList();
        }
    })
)(Manager);
