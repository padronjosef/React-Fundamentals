import React from 'react'
import FruitCard from './components/FruitCard'

const App = () => (
  <div>
    <FruitCard name={"Watermelon"} price={2.0} />
    <FruitCard name={"Pineapple"} price={5.0} />
    <FruitCard name={"Apple"} price={11.1} />
    <FruitCard name={"Strawberry"} price={3.5} />
  </div>
);

export default App