import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers } from 'recompose';

import { default as dateRangeInitial } from './data';

import 'react-datepicker/dist/react-datepicker.css';
import './DateRange.scss';

const handlers = {
    handleChangeStart: ({ dateRange, changeDateRange }) => date => {
        changeDateRange({ ...dateRange, startDate: date });
    },
    handleChangeEnd: ({ dateRange, changeDateRange }) => date => {
        changeDateRange({ ...dateRange, endDate: date });
    }
};

const DateRange = ({ dateRange, handleChangeStart, handleChangeEnd }) => {
    return (
        <form className='form-date-sort'>
            <div>
                <DatePicker
                    selected={dateRange.startDate}
                    selectsStart
                    startDate={dateRange.startDate}
                    showTimeSelect
                    timeFormat='HH:mm'
                    timeIntervals={15}
                    dateFormat='MMMM d, yyyy h:mm aa'
                    timeCaption='time'
                    onChange={handleChangeStart}
                    endDate={dateRange.endDate}/>
            </div>
            <div>
                <DatePicker
                    selected={dateRange.endDate}
                    selectsEnd
                    startDate={dateRange.startDate}
                    showTimeSelect
                    timeFormat='HH:mm'
                    timeIntervals={15}
                    dateFormat='MMMM d, yyyy h:mm aa'
                    timeCaption='time'
                    onChange={handleChangeEnd}
                    endDate={dateRange.endDate}/>
            </div>
        </form>);
};

DateRange.propTypes = {
    dateRange: PropTypes.object.isRequired,
    handleChangeStart: PropTypes.func.isRequired,
    handleChangeEnd: PropTypes.func.isRequired
};

export default compose(
    withState('dateRange', 'changeDateRange', dateRangeInitial),
    withHandlers(handlers)
)(DateRange);
