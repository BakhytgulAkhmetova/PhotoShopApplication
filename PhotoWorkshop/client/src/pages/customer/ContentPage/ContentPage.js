import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { compose } from 'recompose';

import { OrderTable } from '../../../components/OrderTable';

import './ContentPage.scss';
import { styles } from './styles';

const ContentPage = ({ classes, handleClick, orderList }) => {
    return (<div className='customer-content'>
        <div className='customer-content__order-capture'>
            <h1 className='order-capture__text'>My orders</h1>
            <Button
                onClick={handleClick}
                className={classNames('order-capture__button', classes.btnOrder)} >Create new</Button>
        </div>
        <OrderTable data={orderList}/>
    </div>);
};

ContentPage.propTypes = {
    classes: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
    orderList: PropTypes.array.isRequired
};

export default compose(
    withStyles(styles)
)(ContentPage);
