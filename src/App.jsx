import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {FruitsData} from './StoreItems'

function App() {
  // const [count, setCount] = useState(0)
  const [SelectedItem,setSelectedItems] = useState([]);
  const [Fruit,setFruits] = useState(FruitsData);

  const increaseQuantity = (id) => {
    setFruits(Fruit.map(fruit =>
      fruit.id === id ? { ...fruit, quantity: fruit.quantity + 1 } : fruit
    ));
};

const decreaseQuantity = (id) =>{
    setFruits(Fruit.map(fruit =>
        fruit.id === id && fruit.quantity > 0 ?{...fruit,quantity :fruit.quantity - 1} : fruit
    ))
}


  return (
    <>
    <div>
      <h3>Shoping Cart</h3>

      
          
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Cost</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {Fruit.map((fruit) => (
            <tr key={fruit.id}>
              <td> {fruit.id} </td>
              <td> {fruit.name} </td>
              <td> {fruit.price} </td>
              <td> <button onClick={() => decreaseQuantity(fruit.id)}>-</button> {fruit.quantity} <button onClick={() => increaseQuantity(fruit.id)}>+</button> </td>
              <td> <input type="checkbox" name="fruit"/> </td>
            </tr>
            ))}
          </tbody>
        </table>
{/* 
      {Fruits.map((fruit) =>{
        <input type="checkbox" name="" id="" />
      })} */}
    </div>
      
      
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  ) }


export default App
