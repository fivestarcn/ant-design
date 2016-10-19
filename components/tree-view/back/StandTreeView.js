import React, {Component, PropTypes} from 'react';
import {Treebeard} from 'react-treebeard';
import Theme from './theme.js';
import * as filters from './filter';
import styles from './styles';

export default class TreeView extends Component {
  displayName: 'TreeView';

  static propTypes = {
    onChange: PropTypes.func,
    data: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
    ]),
    onToggle: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {data: this.props.data};
    this.onToggle = this.onToggle.bind(this);
  }

  componentWillUpdate(props) {
    console.log('TreeView props update');
    console.log(props);
    if (props.data !== this.props.data) {
      this.setState({'data': props.data});
    }
  }

  onToggle(node, toggled) {
    if (this.state.cursor) {
      this.state.cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    this.setState({ cursor: node });
    if (this.props.onChange) {
      this.props.onChange(node);
    }
    if (this.props.onToggle) {
      this.props.onToggle(node, toggled);
    }
  }

  onFilterMouseUp(event) {
    const filter = event.target.value.trim();
    if (!filter) { return this.setState({data: this.props.data}); }
    let filtered = filters.filterTree(this.props.data, filter);
    filtered = filters.expandFilteredNodes(filtered, filter);
    this.setState({data: filtered});
  }

  render() {
    return (
      <div>
      <div style={styles.searchBox}>
            <div className="input-group">
                <span className="input-group-addon">
                  <span>搜索</span>
                </span>
                <input type="text"
                    className="form-control"
                    placeholder="Search the tree..."
                    onKeyUp={this.onFilterMouseUp.bind(this)}
                />
            </div>
        </div>
      <Treebeard
          style={ Theme }
          data={this.props.data}
          onToggle={this.onToggle}
      />
      </div>
    );
  }
}
