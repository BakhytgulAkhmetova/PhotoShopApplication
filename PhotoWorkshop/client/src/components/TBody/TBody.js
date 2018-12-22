import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import { styles } from './styles';

const TBody = ({ rows, rowsPerPage, page, properties, configSelect, handleChange, handleDelete, classes, button }) => {
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                return (
                    <TableRow key={row.ID}>
                        {
                            properties.map((prop, index) => (
                                <TableCell key={prop + index}>
                                    { row[prop]   }</TableCell>
                            ))
                        }
                        {
                            configSelect ?
                                <TableCell>
                                    <select id={row.ID} onChange={handleChange}>
                                        <option value={row[configSelect.selectedProp]}>
                                            {row[configSelect.selectedProp]}</option>
                                        {
                                            configSelect.options.map((o, index) => (<option
                                                key={o + index}
                                                value={o}>{o}</option>
                                            ))
                                        }
                                    </select>
                                </TableCell>
                                : null
                        }
                        {
                            button ? <TableCell>
                                <Button
                                    id={row.ID}
                                    onClick={handleDelete}
                                    variant='outlined' size='small' color='primary'
                                    className={classes.margin}>
                                    delete
                                </Button>
                            </TableCell> : null
                        }
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
    page: PropTypes.number.isRequired,
    properties: PropTypes.array.isRequired,
    handleDelete: PropTypes.func,
    configSelect: PropTypes.object,
    handleChange: PropTypes.func,
    button: PropTypes.bool
};

export default withStyles(styles)(TBody);
