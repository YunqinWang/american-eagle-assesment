import React from 'react'

function ProductItem({product}) {
    console.log(product)
  return (
    <div className = "product-item">
        <div className = "product-item-inner">
            <div className = "product-item-inner-image">
                <img src={product.img}/>
            </div>
            <div className = "product-item-text">
                <h5 className = "product-item-text-name">{product.name}</h5>
                <h5 className = "product-item-text-price">{product.price}</h5>
            </div>
        </div>
    </div>
  )
}

export default ProductItem