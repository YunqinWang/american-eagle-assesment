import React from 'react'
import Button from './Button'
import { ReactComponent as SaleTag }  from '../images/sale-tag.svg'

function NewsLetter() {
  return (
    <section className='newsletter-outer'>
        <div className='newsletter-inner'>
            <div className='newsletter-text'>
                <h3>Newsletter</h3>
                <p>Get the latest promotions and special offers delivered directly to your inbox!</p>
                <label for="email"></label>
    			<input type="email" id="email" placeholder="Your Email" class="newsletter-input" />
                <div class="newsletter-email-svg-container">
					<img src={require("../images/email.svg").default} class="newsletter-email-svg" />
				</div>
                <Button btnStyle="btn-fill-red" btnText= "Sign Me Up!"/>
            </div>
            <div className='newsletter-card'>
                <div className="newsletter-card-saleTag">
                    <SaleTag/>
                </div>
                <h1>10% OFF</h1>
                <h5>Your first order</h5>
                <h5>When you sign up</h5>
            </div>
        </div>
    </section>
  )
}

export default NewsLetter