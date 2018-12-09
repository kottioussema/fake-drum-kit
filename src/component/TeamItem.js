import React, { Component } from "react";
import "../App.css";
import { VirtualTimeScheduler } from "rxjs";

class TeamItem extends Component {
  render() {
    const styles = {
      lastName: {
        fontSize: 14,
        fontWeight: "bold"
      },
      infos: {
        fontSize: 6
      }
    };

    return (
      <div className={this.props.container}>
        <img
          className={this.props.styleImage}
          src={this.props.source}
          alt="profile"
        />
        <br />
        <span className={this.props.className}>{this.props.firstName}</span>
        <span classNAme="lastName">
          {` ${this.props.lastName}`}
          <br />
        </span>
        <span clasName="infos">
          {this.props.grade}
          <br />
        </span>
        <span className="infos">{this.props.post}<br/></span>
        <span className= "borderGender" style={{borderColor : this.props.gender==="male"? "blue" : "yellow"}}>{this.props.gender}</span>
      </div>
    );
  }
}

export default TeamItem;
