import React from 'react'
import Button from './Button'

function BannerAd() {
  return (
    <div class="hero__inner-text-container">
        <div className="hero__inner-product-sale">
            <div>
                <h5 class="hero__inner-product-mini-title">On Sale</h5>
                <h5 class="hero__inner-product-description">Save up to</h5>
            </div>
            <div><h1 className="hero__inner-product-saleNumber">50%</h1></div>
        </div>

        <h2 class="hero__inner-product-title">Infant Fall Outfits</h2>
        <Button btnStyle={"btn-fill-red"}  btnText={"Shop Sale"}/>
    </div>
  )
}

export default BannerAd