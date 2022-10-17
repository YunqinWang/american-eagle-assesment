import React from 'react'
import TwoColTitle from './TwoColTitle'
import ProductRow from './ProductRow'

function TwoColTextProduct({title,color,products}) {
  return (
    <section className = "two-col-text-product">
        <TwoColTitle title={title} color={color}/>
        <ProductRow products = {products}/>
    </section>
  )
}

export default TwoColTextProduct