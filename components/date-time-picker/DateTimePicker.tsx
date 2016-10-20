import React, {Component, PropTypes} from 'react';
import { DatePicker } from 'antd';
export default class DateTimePicker extends Component {

  /*
    component react-bootstrap-datetimepicker
    https://github.com/quri/react-bootstrap-datetimepicker
    Name                Type	Default	Description
    dateTime            string	moment().format('x')	Represents the inital dateTime, this string is then parsed by moment.js
    format              string	"x"	Defines the format moment.js should use to parse and output the date to onChange
    inputFormat         string	"MM/DD/YY h:mm A"	Defines the way the date is represented in the HTML input. It must be a format understanable by moment.js
    onChange            function	x => console.log(x)	Callback trigger when the date changes. x is the new datetime value.
    showToday           boolean	true	Highlights today's date
    size                string	"md"	Changes the size of the date picker input field. Sizes: "sm", "md", "lg"
    daysOfWeekDisabled	array of integer	[]	Disables clicking on some days. Goes from 0 (Sunday) to 6 (Saturday).
    viewMode            string or number	'days'	The default view to display when the picker is shown. ('years', 'months', 'days')
    inputProps          object	undefined	Defines additional attributes for the input element of the component.
    minDate             moment	undefined	The earliest date allowed for entry in the calendar view.
    maxDate             moment	undefined	The latest date allowed for entry in the calendar view.
    mode                string	undefined	Allows to selectively display only the time picker ('time') or the date picker ('date')
    defaultText         string	{dateTime}	Sets the initial value. Could be an empty string, or helper text.
  */

  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.any, // "1990-06-05",
    disableBefore: PropTypes.any,
    disableAfter: PropTypes.any,
    label: PropTypes.string,
    format: PropTypes.string, // "YYYY-MM-DD",
    inputFormat: PropTypes.string, // "DD/MM/YYYY",
    viewMode: PropTypes.string // "date",time
  };

  state = {
    'value': this.props.value,
  };
  componentWillReceiveProps(props) {
    if ( props.value !== this.state.value ) {
      if ( !props.value ) {
        this.setState({value: props.value});
      }
    }
  }

  setValue = (value = '') => {
    this.setState({'value': value});
  }

  handleChange = (newDate, newDateString) => {
    this.setState({
      	value: newDate
    });
    const {onChange} = this.props;
    if (typeof onChange === 'function') {
      // const date = new Date(newDate * 1000);
      // const dateTimeString = moment(date / 1000).format('YYYY-MM-DD');
      onChange(newDate, newDateString);
    }
  };

  disabledDate = (current) => {
    // can not select days after today
    if ( this.props.disableBefore) {
      if (current && current.getTime() < this.props.disableBefore.getTime()) {
        if (new Date(current.getTime()).getDate() === this.props.disableBefore.getDate()) {
          return false;
        }
        return true;
      }
    }
    if ( this.props.disableAfter) {
      if (current && current.getTime() > this.props.disableAfter.getTime()) {
        if (new Date(current.getTime()).getDate() === this.props.disableAfter.getDate()) {
          return false;
        }
        return true;
      }
    }
    return false;
  };

  render() {
    const styles = require('./DateTimePicker.scss');
    require('./DateTimePicker.css');
    if(this.props.label){
    return (
      <div className="ant-row">
        <label className={'ant-col-8 control-label ' + ' label-input '}>{this.props.label}</label>
        <div className="ant-col-16">
          <DatePicker
            {...this.props}
            style={{ width: '100%'}}
            ref="timepicker"
            disabledDate={this.disabledDate}
            value={this.state.value}
            onChange={this.handleChange}
          />
       </div>
       </div>
          );
        }
      return (
      <div className="ant-row">
          <DatePicker
            {...this.props}
            style={{ width: '100%'}}
            ref="timepicker"
            disabledDate={this.disabledDate}
            value={this.state.value}
            onChange={this.handleChange}
          />
       </div>
          );


  }
}
