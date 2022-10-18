import React from 'react'
import ProductItem from './ProductItem'

function ProductRow({products}) {
  let productRow = products.map((item,i)=>{
    return <ProductItem key={i} product={item.product} />
  })
  return (
    <div className= "three-col-product flex-box">
        {productRow}
    </div>
  )
}

export default ProductRow