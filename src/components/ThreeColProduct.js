import React from 'react'
import ProductItem from './ProductItem'

function ThreeColProduct({product1, product2, product3}) {
  console.log(product1.img)
  return (
    <div className= "three-col-product">
        <ProductItem product={product1}/>
        <ProductItem product={product2}/>
        <ProductItem product={product3}/>
    </div>
  )
}

export default ThreeColProduct