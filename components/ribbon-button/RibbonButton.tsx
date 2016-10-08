import React, {Component, PropTypes} from 'react';

export default class RibbonButton extends Component<any, any> {

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
    require('./RibbonButton.css');
    const {label} = this.props;
    const {icon} = this.props;
    const {disable} = this.props;
    const width = 20;
    const height = 20;
    if (disable) {
      return (
        <div className={'stand-button-disable'} style={{'cursor': 'default'}}>
          <span>
            <img width={width} height={height} src={require('./imgs/' + icon + '.png')} />
          </span>
          <span className={'stand-button-text'} style={{paddingLeft: '3px'}} >
            {label}
          </span>
        </div>
      );
    }
    if (!disable) {
      return (
        <div className={'stand-button'} style={{'cursor': disable ? 'default' : 'pointer'}}
        onClick={this.onClick.bind(this)}>
          <span>
            <img width={width} height={height} src={require('./imgs/' + icon + '.png')} />
          </span>
          <span className={'stand-button-text'} style={{paddingLeft: '3px'}} >
            {label}
          </span>
        </div>
      );
    }
  }
}
