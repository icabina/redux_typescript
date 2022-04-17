import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import {useAppDispatch, useAppSelector} from './hooks'

import {incremented, amountAdded} from './store/counter_slice'




function App() {
  // const [count, setCount] = useState(0)
const count = useAppSelector(state => state.counter.value);
const dispatch = useAppDispatch();

function handleClick(){
  // dispatch(incremented());
  dispatch(amountAdded(5));
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" /* onClick={() => setCount((count) => count + 1)} */ onClick={handleClick}>
            count is: {count}
          </button>
        </p>
       
       
      </header>
    </div>
  )
}

export default App
