import React, {Component, PropTypes} from 'react';
import RibbonLargeButton from '../ribbon-large-button/RibbonLargeButton';
import RibbonButton from '../ribbon-button/RibbonButton';

export default class RibbonHeader extends Component<any, any> {

  /*
  height:组件高度（像素）
  columns:列宽度，例如：[60, 110, 86, 86, 86]，表示总共5列，每列宽度分别为xxxxx（像素）
  items:例如：
  {'type':'large', 'col':0, 'icon':'glyphicon-search', 'label':'查询', 'onClick':this.fetchVal, 'disable':this.props.loading},
  {'col':1, 'icon':'glyphicon-repeat', 'label':'重置', 'onClick':this.resetParam},
  type表示按钮样式（normal，large）
  col表明本按钮属于哪列，例如0表示columns[0]...
  icon bootstrap图标样式
  label 按钮文字
  onClick 点击事件
  disable 是否可用
  */

  static propTypes = {
    height: PropTypes.number,
    columns: PropTypes.array,
    items: PropTypes.array,
    hidden: PropTypes.bool,
  };
  static defaultProps = {
    'hidden': false,
  };
  state = {
    'hidden': this.props.hidden,
  };

  render() {
    if (this.state.hidden) {
      return (
        <div>
        </div>
      );
    }

    require('./RibbonHeader.css');
    const height = typeof this.props.height === 'undefined' ? 58 : this.props.height;

    const {items} = this.props;
    const {columns} = this.props;
    const datas = [];
    let key = 0;
    for (let idx = 0; idx < columns.length; idx++) {
      const arr = [];
      for (const item of items) {
        key++;
        if (item.col === idx) {
          if (item.type === 'large') {
            arr.push(<RibbonLargeButton key={key} label={item.label} icon={item.icon} onClick={item.onClick} disable={item.disable}/>);
          } else {
            arr.push(<RibbonButton key={key} label={item.label} icon={item.icon} onClick={item.onClick} disable={item.disable}/>);
          }
        }
      }
      const column = columns[idx];
      if (idx === 0) {
        datas.push(<div key={key + idx} className="padding-left" style={{'width': column, 'float': 'left', 'height': height}}>{arr}</div>);
      } else {
        datas.push(<div key={key + idx} className="padding-left section-sep-left" style={{'width': column, 'float': 'left', 'height': height}}>{arr}</div>);
      }
    }

    return (
      <div>
        {datas}
      </div>
    );
  }
}
