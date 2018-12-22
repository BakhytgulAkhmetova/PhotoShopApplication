import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import { OrderTable } from '../../../components/OrderTable';

import './ContentPage.scss';
import { styles } from './styles';

const fieldBodyTable = ['ID', 'Tarif', 'Price', 'TimeReady'];
const fieldHeadTable = ['№', 'Tarif', 'Price', 'TimeReady', 'Status', ''];
const configSelect = {
    selectedProp: 'Status',
    options: ['in progress', 'completed', 'waiting']
};

const ContentPage = ({ orderListAll, handleChange, handleDelete }) => {
    return (<div className='manager-content'>
        <h1 className='order-capture__text'>All orders</h1>
        <OrderTable
            button
            handleDelete={handleDelete}
            handleChange={handleChange}
            configSelect={configSelect}
            properties={fieldBodyTable}
            heads={fieldHeadTable}
            data={orderListAll}/>
    </div>);
};

ContentPage.propTypes = {
    orderListAll: PropTypes.array.isRequired,
    handleChange: PropTypes.func,
    handleDelete: PropTypes.func
};

export default compose(
    withStyles(styles)
)(ContentPage);
