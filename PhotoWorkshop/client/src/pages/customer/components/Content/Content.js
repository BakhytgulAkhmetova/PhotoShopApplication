import React from 'react';

import { OrderTable } from '../../../../components/OrderTable';

import './Content.scss';

const Content = () => {
    return (<div className='customer-content'>
        <h1>My orders</h1>
        <OrderTable/>
    </div>);
};

export default Content;
