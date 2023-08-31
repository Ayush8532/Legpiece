import React from 'react'
import ProductList from '../components/ProductList'
import '../css/shop.css'

const Shop = () => {
  return (
    <div>
      <div className='shopHeader'>
        <h1>Product List</h1>
        <p>Home {">>"}Shop</p>
      </div>
      <div>
        <div className='filterList'>
          <ul>
            <li>All</li>
            <li>Dairy Product</li>
            <li>Eggs</li>
            <li>Fish</li>
            <li>Mutton</li>
            <li>Chicken</li>
            <li>Snacks</li>
          </ul>
          <p>Filter</p>
        </div>
      </div>
      <ProductList/>
    </div>
  )
}

export default Shop