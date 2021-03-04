import React from "react";
import { Fragment } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";
import dateFnsFormat from "date-fns/format";
import * as _ from "lodash";
import "react-day-picker/lib/style.css";

const formatDate = (date, format, locale) => {
    return dateFnsFormat(date, format, { locale });
};

const DatePicker = ({
    isDatePicker,
    isMultiple = false,
    value,
    minDate,
    maxDate,
    placeholder,
    format = "MM-dd-yyyy",
    ...rest
}) => {
    const disableDays = {};
    const dayPickerProps = {};
    if (minDate) {
        disableDays["before"] = minDate;
    }
    if (maxDate) {
        disableDays["after"] = maxDate;
    }
    dayPickerProps["disabledDays"] = disableDays;

    if (_.isArray(value)) {
        isMultiple = true;
    }

    if (isDatePicker) {
        dayPickerProps["selectedDays"] = value;
    }

    const handleChange = (v) => {
        if (isMultiple) {
            if (value) {
                if (_.some(value, (item) => DateUtils.isSameDay(item, v))) {
                    _.remove(value, (item) => DateUtils.isSameDay(item, v));
                } else {
                    value.push(v);
                }
            } else {
                value = [v];
            }
            rest.onChange(value);
        } else {
            rest.onChange(v);
        }
    };

    return (
        <Fragment>
            {isDatePicker ? (
                <DayPickerInput
                    component={(props) => <input className="form-control" {...props} />}
                    value={value}
                    placeholder={placeholder}
                    format={format}
                    formatDate={formatDate}
                    onDayChange={(v) => handleChange(v)}
                    dayPickerProps={dayPickerProps}
                />
            ) : (
                <DayPicker selectedDays={value} onDayClick={(v) => handleChange(v)} dayPickerProps={dayPickerProps} />
            )}
        </Fragment>
    );
};

export default DatePicker;