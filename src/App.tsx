import React, {useState} from 'react';
import './App.css';
import Items from "./items";

function App() {
  const randomValue = Math.floor(Math.random() * 35);

  const [mainValue] = useState(randomValue)

  const createItems = () => {
    const array = []
    for (let i = 0; i < 36; i++) {
      const arrayInner = {hasItem: false, clicked: false};
      array.push(arrayInner)
    }
    array[randomValue].hasItem = true
    return array
  }
  let className = 'bacgroundB'

  const [counter, setCounter] = useState(0)

  const [items, setItems] = useState(createItems())

  const changeState = (index: number) => {
    let value = counter
    value++
    setCounter(value)
    const copyItems = [...items]
    copyItems[index].clicked = true
    className = 'bacgroundW'
    setItems(copyItems)
    if (index === mainValue){
      alert('U are win')
    }
  }

  const OText = (index: number) => {
    if (index === mainValue) {
      return 'O'
    } else {
      return ''
    }
  }

  let createItem = items.map((item, index) => (
    <Items key={index} state={() => changeState(index)} classNames={className} O={OText(index)}/>
  ))

  return (
    <div className="App">
      <p>trise: {counter}</p>
      <div className='itemsList'>
        {createItem}
      </div>
    </div>
  );
}

export default App;
