import React from 'react'
import Button from './Button'
import { ReactComponent as SaleTag }  from '../images/sale-tag.svg'
import { ReactComponent as SaleNum }  from '../images/percent.svg'

function NewsLetter() {
  return (
    <section className='newsletter-outer container-outer'>
        <div className='container-inner'>
            <h3 className='newsletter-title'>Newsletter</h3>
            <div  className='flex-box'>
                <div className='newsletter-text'>
                    <h4>Sign Up!</h4>
                    <p>Get the latest promotions and special offers delivered directly to your inbox!</p>
                    <label htmlFor="email"></label>
        			<input type="email" 
                            id="email" 
                            placeholder="Your Email" 
                            className="newsletter-input" 
                    />
                    <div className="newsletter-email-svg-container">
    					<img src={require("../images/email.svg").default}       
                            className="newsletter-email-svg" 
                            loading="lazy"/>
    				</div>
                    <Button btnStyle="btn-fill-red" btnText= "Sign Me Up!"/>
                </div>
                <div className='newsletter-card'>
                    <div className="flex-box newsletter-card-inner">
                        <div className="newsletter-card-saleTag">
                            <SaleTag/>
                        </div>
                        <div className="newsletter-card-saleNum">
                            <SaleNum/>
                        </div>
                    </div>
                    <h5>Your first order</h5>
                    <h5>When you sign up</h5>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewsLetter