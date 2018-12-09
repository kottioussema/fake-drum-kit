import React, { Component } from "react";
import "../App.css";

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
        <span style={styles.lastName}>
          {` ${this.props.lastName}`}
          <br />
        </span>
        <span style={styles.infos}>
          {this.props.grade}
          <br />
        </span>
        <span style={styles.infos}>{this.props.post}</span>
      </div>
    );
  }
}

export default TeamItem;
