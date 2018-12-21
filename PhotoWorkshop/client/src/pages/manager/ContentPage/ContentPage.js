import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import { OrderTable } from '../../../components/OrderTable';

import './ContentPage.scss';
import { styles } from './styles';

const ContentPage = ({ orderListAll }) => {
    return (<div className='manager-content'>
        <h1 className='order-capture__text'>All orders</h1>
        <OrderTable data={orderListAll}/>
    </div>);
};

ContentPage.propTypes = {
    orderListAll: PropTypes.array.isRequired
};

export default compose(
    withStyles(styles)
)(ContentPage);
