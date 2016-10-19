import React, {Component, PropTypes} from 'react';
require('./TreeView.scss');

class TreeNode extends Component {
  displayName: 'TreeNode';

  static propTypes = {
    node: PropTypes.object,
    level: PropTypes.number,
    options: PropTypes.object,
    levels: PropTypes.number,
    visible: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = this.initialState();
  }

  initialState = () => {
    const node = this.props.node;
    const hasExpanded = node.state && node.state.hasOwnProperty('expanded');
    const hasExpanded_ = hasExpanded ? node.state.expanded : (this.props.level < this.props.options.levels);
    const expanded = hasExpanded_ ? true : false;
    const selected = (node.state && node.state.hasOwnProperty('selected')) ? node.state.selected : false;
    return {
      expanded,
      selected
    };
  };

  toggleExpanded = (id, event) => {
    this.setState({ expanded: !this.state.expanded });
    event.stopPropagation();
  };

  toggleSelected = (id, event) => {
    this.setState({ selected: !this.state.selected });
    event.stopPropagation();
  };
  render() {
    const node = this.props.node;
    const options = this.props.options;

    let style;
    if (!this.props.visible) {
      style = {
        display: 'none'
      };
    }else {
      if (options.highlightSelected && this.state.selected) {
        style = {
          color: options.selectedColor,
          backgroundColor: options.selectedBackColor
        };
      }else {
        style = {
          color: node.color || options.color,
          backgroundColor: node.backColor || options.backColor
        };
      }

      if (!options.showBorder) {
        style.border = 'none';
      }else if (options.borderColor) {
        style.border = '1px solid ' + options.borderColor;
      }
    }

    const indents = [];
    for (let index = 0; index < this.props.level - 1; index++) {
      indents.push(React.createElement('span', {className: 'indent', key: index}));
    }

    let expandCollapseIcon;
    if (node.nodes) {
      if (!this.state.expanded) {
        expandCollapseIcon = (
          React.createElement('span', {className: options.expandIcon,
                onClick: this.toggleExpanded.bind(this, node.nodeId), children: '+'}
          )
        );
      }else {
        expandCollapseIcon = (
          React.createElement('span', {className: options.collapseIcon,
                onClick: this.toggleExpanded.bind(this, node.nodeId), children: '-'}
          )
        );
      }
    }else {
      expandCollapseIcon = (
        React.createElement('span', {className: options.emptyIcon})
      );
    }

    const nodeIcon = (
      React.createElement('span', {className: 'icon'},
        React.createElement('i', {className: node.icon || options.nodeIcon})
      )
    );

    let nodeText;
    if (options.enableLinks) {
      nodeText = (
        React.createElement('a', {href: node.href /* style='color:inherit;' */},
          node.text
        )
      );
    }else {
      nodeText = (
        React.createElement('span', null, node.text)
      );
    }

    let badges;
    if (options.showTags && node.tags) {
      badges = node.tags.map((tag) => {
        return (
          React.createElement('span', {className: 'badge'}, tag)
        );
      });
    }

    const children = [];
    if (node.nodes) {
      const _this = this;
      node.nodes.forEach((node_, index) => {
        children.push(React.createElement(TreeNode, {node: node_,
                                level: _this.props.level + 1,
                                key: index,
                                visible: _this.state.expanded && _this.props.visible,
                                options: options}));
      });
    }

    return (
      React.createElement('span', {className: 'list-group-item',
          style: style,
          onClick: this.toggleSelected.bind(this, node.nodeId),
          key: node.nodeId},
        indents,
        expandCollapseIcon,
        nodeIcon,
        nodeText,
        badges,
        children
      )
    );
  }
}

export default class TreeView extends Component {
  displayName: 'TreeView';

  static propTypes = {
    levels: PropTypes.number,

    expandIcon: PropTypes.string,
    collapseIcon: PropTypes.string,
    emptyIcon: PropTypes.string,
    nodeIcon: PropTypes.string,

    color: PropTypes.string,
    backColor: PropTypes.string,
    borderColor: PropTypes.string,
    onhoverColor: PropTypes.string,
    selectedColor: PropTypes.string,
    selectedBackColor: PropTypes.string,

    enableLinks: PropTypes.bool,
    highlightSelected: PropTypes.bool,
    showBorder: PropTypes.bool,
    showTags: PropTypes.bool,

    nodes: PropTypes.arrayOf(PropTypes.number),

    data: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = {
      levels: 2,

      expandIcon: 'glyphicon glyphicon-plus',
      collapseIcon: 'glyphicon glyphicon-minus',
      emptyIcon: 'glyphicon',
      nodeIcon: 'glyphicon glyphicon-stop',

      color: undefined,
      backColor: undefined,
      borderColor: undefined,
      onhoverColor: '#F5F5F5', // TODO Not implemented yet, investigate radium.js 'A toolchain for React component styling'
      selectedColor: '#FFFFFF',
      selectedBackColor: '#428bca',

      enableLinks: false,
      highlightSelected: true,
      showBorder: true,
      showTags: false,

      nodes: []
    };
  }

  setNodeId = (node) => {
    if (!node.nodes) return;

    const _this = this;
    node.nodes.forEach(function checkStates(node_) {
      node_.nodeId = _this.state.nodes.length;
      _this.state.nodes.push(node_);
      _this.setNodeId(node_);
    });
  };

  render() {
    const data = this.props.data;
    this.setNodeId({ nodes: data });

    const children = [];
    if (data) {
      const _this = this;
      data.forEach((node, index) => {
        children.push(React.createElement(TreeNode, {node: node,
                                level: 1,
                                visible: true,
                                key: index,
                                options: _this.props}));
      });
    }

    return (
      React.createElement('div', {id: 'treeview', className: 'treeview'},
        React.createElement('ul', {className: 'list-group'},
          children
        )
      )
    );
  }
}
