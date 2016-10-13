import React, {Component, PropTypes} from 'react';

export default class TextArea extends Component {

  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    label: PropTypes.string,
    hidden: PropTypes.bool,
    left: PropTypes.any,
    right: PropTypes.any
  };
  state = {
    'value': this.props.value || '',
  };

  componentWillReceiveProps(props) {
    if (props.value !== this.props.value) {
      this.setState({'value': props.value});
    }
    if (!props.value) {
      this.setState({'value': ''});
    }
  }
  updateValue = (event) => {
    // console.log('State changed to ' + newValue);
    this.setState({
      	value: event.target.value
    });
    const {onChange} = this.props;
    if (typeof onChange === 'function') {
      onChange(event.target.value, event.target.value);
    }
  };

  render() {
    const styles = require('./TextArea.css');
    const hidden = this.props.hidden ? {'display': 'none'} : {};
    const left = this.props.left || '5';
    const right = this.props.right || '7';
    return (
      <div className="" style={hidden}>
        <label className={'col-sm-' + left + ' control-label '}>{this.props.label}</label>
        <div className={'col-sm-' + right}>
          <textarea
                  {...this.props}
                  value={this.state.value}
                  onChange={this.updateValue.bind(this)}
                  className={'textarea ' + styles.standHeight}
                 />
       </div>
       </div>

    );
  }
}
