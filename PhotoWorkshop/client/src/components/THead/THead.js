import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';

const THead = ({ classes }) => {
    return (<TableHead>
        <TableRow>
            <TableCell className={classes.head}>№</TableCell>
            <TableCell className={classes.head}>Status</TableCell>
        </TableRow>
    </TableHead>);
};

THead.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(THead);
