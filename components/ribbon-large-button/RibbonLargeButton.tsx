import React, {Component, PropTypes} from 'react';

export default class RibbonLargeButton extends Component<any, any> {

  static propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.string,
    label: PropTypes.string,
    disable: PropTypes.bool,
  };
  state = {
    'value': '',
  };

  onClick(event) {
    const {disable} = this.props;
    if (!disable) {
      const {onClick} = this.props;
      if (typeof onClick === 'function') {
        onClick(event);
      }
    }
  }

  render() {
    require('./RibbonLargeButton.css');
    const {label} = this.props;
    const {icon} = this.props;
    const {disable} = this.props;
    const width = 44;
    const height = 44;
    if (disable) {
      return (
        <div className={'stand-large-button-disable'} style={{'cursor': 'default'}}>
          <span style={{'textAlign': 'center'}}>
            <img width={width} height={height} src={require('./imgs/' + icon + '.png')} />
          </span>
          <span className={'stand-large-button-text'}>
            {label}
          </span>
        </div>
      );
    }
    if (!disable) {
      return (
        <div className={'stand-large-button'} style={{'cursor': disable ? 'default' : 'pointer'}} onClick={this.onClick.bind(this)}>
          <span style={{'textAlign': 'center'}}>
            <img width={width} height={height} src={require('./imgs/' + icon + '.png')} />
          </span>
          <span className={'stand-large-button-text'}>
            {label}
          </span>
        </div>
      );
    }
  }
}
