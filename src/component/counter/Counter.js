import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./../../redux/actions/CardActions";

class Counter extends Component {
  render() {
    return (
      <div className="rowList">
        <button className="button" onClick={this.props.decrement}>
          subtract
        </button>
        <span >{this.props.number}</span>
        <button className="button" onClick={this.props.increment}>
          add
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  number: state.Counter.nb
})

const mapDispatchToProps = {
  increment,
  decrement
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
