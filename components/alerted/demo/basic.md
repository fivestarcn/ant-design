---
order: 0
title:
  zh-CN: 弹出框
---

## zh-CN

基本使用

````jsx
import { Alerted, Button } from 'antd';

const App = React.createClass({
  showAlerted() {
    let error = '请输入一条信息';
    this.refs.alert.show('提示', error);
  },
  render(){
    return (
      <div>
        <Button type="primary" onClick={this.showAlerted}>Open a alerted</Button>
        <Alerted label="alert" value="alert" ref="alert"/>
      </div>
    )
  },
});

ReactDOM.render(<App />, mountNode);
````
