import React,{useState} from 'react'
import NavBar from './NavBar'
import Button from './Button';
import { ReactComponent as LogoSvg } from '../images/logo.svg';
import { ReactComponent as ShoppingBagSvg } from '../images/shoppingbag.svg';

function Header() {
  const [searchItem, setSearchItem] =useState("");
  const [searchResult, setSearchResult] =useState("hide");
  const handleSearch =(item)=>{
	setSearchItem(item);
	if(item !="")
	setSearchResult("show");
  }

  return (
    <header className="site-header" id="site-header" role="banner">
				<div className="container">
					<nav className="navbar-main">
						<div className="navbar-main-container">
							<div className="navbar-logo-container">
								<LogoSvg />
							</div>
							<div className="navbar-btn-container">
								<Button btnStyle={"btn-frame-blue"}  btnText={"Contact"} btnSize="small"/>
								<Button btnStyle={"btn-fill-blue"} btnText={"Login"} btnSize="small"/>
							</div>
							<div className="navbar-cart-link-container">
								<a href="#" className="navbar-cart-link">
									<ShoppingBagSvg width="45px" height="45px"/>
									<div className="navbar-cart-num">5</div>
								</a>
							</div>
						</div>

						<NavBar handleSearch = {handleSearch}/>
						<div className ={`search-result ${searchResult}`}>
							<p>Search Result: <b>{searchItem}</b></p>
						</div>
					</nav>
				</div>
            </header>
  )
}

export default Header