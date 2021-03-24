import React from 'react'
import ReactDOM from 'react-dom'

const FruidCard = (props) => (
  <div>
    <h2> {props.name} </h2>
    <hr />
    <p> $ {props.price} </p>
  </div>
)

const App = () => (
  <div>
    <FruidCard name={'waternmelon'} price={2.00}/>
    <FruidCard name={'pinaple'} price={5.00}/>
    <FruidCard name={'apple'} price={11.10}/>
    <FruidCard name={'perl'} price={2.30}/>
    <FruidCard name={'tomato'} price={3.50}/>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))