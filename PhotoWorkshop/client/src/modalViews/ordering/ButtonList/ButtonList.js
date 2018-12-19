import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { styles } from './styles';

import { closeModal } from '../../../../src/store/modal/actionCreators';

const mapDispatchToProps = (dispatch) => ({
    onCancel: () => {
        dispatch(closeModal());
    },
    onRegistrate: async () => {
        dispatch(closeModal());
    }
});

const ButtonList = ({ onCancel, onRegistrate, classes }) => [<Button
    key='cancel'
    className={classes.buttonLeft}
    onClick={onCancel}
    variant='outlined' size='medium' color='primary'>
cancel </Button>, <Button
    key='registration'
    className={classes.buttonRight}
    onClick={onRegistrate}
    variant='contained' size='medium' color='primary'>
order </Button>];

export default  compose(
    connect(null, mapDispatchToProps),
    withStyles(styles)
)(ButtonList);
