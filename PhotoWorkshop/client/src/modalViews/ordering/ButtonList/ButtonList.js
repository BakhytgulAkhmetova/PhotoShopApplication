import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { styles } from './styles';

import { addOrder, getCustomerOrderList } from '../../../../src/store/order/asyncActions';
import { closeModal } from '../../../../src/store/modal/actionCreators';


const mapDispatchToProps = (dispatch, { order, customer }) => ({
    onCancel: () => {
        dispatch(closeModal());
    },
    onOrder: async () => {
        const orderSend = { ...order,
            services: order.services,
            customerId: customer.ID,
            timeRequest: new Date(),
            price: order.price.sum };

        await dispatch(addOrder(orderSend));
        await dispatch(getCustomerOrderList(customer.ID));
        dispatch(closeModal());
    }
});

const ButtonList = ({ onCancel, onOrder, classes }) => [<Button
    key='cancel'
    className={classes.buttonLeft}
    onClick={onCancel}
    variant='outlined' size='medium' color='primary'>
cancel </Button>, <Button
    key='registration'
    className={classes.buttonRight}
    onClick={onOrder}
    variant='contained' size='medium' color='primary'>
order </Button>];

export default  compose(
    connect(null, mapDispatchToProps),
    withStyles(styles)
)(ButtonList);
