import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { compose, withHandlers } from 'recompose';

import { styles } from './styles';

const handlers = {
    handleFirstPageButtonClick: props => event => {
        props.onChangePage(event, 0);
    },

    handleBackButtonClick: props => event => {
        props.onChangePage(event, this.props.page - 1);
    },

    handleNextButtonClick: props => event => {
        props.onChangePage(event, this.props.page + 1);
    },

    handleLastPageButtonClick: props => event => {
        props.onChangePage(
            event,
            Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
        );
    }
};

const TablePaginationActions  = ({
    classes, count, page, rowsPerPage, theme,
    handleFirstPageButtonClick,
    handleBackButtonClick,
    handleNextButtonClick,
    handleLastPageButtonClick
}) => {
    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label='First Page'>
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label='Previous Page'>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label='Next Page'>
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label='Last Page'>
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
};

TablePaginationActions.propTypes = {
    classes: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired,
    handleFirstPageButtonClick : PropTypes.func.isRequired,
    handleBackButtonClick: PropTypes.func.isRequired,
    handleNextButtonClick: PropTypes.func.isRequired,
    handleLastPageButtonClick: PropTypes.func.isRequired
};

const TablePaginationActionsWrapped = withStyles(styles, { withTheme: true })(
    TablePaginationActions
);

export default compose(
    withHandlers(handlers)
)(TablePaginationActionsWrapped);
