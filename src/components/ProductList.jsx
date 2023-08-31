import React from 'react'
import '../css/productlist.css'
import { products } from '../data'
import Product from './Product'

const ProductList = () => {
  return (
    <>
    <div className='productList'>
        {products.map((item)=>{
            return <Product key={item.id} img={item.img} title={item.title} price={item.price}/>
        })}
    </div>
    </>
  )
}

export default ProductList