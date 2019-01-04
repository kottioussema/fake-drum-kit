import React, { Component } from "react";


class Name extends Component {

  handleClick = () => {
    this.props.onClick(this.props.name)
  }
  render() {
    return (
      <div>
        <button className="button" onClick={this.handleClick} >
          <span className="buttonText">
            {this.props.name}
          </span>
        </button>
      </div>
    )
  }
}

export default Name;