import React, {Component, PropTypes} from 'react';
import { Input, Button } from 'antd';
const InputGroup = Input.Group;

export default class SearchInput extends Component {

  static propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string,
  };
  static defaultProps = {
    'value': '',
  };
  state = {
    'value': this.props.value || '',
  };
  componentWillReceiveProps(props) {
    if (this.props.value !== props.value) {
      this.setState({value: props.value});
    }
  }
  onClick = (event) => {
    const {onClick} = this.props;
    if (onClick) {
      onClick(event);
    }
  }
  setValue = (value = '') => {
    this.setState({'value': value});
  }
  render() {
    require('./SearchInput.css');
    return (
      <div className="ant-search-input-wrapper" style={{'width': '100%'}}>
        <InputGroup className="ant-search-input">
          <Input value={this.state.value} style={{'color': '#666', 'zIndex': 0, 'top': 0}} disabled />
          <div className="ant-input-group-wrap">
            <Button icon="search" style={{'paddingTop': '4px', 'paddingBottom': '4px', 'borderTopWidth': '1px', 'borderBottomWidth': '1px'}} className={'ant-search-btn'} onClick={this.onClick} />
          </div>
        </InputGroup>
      </div>
    );
  }
}
