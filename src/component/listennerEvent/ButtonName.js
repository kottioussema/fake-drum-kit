import React, { Component } from "react";


class Name extends Component {
  render() {
    return (
      <div>
        <button className="button" onClick={this.props.onClick} >
          <span className="buttonText">
            {this.props.name}
          </span>
        </button>
      </div>
    )
  }
}

export default Name;