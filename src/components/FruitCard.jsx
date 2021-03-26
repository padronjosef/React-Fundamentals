import React from 'react'

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
    const hasItems = this.state.quantity > 0 
    const styles = {
      border: '1px solid black',
      marginBottom: '1em',
      borderRadius: '.5em',
      padding: '1em',
      background: hasItems ? 'linear-gradient(45deg, black, #4a02f7)' : 'white',
      color: hasItems > 0 ? 'white' : 'black',
      transition: 'all 400ms ease-out'
    }
    return (
      <div style={ styles }>
        <h2> {this.props.name} </h2>
        <h3> Quantity: {this.state.quantity} </h3>
        <button onClick={this.addOne}> + </button>
        <button onClick={this.reset}> reset </button>
        <button onClick={this.takeOne}> - </button>
        <hr />
        <p> $ {this.props.price} </p>
        <p>
          total: ${this.props.price * this.state.quantity}
        </p>
      </div>
    );
  }
}

export default FruitCard