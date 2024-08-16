import React, { useState } from 'react'
import style from './App.module.css'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import data from "./data/data.json"

const App = () => {
  let [cartItems, setCartItems] = useState([{
    "id": 1,
    "title": "Harry Potter",
    "desc": "A young wizard's journey through magical adventures at Hogwarts School of Witchcraft and Wizardry.",
    "img": "/src/data/book/1.jpg",
    "price": 29.99
  }])

  let updateCart = (id) => {
    if (!cartItems.find((items) => items.id === id)) {
      let newItem = data.find((item) => item.id === id)
      setCartItems([...cartItems, newItem])
    }
  }

  let removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  return (
    <div className={style.mainContainer}>
      <Products data={data} updateCart={updateCart} />
      <Cart data={cartItems} removeFromCart={removeFromCart} count={cartItems.length} />
    </div>
  )
}

export default App
