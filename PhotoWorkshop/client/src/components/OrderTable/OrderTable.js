import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';

import { THead } from './components/THead';
import { TBody } from './components/TBody';
import { TFoot } from './components/TFoot';

function createData(id, status) {
    return { id, status };
}

const styles = theme => ({
    root: {
        width: '50%',
        marginTop: '60px',
        margin: 'auto'
    },
    table: {
        minWidth: 500
    },
    tableWrapper: {
        overflowX: 'auto'
    }
});

class OrderTable extends React.Component {
    state = {
        rows: [
            createData(1, 'waiting'),
            createData(34, 'ready'),
            createData(35, 'in progress'),
            createData(34, 'ready'),
            createData(35, 'in progress'),
            createData(34, 'ready'),
            createData(35, 'in progress'),
            createData(34, 'ready'),
            createData(35, 'in progress'),
            createData(34, 'ready'),
            createData(35, 'in progress'),
            createData(34, 'ready'),
            createData(35, 'in progress')
        ],
        page: 0,
        rowsPerPage: 5
    };

  onHandleChangePage = (event, page) => {
      this.setState({ page });
  };

  onHandleChangeRowsPerPage = event => {
      this.setState({ rowsPerPage: event.target.value });
  };

  render() {
      const { classes } = this.props;
      const { rows, rowsPerPage, page } = this.state;

      return (
          <Paper className={classes.root}>
              <div className={classes.tableWrapper}>
                  <Table className={classes.table}>
                      <THead/>
                      <TBody
                          rows={rows}
                          rowsPerPage={rowsPerPage}
                          page={page}/>
                      <TFoot
                          rows={rows}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          handleChangePage={this.onHandleChangePage}
                          handleChangeRowsPerPage={this.onHandleChangeRowsPerPage}/>
                  </Table>
              </div>
          </Paper>
      );
  }
}

OrderTable.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OrderTable);
