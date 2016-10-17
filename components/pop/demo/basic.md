---
order: 0
title:
  zh-CN: 弹出框
---

## zh-CN

基本使用

````jsx
import { Pop, Button } from 'antd';

const App = React.createClass({
  getInitialState() {
    return { show : false };
  },
  showPop() {
    this.setState({ 
      show:true,
    });
  },
  closePop() {
    this.setState({ 
      show:false,
    });
  },
  render(){
    return (
      <div>
        <Button type="primary" onClick={this.showPop}>Open a modal dialog</Button>
        <Pop show={this.state.show} close={ this.closePop } label="example">
          <p>弹出框容器组件</p>
          <p>弹出框容器组件</p>
          <p>弹出框容器组件</p>
        </Pop>
      </div>
    )
  },
});

ReactDOM.render(<App />, mountNode);
````
