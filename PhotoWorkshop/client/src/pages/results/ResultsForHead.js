import React from 'react';
import { connect } from 'react-redux';
import { compose, withState } from 'recompose';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Header } from './Header';
import { default as dateRangeInitial } from './data';
import { Footer } from './Footer';
import { ContentPage } from './ContentPage';
import { signout } from '../../store/authentication/actionCreators';
import { cleanOrderList } from '../../store/order/actionCreators';
import { getAllOrderList, updateOrderStatus,
    deleteOrder, getOrderListByDateRange } from '../../store/order/asyncActions';

const mapStateToProps = (state) => ({
    head: state.head.current,
    orderListAll: state.order.orderListAll
});

const mapDispatchToProps = (dispatch, { history, dateRange }) => ({
    handleSendDateRange: () => {
        dispatch(getOrderListByDateRange(dateRange.startDate, dateRange.endDate));
    },
    handleSignOut: () => {
        dispatch(cleanOrderList());
        dispatch(signout());
    },
    handleGetOrders: () => {
        history.push('./head');
    },
    getOrderList: () => {
        dispatch(getAllOrderList());
    },
    handleChange: async (event) => {
        const timeReady = event.target.value === 'completed' ? new Date() : null;
        const updateOptions = { status: event.target.value, timeReady };

        await dispatch(updateOrderStatus(updateOptions, +event.target.id));
        await dispatch(getAllOrderList());
    },
    handleDelete: async (event) => {
        await dispatch(deleteOrder(+event.currentTarget.id));
        await dispatch(getAllOrderList());
    }
});

const ResultsForHead = ({ handleSignOut, handleGetOrders, dateRange, changeDateRange,
    head, orderListAll, handleChange, handleSendDateRange, handleDelete, history }) => {
    const fullName = `${head.FirstName  }  ${  head.LastName[0] || ''}.`;

    return (<div>
        <Header
            history={history}
            fullName={fullName}
            handleGetOrders={handleGetOrders}
            handleSignOut={handleSignOut}/>
        <ContentPage
            handleSendDateRange={handleSendDateRange}
            changeDateRange={changeDateRange}
            dateRange={dateRange}
            handleDelete={handleDelete}
            handleChange={handleChange}
            orderListAll={orderListAll}/>
        <Footer/>
    </div>);
};

ResultsForHead.propTypes = {
    history: PropTypes.object.isRequired,
    handleSignOut: PropTypes.func.isRequired,
    handleGetOrders: PropTypes.func.isRequired,
    head: PropTypes.object.isRequired,
    dateRange: PropTypes.object.isRequired,
    changeDateRange: PropTypes.func.isRequired,
    orderListAll: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleSendDateRange: PropTypes.func.isRequired
};

export default compose(
    withState('dateRange', 'changeDateRange', dateRangeInitial),
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(ResultsForHead);
