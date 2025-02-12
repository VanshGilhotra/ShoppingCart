import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FruitsData } from './StoreItems'

function App() {
    //copying data from a list of items Available in Mall to display and make changes
  const [Fruit, setFruits] = useState(FruitsData);

  //Increasing the Quantity of Particular Item
  const increaseQuantity = (id) => {
    setFruits(Fruit.map(fruit =>
      fruit.id === id ? { ...fruit, quantity: fruit.quantity + 1 } : fruit
    ))
  };

  //decreasing quantity
  const decreaseQuantity = (id) => {
    setFruits(Fruit.map(fruit =>
      fruit.id === id && fruit.quantity > 0 ? { ...fruit, quantity: fruit.quantity - 1 } : fruit
    ))
  };

  //getting items to add in cart by customer 
  const [cart, setcartItems] = useState([]);

  const handleCartAddOn = (id) => {

    //If cart has the item and user deselect it then it will removed
    if (cart.includes(Fruit[id - 1].id)) {
      setcartItems(cart.filter(item => item !== id));
    }
    //adding items in cart as per user selection
    else {
      setcartItems([...cart, Fruit[id - 1].id]);
      // console.log(cart); this was done to get some error occured in cart
    }
  };

  //getting total bill of customer
  const [sum, setBill] = useState(0);
 //this method call automatically whenever the changes is made in cart or whole stock
  useEffect(() => {
      let total = 0;
      Fruit.map(item => {
    if(cart.includes(item.id)){
      total += item.price *item.quantity;
    }
    });
    setBill(total);
  },[cart , Fruit]);
 

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
              <td>Total Bill </td>
              <td colSpan={3}><strong>{sum}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}


export default App
