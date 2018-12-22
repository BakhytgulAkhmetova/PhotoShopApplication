import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { compose } from 'recompose';

import { THead } from '../THead';
import { TBody } from '../TBody';
import { TFoot } from '../TFoot';

import { styles } from './styles';

class OrderTable extends React.Component {
    state = {
        rows: [],
        page: 0,
        rowsPerPage: 5
    };

    static getDerivedStateFromProps(props, state) {
        if (props.data !== state.rows) {
            return { rows: props.data };
        }
    }

    onHandleChangePage = (event, page) => {
        this.setState({ page });
    }

    onHandleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    }

    render() {
        const { classes, properties, heads, configSelect, handleChange, button, handleDelete } = this.props;
        const { rows, rowsPerPage, page } = this.state;

        return (
            <Paper className={classes.root}>
                <div className={classes.tableWrapper}>
                    <Table className={classes.table}>
                        <THead heads={heads}/>
                        <TBody
                            handleDelete={handleDelete}
                            button={button}
                            handleChange={handleChange}
                            configSelect={configSelect}
                            properties={properties}
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
    classes: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    properties: PropTypes.array.isRequired,
    heads: PropTypes.array.isRequired,
    configSelect: PropTypes.object,
    handleChange: PropTypes.func,
    handleDelete: PropTypes.func,
    button: PropTypes.bool
};

export default compose(
    withStyles(styles)
)(OrderTable);
