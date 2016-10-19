import React, {Component, PropTypes} from 'react';
const styles = require('./TreeInput.css');
import Pop from '../pop/Pop';
import TreeView from '../tree-view/TreeView';

export default class TreeInput extends Component {

  static propTypes = {
    onChange: PropTypes.func,
    label: PropTypes.string,
    show: PropTypes.bool,
    children: PropTypes.element,
    data: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
    ])
  };
  state = {
    'show': false,
    'value': ''
  };

  showPop = (event) => {
    event.preventDefault();
    this.setState({'show': true});
  }

  onToggle() {

  }

  handelChange = (value) => {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
    // 删除数据，value为null
    if (value) {
      this.setState({'value': value.name});
    }else {
      this.setState({'value': null});
    }
  }

  render() {
    return (
        <div className="form-group">
          <label className={'col-sm-5 control-label ' + styles.labelFix}>{this.props.label}</label>
          <div className="col-sm-7">
            <div className="input-group" style={{zIndex: 0}}>
              <input type="text" value={this.state.value} className={'form-control ' + styles.standHeight} />
              <span className={'input-group-btn ' + styles.standHeight} >
                <button className={'btn btn-default ' + styles.standHeight} onClick={this.showPop.bind(this)} >选择</button>
              </span>
            </div>
          </div>

          <Pop show={ this.state.show } label={this.props.label} onChange={this.handelChange} close={()=>this.setState({show: false})}>
            <TreeView data={this.props.data} onToggle={this.onToggle}/>
          </Pop>
        </div>
    );
  }
}
