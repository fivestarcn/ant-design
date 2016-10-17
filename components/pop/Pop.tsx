import React, {Component, PropTypes} from 'react';
import { Button, Modal } from 'antd';

export default class Pop extends Component {

  static propTypes = {
    // 关闭自己的回调必须要
    close: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    label: PropTypes.string,
    show: PropTypes.bool,
    children: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.arrayOf(React.PropTypes.element)
    ]),
    simple: PropTypes.bool
  };
  state = {
    'show': false,
    'value': ''
  };

  updateValue = (value) => {
    this.setState({ value });
  };

  pop = ()=>{
    this.setState({'show': !this.state.show});
  }

  save = ()=>{
    // 不带参数情况，父节点传入onChange方法，调用onChange方法
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
    this.close();
  }

  close = ()=>{
    if (typeof this.props.close === 'function') {
      this.props.close();
    }else {
      console.error('props of close should be function, to set show off.');
    }
  }

  delete = ()=>{
    if (this.props.onChange) {
      this.props.onChange(null);
    }
    this.close();
  }

  render() {
    require('./Pop.css');
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        // 子节点需要返回数据时，处理onChange回调
        onChange: this.updateValue,
      })
    );
    if (this.props.simple) {
      return (
        <div>
          <Modal
             wrapClassName="vertical-center-modal"
             title={this.props.label}
             style={{ top: 20 }}
             visible={this.props.show}
             width={840}
             onCancel={this.close}
             footer={
               null
             }
           >
           { childrenWithProps }
           </Modal>
         </div>
      );
    }
    return (
      <div>
        <Modal
           wrapClassName="vertical-center-modal"
           title={this.props.label}
           style={{ top: 20 }}
           visible={this.props.show}
           width={840}
           onCancel={this.close}
           footer={[
             <Button key="1" type="primary" onClick={this.save}>保存</Button>,
             <Button key="2" style={{'marginLeft': '5px'}} onClick={this.close}>取消</Button>,
             <Button key="3" style={{'marginLeft': '5px'}} type="ghost" onClick={this.delete}>清空选择</Button>,
           ]}
         >
           { childrenWithProps }
         </Modal>
       </div>
    );
  }
}
