import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import { OrderTable } from '../../../components/OrderTable';
import { DateRange } from '../../../components/DateRange';

import './ContentPage.scss';
import { styles } from './styles';

const fieldBodyTable = ['ID', 'Tarif', 'Price', 'TimeReady'];
const fieldHeadTable = ['№', 'Tarif', 'Price', 'TimeReady', 'Status', ''];
const configSelect = {
    selectedProp: 'Status',
    options: ['in progress', 'completed', 'waiting']
};

const ContentPage = ({ orderListAll, handleChange, changeDateRange,
    handleDelete, handleSendDateRange, dateRange }) => {
    return (<div className='manager-content'>
        <h1 className='order-capture-results__text'>Resutls for some period</h1>
        <DateRange
            handleSendDateRange={handleSendDateRange}
            changeDateRange={changeDateRange}
            dateRange= {dateRange}/>
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
    handleSendDateRange: PropTypes.func,
    changeDateRange: PropTypes.func,
    dateRange: PropTypes.object.isRequired,
    handleDelete: PropTypes.func
};

export default compose(
    withStyles(styles)
)(ContentPage);
