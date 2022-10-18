import React from 'react'
import Button from './Button'
import { ReactComponent as SaleTag }  from '../images/sale-tag.svg'

function BannerAd() {
  return (
    <div class="hero-inner-text-container">
        <div className="hero-inner-product-sale">
            <div>
                <h5 class="hero-inner-product-mini-title">On Sale</h5>
                <h5 class="hero-inner-product-description">Save up to</h5>
            </div>
            <div className="hero-inner-product-sale">
              <div className="hero-inner-product-saleTag"><SaleTag/></div>
              <h1>50%</h1>
            </div>
            <div></div>
        </div> 

        <h2 class="hero-inner-product-title">Infant Fall Outfits</h2>
        <Button btnStyle={"btn-fill-red"}  btnText={"Shop Sale"}/>
    </div>
  )
}

export default BannerAd