import React, { useState } from 'react'
import style from "./Products.module.css"

const Products = ({ data, updateCart }) => {
  let addToCart = (id) => {
    updateCart(id)
  }

  return (
    <div className={style.productsContainer}>
      <div className={style.header}>
        <span><strong>E-Shelf</strong></span>
        <img src="https://toppng.com/uploads/preview/books-logo-1489798288-clipart-of-books-11563169897rkzwr0asfy.png" alt="" width="40px"/>
      </div>
      <div className={style.productsCatalog}>
        {
          data.map((item) => {
            return <div className={style.card} key={item.id}>
              <img src={item.img} width="190px" height="280px" />
              <h3>{item.title}</h3>
              <p className={style.price}>$ <strong>{item.price}</strong></p>
              <button onClick={() => addToCart(item.id)} className={style.addBtn}>Add to cart</button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Products
