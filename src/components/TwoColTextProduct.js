import React from 'react'
import TwoColTitle from './TwoColTitle'
import ThreeColProduct from './ThreeColProduct'

function TwoColTextProduct({title,color,product1, product2, product3}) {
  console.log(color)
  return (
    <section className = "two-col-text-product">
        <TwoColTitle 
          title={title} 
          color={color}
        />
        <ThreeColProduct 
          product1={product1} 
          product2={product2} 
          product3={product3}
        />
    </section>
  )
}

export default TwoColTextProduct