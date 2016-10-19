---
order: 0
title:
  zh-CN: 树视图
---

## zh-CN

基本使用

````jsx
import { Pop, TreeView, Button } from 'antd';

var arr = [{id: 1,name: "江苏省",children:[{id: 10,name: "南京",children:[{id: 101,name: "江宁区"},{id: 111,name: "鼓楼区"}]},{id: 11,name: "苏州"}]},{id: 2,name: "浙江省"}];

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
  onToggle() {
    this.setState({
      checkable: false,
    })
  },
  render(){
    return (
      <div>
        <Button type="primary" onClick={this.showPop}>Open a modal dialog</Button>
        <Pop show={ this.state.show } close={this.closePop}>
        <TreeView onToggle={this.onToggle} data={arr}
          />
         </Pop>
      </div>
    )
  },
});

ReactDOM.render(<App />,mountNode);
````
