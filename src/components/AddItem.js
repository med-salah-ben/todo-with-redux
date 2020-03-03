import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/actionTask";

class AddItem extends Component {
  state = {
    myinput: ""
  };
  handlChange = e => {
    this.setState({
      myinput: e.target.value
    });
  };

  add = e => {
    e.preventDefault();
    this.props.addTask({
      text: this.state.myinput,
      key: Date.now(),
      checked: false,
      edit: false
    });
    this.setState({
      myinput: ""
    });
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="input-group mb-3 w-25">
          <input
            type="text"
            className="form-control"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={this.handlChange}
            value={this.state.myinput}
          />
          <div className="input-group-append">
            <button
              className="btn btn-info"
              type="button"
              id="button-addon2"
              onClick={this.add}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addTask
};

// const mapDispatchToProps = dispatch =>{
//     return{x:(payload)=>dispatch(addTask(payload))}
// }

export default connect(null, mapDispatchToProps)(AddItem);
