import React, {Component, PropTypes} from 'react';
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;

export default class TreeView extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    data: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
    ]),
    onToggle: PropTypes.func.isRequired,
    checkable: PropTypes.bool
  };

  state = {
    checkedKeys: []
  }

  onSelect(info, ne) {
    let arr = [String(ne.node.props.id)];
    if (!ne.selected) {
      arr = [];
    }
    this.setState({'checkedKeys': arr});
    if (this.props.onChange) {
      this.props.onChange(ne);
    }
  }
  onCheck(checkedKeys, event) {
    let arr = [String(event.node.props.id)];
    if (!event.checked) {
      arr = [];
    }
    this.setState({'checkedKeys': arr});
    if (this.props.onChange) {
      event.selectedNodes = event.checkedNodes;
      this.props.onChange(event);
    }
  }
  onLoadData(treeNode) {
    this.props.onToggle(treeNode);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  }

  render() {
    // console.log('--------------TreeView render------------');
    require('./Style.css');
    const loop = (data) => {
      return data.map((item) => {
        if (item.children) {
          return <TreeNode {...item} title={item.name} key={item.id} isLeaf={item.isLeaf === '1' ? Boolean(true) : Boolean(false)} >{loop(item.children)}</TreeNode>;
        }
        return (
          <TreeNode title={item.name} key={item.id} isLeaf={item.isLeaf === '1'}
            disabled={item.disabled}
          />
        );
      });
    };
    const treeNodes = loop(this.props.data);
    return (
        <Tree
          checkable={this.props.checkable}
          onSelect={this.onSelect.bind(this)}
          onCheck={this.onCheck.bind(this)}
          loadData={this.onLoadData.bind(this)}
          checkedKeys={this.state.checkedKeys}
        >
          {treeNodes}
        </Tree>
    );
  }

}
