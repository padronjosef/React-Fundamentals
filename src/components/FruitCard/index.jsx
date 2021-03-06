import React from "react";
import "./style.css";

// const FruidCard = (props) => (
//   <div>
//     <h2> {props.name} </h2>
//     <hr />
//     <p> $ {props.price} </p>
//   </div>
// );

// class FruidCard extends React.Component {
//   constructor() {
//     super();

//     const METHODS = [
//       'addOne',
//       'takeOne',
//       'reset'
//     ]

//     METHODS.forEach((method) => {
//       this[method] = this[method].bind(this)
//     })

//     this.state = {
//       quantity: 0,
//     };
//   }

//   addOne() { this.setState({ quantity: this.state.quantity + 1 }) }
//   takeOne() { this.setState({ quantity: this.state.quantity - 1 }) }
//   reset() { this.setState({ quantity: this.state.quantity = 0 }) }

//   render() {
//     return (
//       <div>
//         <h2> {this.props.name} </h2>
//         <h3> Quantity: {this.state.quantity} </h3>
//         <button onClick={ this.addOne }> + </button>
//         <button onClick={ this.reset }> reset </button>
//         <button onClick={ this.takeOne }> - </button>
//         <p> $ {this.props.price} </p>
//         <hr />
//       </div>
//     );
//   }
// }

class FruitCard extends React.Component {
  state = {
    quantity: 0,
  };

  addOne = () => this.setState({ quantity: this.state.quantity + 1 });
  takeOne = () => this.setState({ quantity: this.state.quantity - 1 });
  reset = () => this.setState({ quantity: 0 });

  render() {
    const hasItems = this.state.quantity > 0;
    const activeClass = hasItems ? " card--active" : "";
    const classes = "card" + activeClass;

    const totalPrice = this.props.price * this.state.quantity;

    return (
      <div className={classes}>
        <h2> {this.props.name} </h2>
        <h3> Quantity: {this.state.quantity} </h3>
        <button onClick={this.addOne}> + </button>
        <button onClick={this.reset}> reset </button>
        <button onClick={this.takeOne}> - </button>
        <hr />
        <p> $ {this.props.price} </p>
        <p>total: ${totalPrice}</p>
      </div>
    );
  }
}

export default FruitCard;
