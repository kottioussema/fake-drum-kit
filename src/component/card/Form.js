import React, { Component } from "react";
import { connect } from "react-redux";

class Form extends Component {
  render() {
    return (
      
      <form className="containers">
        <input
          type="text"
          onBlur={this.props.updateCard}
          placeholder="company"
        />
        <input
          type="number"
          onBlur={this.props.updateCardNumber}
          placeholder="card number"
          max= {(Math.pow(10,15)-1).toString()}
        />
        <input
          type="month"
          onBlur={this.props.updateCardDate}
          placeholder="date"
        />
        <input
          type="text"
          onBlur={this.props.updateCardName}
          placeholder="name"
          maxlength={20}
        />
        </form>
      
    );
  }
}

const mapStateToProps = state => ({
  company: state.Card.company,
  cardNumber: state.Card.cardNumber,
  date: state.Card.date,
  name: state.Card.name
});

const mapDispatchToProps = dispatch => {
  return {
    updateCard: event => {
      const action = { type: "UPDATECARDCOMPANY", text: event.target.value };
      dispatch(action);
    },
    updateCardNumber: event => {
      const action = { type: "UPDATECARDNUMBER", text: event.target.value };
      dispatch(action);
    },
    updateCardDate: event => {
      const action = { type: "UPDATECARDDATE", text: event.target.value };
      dispatch(action);
    },
    updateCardName: event => {
      const action = { type: "UPDATECARDNAME", text: event.target.value };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
