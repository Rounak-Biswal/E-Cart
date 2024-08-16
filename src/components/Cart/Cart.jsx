import React, { useState } from 'react'
import style from "./Cart.module.css"

const Cart = ({ data, removeFromCart, count }) => {
  let deleteItem = (id) => {
    removeFromCart(id)
  }

  return (
    <div className={style.cartContainer}>
      <div className={style.header}>
        <h1><i class="fa-solid fa-cart-shopping"></i></h1>
        <div className={style.cartCount}><p>{count}</p></div>
      </div>
      <div className={style.itemsList}>
        {
          data.map((item) => (
            <div className={style.itemBlock} key={item.id}>
              <img src={item.img} className={style.itemImg} alt={item.title} />
              <div className={style.itemDetails}>
                <h3 className={style.itemTitle}>{item.title}</h3>
                <p className={style.itemPrice}>${item.price}</p>
                <button onClick={() => deleteItem(item.id)} className={style.removeBtn}>Remove</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart
