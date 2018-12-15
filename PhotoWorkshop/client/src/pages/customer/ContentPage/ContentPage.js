import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { OrderTable } from '../../../components/OrderTable';
import { Content } from '../../../modalViews/ordering/Content';
import { fillContent, fillHeader, changeStyle, openModal } from '../../../store/modal/actionCreators';

import './ContentPage.scss';
import { styles } from './styles';

const mapDispatchToProps = (dispatch) => ({
    handleClick: () => {
        dispatch(fillHeader(<h1 className='capture-ordering'>New order</h1>));
        dispatch(fillContent(<Content/>));
        dispatch(changeStyle('modal-ordering'));
        dispatch(openModal());
    }
});

const ContentPage = ({ classes, handleClick }) => {
    return (<div className='customer-content'>
        <div className='customer-content__order-capture'>
            <h1 className='order-capture__text'>My orders</h1>
            <Button
                onClick={handleClick}
                className={classNames('order-capture__button', classes.btnOrder)} >Create new</Button>
        </div>
        <OrderTable/>
    </div>);
};

ContentPage.propTypes = {
    classes: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default compose(
    connect(null, mapDispatchToProps),
    withStyles(styles)
)(ContentPage);
