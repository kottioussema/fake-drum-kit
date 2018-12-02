import React, { Component } from "react";

class ProgramItem extends Component {
  render() {
    return (
      <div
        className="containerPrograms"
        style={{ backgroundColor: this.props.backgroundColor }}
      >
        <div className="containers">
          <span className="programTitle " style={{ color: this.props.color }}>
            {this.props.programTitle}
          </span>
          <div className="border" style={{color: this.props.borderColor}} />

          <p className="programInfos" style={{ color: this.props.color }}>
            {this.props.programInfos}
          </p>
        </div>
        <button className="button">
          <span
            className="buttonText"
            style={{ color: this.props.backgroundColor }}
          >
            {this.props.buttonName}
          </span>
        </button>
      </div>
    );
  }
}
export default ProgramItem;
