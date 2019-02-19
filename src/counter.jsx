import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <>
        <p>{this.props.count}</p>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </>
    );
  }
}
const mapStateToProps = state => {
  return { count: state.count };
};

const increment = () => ({ type: "INCREMENT" })
const decrement = () => ({ type: "DECREMENT" })

const mapDispatchToProps = {
    
  increment,
  decrement
};

export default connect(
   
  mapStateToProps,
  mapDispatchToProps
)(Counter);

//another way 
// const mapDispatchToProps = {
//     increment = () => ({ type: "INCREMENT" }),
//     decrement = () => ({ type: "DECREMENT" })
// }