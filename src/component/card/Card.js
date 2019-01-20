import React, { Component } from "react";
import { connect } from 'react-redux';

class Card extends Component {
  render() {
    console.log("date", this.props.date.substring(2, 7))
    return (
      <div className="cardContainer">
        <span>{this.props.company}<br/></span>
        <span>{this.props.cardNumber}<br/></span>
        <span>{this.props.date.substring(2, 7).replace("-","/")}<br/></span>
        <span>{this.props.name.toUpperCase()}</span>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  company: state.Card.company,
  cardNumber : state.Card.cardNumber,
  date: state.Card.date,
  name: state.Card.name
})


export default connect(mapStateToProps)(Card);
