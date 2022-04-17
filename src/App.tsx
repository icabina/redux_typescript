import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import {useAppDispatch, useAppSelector} from './hooks'
import {useFecthBreedsQuery} from './store/api'
import {incremented, amountAdded} from './store/counter_slice'




function App() {
  // const [count, setCount] = useState(0)
  const [numDogs, setNumDogs] = useState(10);

const count = useAppSelector(state => state.counter.value);
const dispatch = useAppDispatch();

const {data = [], isFetching} = useFecthBreedsQuery(numDogs); //pass limit parameter




function handleClick(){
  // dispatch(incremented());
  dispatch(amountAdded(5));
}

  return (
    <div className="App">

          {/* onClick={() => setCount((count) => count + 1)} */}
          <div> <button type="button" onClick={handleClick}>
            count is: {count}
          </button>
          

<h2>Dogs to fetch:</h2>
<select value={numDogs} onChange={(e) => setNumDogs(Number(e.target.value))}>
  <option value={5}>5</option>
  <option value={10}>10</option>
  <option value={15}>15</option>
  <option value={20}>20</option>
  </select>

          <h1>Number of dogs fetched: {data.length}</h1>
          </div>
         
         
       <table>
          <thead>
          <tr>
            <th>name</th>
            <th>Picture</th>
          </tr>
          </thead>
          <tbody>
            {data.map((breed) => <tr key={
              breed.id
            }>
            <td>{
              breed.name
            }</td>
            <td><img width="150" src={breed.image.url} alt={breed.name}/></td>
            </tr>)}
          </tbody>
        </table>  
 
          




       </div>
       
     

  )
}

export default App
