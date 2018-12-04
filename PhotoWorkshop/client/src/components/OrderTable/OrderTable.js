import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';

import { THead } from './components/THead';
import { TBody } from './components/TBody';
import { TFoot } from './components/TFoot';

// const actionsStyles = theme => ({
//     root: {
//         flexShrink: 0,
//         color: theme.palette.text.secondary,
//         marginLeft: theme.spacing.unit * 2.5
//     }
// });

// class TablePaginationActions extends React.Component {
//   handleFirstPageButtonClick = event => {
//       this.props.onChangePage(event, 0);
//   };

//   handleBackButtonClick = event => {
//       this.props.onChangePage(event, this.props.page - 1);
//   };

//   handleNextButtonClick = event => {
//       this.props.onChangePage(event, this.props.page + 1);
//   };

//   handleLastPageButtonClick = event => {
//       this.props.onChangePage(
//           event,
//           Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
//       );
//   };

//   render() {
//       const { classes, count, page, rowsPerPage, theme } = this.props;

//       return (
//           <div className={classes.root}>
//           <IconButton
//                   onClick={this.handleFirstPageButtonClick}
//             disabled={page === 0}
//                   aria-label='First Page'>
//             {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//               </IconButton>
//           <IconButton
//             onClick={this.handleBackButtonClick}
//                   disabled={page === 0}
//                   aria-label='Previous Page'>
//             {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//               </IconButton>
//               <IconButton
//                   onClick={this.handleNextButtonClick}
//                   disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//                   aria-label='Next Page'>
//                   {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//               </IconButton>
//           <IconButton
//                   onClick={this.handleLastPageButtonClick}
//                   disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//                   aria-label='Last Page'>
//                   {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//               </IconButton>
//           </div>
//       );
//   }
// }

// TablePaginationActions.propTypes = {
//     classes: PropTypes.object.isRequired,
//     count: PropTypes.number.isRequired,
//     onChangePage: PropTypes.func.isRequired,
//     page: PropTypes.number.isRequired,
//     rowsPerPage: PropTypes.number.isRequired,
//     theme: PropTypes.object.isRequired
// };

// const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
//     TablePaginationActions,
// );

let counter = 0;

function createData(name, calories, fat) {
    counter += 1;
    return { id: counter, name, calories, fat };
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
          createData('Cupcake', 305, 3.7),
          createData('Donut', 452, 25.0),
          createData('Eclair', 262, 16.0),
          createData('Frozen yoghurt', 159, 6.0),
          createData('Gingerbread', 356, 16.0),
          createData('Honeycomb', 408, 3.2),
          createData('Ice cream sandwich', 237, 9.0),
          createData('Jelly Bean', 375, 0.0),
          createData('KitKat', 518, 26.0),
          createData('Lollipop', 392, 0.2),
          createData('Marshmallow', 318, 0),
          createData('Nougat', 360, 19.0),
          createData('Oreo', 437, 18.0)
      ].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
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
                      <TBody/>
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
