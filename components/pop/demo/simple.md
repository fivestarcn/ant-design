---
order: 1
title:
  zh-CN: 简单弹出框
---

## zh-CN

通过传入simple为true参数控制

````jsx
import { Pop, Button } from 'antd';

const App = React.createClass({
  getInitialState() {
    return { simple: true };
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
        <Pop show={this.state.show} close={ this.closePop } label="example" simple={this.state.simple}>
          <p>简单弹出框容器组件</p>
          <p>简单弹出框容器组件</p>
          <p>简单弹出框容器组件</p>
        </Pop>
      </div>
    )
  },
});

ReactDOM.render(<App />, mountNode);
````
