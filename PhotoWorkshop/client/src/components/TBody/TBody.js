import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { styles } from './styles';

const TBody = ({ rows, rowsPerPage, page }) => {
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                return (
                    <TableRow key={row.id}>
                        <TableCell component='th' scope='row'>
                            {row.id}
                        </TableCell>
                        <TableCell>{row.status}</TableCell>
                    </TableRow>
                );
            })}
            {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                    <TableCell colSpan={6} />
                </TableRow>
            )}
        </TableBody>

    );
};

TBody.propTypes = {
    classes: PropTypes.object.isRequired,
    rows: PropTypes.array.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired
};

export default withStyles(styles)(TBody);
