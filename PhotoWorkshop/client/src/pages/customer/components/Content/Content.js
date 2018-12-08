import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { OrderTable } from '../../../../components/OrderTable';

import './Content.scss';

const styles = theme => ({
    btnOrder: {
        border: '1px solid red'
    }
});


const Content = ({ classes }) => {
    return (<div className='customer-content'>
        <div className='customer-content__order-capture'>
            <h1 className='order-capture__text'>My orders</h1>
            <Button className={classNames('order-capture__button', classes.btnOrder)} >Create new</Button>
        </div>
        <OrderTable/>
    </div>);
};

Content.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);
