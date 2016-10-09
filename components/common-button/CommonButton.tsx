import React, {Component, PropTypes} from 'react';
import {Icon} from 'antd';

export default class CommonButton extends Component<any, any> {

  /*
  onClick 点击事件
  textColor  文字颜色，定义了颜色则显示否则默认
  underline  是否有下划线 (true表示有 false或未定义表示无)
  text  按钮显示文字
  icon  图标（参考antd图标库，http://ant.design/components/icon/）
  backColor  背景色
  */

  static propTypes = {
    onClick: PropTypes.func,
    textColor: PropTypes.string,
    underline: PropTypes.bool,
    text: PropTypes.string,
    icon: PropTypes.string,
    backColor: PropTypes.string,
    float: PropTypes.string,
  };

  static defaultProps = {
    'underline': false,
  };

  state = {
    'backColor': '',
  };

  onMouseOver() {
    this.setState({'backColor': this.props.backColor});
  }

  onMouseOut() {
    this.setState({'backColor': ''});
  }

  onClick(event) {
    const {onClick} = this.props;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  }

  render() {
    // const styles = require('./CommonButton.scss');
    require('./CommonButton.css');
    // console.log(this.props.underline + !this.props.underline);
    return (
      <div style={{'float': this.props.float, 'background': this.state.backColor}} className={'com-button'} onClick={this.onClick.bind(this)}>
        <div className={'inner'} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}>
      	 <Icon className="icon-bottom" type={this.props.icon} />
      	 <button className="butt"><a style={{'textDecoration': this.props.underline ? 'underline' : 'none', 'color': this.props.textColor}}>{this.props.text}</a></button>
        </div>
      </div>
    );
  }
}
