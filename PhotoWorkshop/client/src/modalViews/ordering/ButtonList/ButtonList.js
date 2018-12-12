import React from 'react';
import Button from '@material-ui/core/Button';
// import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

// import { closeModal } from '../../../../store/modal/actionCreators';

// const mapDispatchToProps = (dispatch) => ({
//     onCancel: () => {
//         dispatch(closeModal());
//     },
//     onRegistrate: async () => {
//         dispatch(closeModal());
//     }
// });

const styles = theme => ({
    buttonLeft: {
        margin: '5px 15px',
        width: '130px'
    },
    buttonRight: {
        marginLeft: '120px',
        width: '130px'
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

export default  withStyles(styles)(ButtonList);
