import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList'
import { getProducts } from '../components/redux/actions/action'
import {useDispatch,useSelector} from 'react-redux'
import '../css/shop.css'

const Shop = () => {

  const {products}=useSelector(state=>state.getproductsdata);
  console.log(products);

  const dispatch=useDispatch();
useEffect(()=>{
  dispatch(getProducts());
},[dispatch]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const item=products;

    const filteredProducts = selectedCategory === 'All'
  ? item
  : item.filter(product => product.category === selectedCategory);

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div>
      <div className='shopHeader'>
        <h1>Product List</h1>
        <p>Home {">>"}Shop</p>
      </div>
      <div>
        <div className='filterList'>
          <ul>
            <li onClick={() => handleFilterClick('All')}>All</li>
            <li onClick={() => handleFilterClick('Dairy Product')}>Dairy Product</li>
            <li onClick={() => handleFilterClick('Eggs')}>Eggs</li>
            <li onClick={() => handleFilterClick('Fish')}>Fish</li>
            <li onClick={() => handleFilterClick('Mutton')}>Mutton</li>
            <li onClick={() => handleFilterClick('Chicken')}>Chicken</li>
            <li onClick={() => handleFilterClick('Snack')}>Snacks</li>
          </ul>
        </div>
      </div>
      <ProductList products={filteredProducts} />
    </div>
  )
}

export default Shop