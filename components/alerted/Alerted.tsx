import React, {Component, PropTypes} from 'react';
import {Modal, Button} from 'antd';
export default class Alert extends Component {

  static propTypes = {
    // 关闭自己的回调必须要
    label: PropTypes.string,
    value: PropTypes.string,
  };
  state = {
    'show': false,
    'value': ''
  };


  pop = ()=>{
    this.setState({'show': !this.state.show});
  }

  show = (title, body) => {
    this.setState({'show': true, title, body});
  }


  close = ()=>{
    this.setState({'show': false});
  }
  render() {
    require('./Alerted.css');
    return (
      <div>
        <Modal
          title={this.state.title}
          wrapClassName="vertical-center-modal"
          visible={this.state.show}
          onCancel={() => this.close()}
          footer={[
            <Button key="back" type="primary" size="large" onClick={this.close}>关 闭</Button>,
          ]}
        >
          <p>{this.state.body}</p>
        </Modal>
      </div>
    );
  }
}
