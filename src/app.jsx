import React from 'react'
import FruitCard from './components/FruitCard/'
import Counter from './components/Counter/'

const App = () => (
  <div>
    <Counter />
    <FruitCard name={"Watermelon"} price={2.0} />
    <FruitCard name={"Pineapple"} price={5.0} />
    <FruitCard name={"Apple"} price={11.1} />
    <FruitCard name={"Strawberry"} price={3.5} />
  </div>
);

export default App