import React from 'react'
import '../css/product.css'

const Product = ({img,title,price}) => {
  return (
    <>
    <div className='p'>
        <img src={img} alt="" />
        <div>
            <p>{title}</p>
            <p>{price}</p>
        </div>
        <div>
            <button>Add to cart</button>
        </div>
    </div>
        
    </>
  )
}

export default Product