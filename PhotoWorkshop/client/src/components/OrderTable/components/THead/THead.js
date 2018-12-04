import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const THead = () => {
    return (<TableHead>
        <TableRow>
            <TableCell>№</TableCell>
            <TableCell numeric>Status</TableCell>
        </TableRow>
    </TableHead>);
};

export default THead;
