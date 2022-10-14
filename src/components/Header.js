import React from 'react'
import NavBar from './NavBar'
import Button from './Button';
import { ReactComponent as LogoSvg } from '../images/logo.svg';
import { ReactComponent as ShoppingBagSvg } from '../images/shoppingbag.svg';

function Header() {
	const btnText = "123"
  return (
    <header class="site-header" id="site-header" role="banner">
				<div class="container">
					<nav class="navbar__main">
						<div class="navbar__main-container">
							<div className="navbar__logo-container">
								<LogoSvg width="400px"/>
							</div>
							<div className="navbar__btn-container">
								<Button btnStyle={"btn-frame-red"}  btnText={"Contact"}/>
								<Button btnStyle={"btn-fill-red"} btnText={"Login"}/>
							</div>
							<div class="navbar__cart-link-container">
								<a href="#" className="navbar__cart-link">
									<ShoppingBagSvg width="45px" height="45px"/>
									<div class="navbar__cart-num">5</div>
								</a>
							</div>
							
							<div class="navbar__cart-container">
								<div class="navbar__inner-cart-container">
									<div class="navbar__search-link-container">
										<a href="#" class="navbar__search-link navbar__link navbar__mobile-search-link navbar__search-svg">
										</a>
									</div>
								</div>
							</div>
						</div>

						
						<NavBar/>
					</nav>
				</div>
            </header>
  )
}

export default Header