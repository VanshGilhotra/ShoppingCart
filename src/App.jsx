import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FruitsData } from './StoreItems'

function App() {
  // const [count, setCount] = useState(0)

  const [Fruit, setFruits] = useState(FruitsData);

  const increaseQuantity = (id) => {
    setFruits(Fruit.map(fruit =>
      fruit.id === id ? { ...fruit, quantity: fruit.quantity + 1 } : fruit
    ));

  };

  const decreaseQuantity = (id) => {
    setFruits(Fruit.map(fruit =>
      fruit.id === id && fruit.quantity > 0 ? { ...fruit, quantity: fruit.quantity - 1 } : fruit
    ))
  }

  const [cart, setcartItems] = useState([]);

  const handleCartAddOn = (id) => {

    if (cart.includes(Fruit[id - 1].id)) {
      setcartItems(cart.filter(item => item !== id))

    }
    else {
      setcartItems([...cart, Fruit[id - 1].id]);
      console.log(cart)

    }
  }

  const [sum, setBill] = useState(0);
  const billCalc = () => {
    let total = 0;
    cart.forEach(item => {
      total += Fruit[item - 1].price * Fruit[item - 1].quantity;
    });
    setBill(total);

    console.log(sum)
  };
  

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
                <td> <input type="checkbox" name="fruit" onChange={() => handleCartAddOn(fruit.id)} /> </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* 
      {Fruits.map((fruit) =>{
        <input type="checkbox" name="" id="" />
      })} */}
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, i) => (
              <tr key={i}>
                <td>{Fruit[item - 1].name}</td>
                <td>{Fruit[item - 1].price}</td>
                <td>{Fruit[item - 1].quantity}</td>
                <td>
                  {(Fruit[item - 1].price) * (Fruit[item - 1].quantity)}
                </td>

              </tr>

            )
            )}
            <tr>
              <td><button onClick={() => billCalc()}>Bill</button></td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}


export default App
