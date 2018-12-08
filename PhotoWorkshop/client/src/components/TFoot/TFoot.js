import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
// import { compose, withHandlers } from 'recompose';

// const handlers = {
//   onHandleChangePage = (event, page) => {
//     this.setState({ page });
// },

// onHandleChangeRowsPerPage = event => {
//     this.setState({ rowsPerPage: event.target.value });
// }
// }


// import { TablePaginationActionsWrapped } from '../TablePaginationActionsWrapped';

const TFoot = ({ rows, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage }) => {
    return (<TableFooter>
        <TableRow>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={3}
                component='div'
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                    native: true
                }}
                // ActionsComponent={TablePaginationActionsWrapped}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}/>
        </TableRow>
    </TableFooter>);
};

TFoot.propTypes = {
    rows: PropTypes.array.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    handleChangePage: PropTypes.func.isRequired,
    handleChangeRowsPerPage: PropTypes.func.isRequired
};

export default TFoot;
