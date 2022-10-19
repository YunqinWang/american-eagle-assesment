import React,{useState,useEffect} from 'react'
import { ReactComponent as Search } from '../images/search.svg';
import { ReactComponent as Close } from '../images/close.svg';
import { ReactComponent as ShoppingBagSvg } from '../images/shoppingbag.svg';
import Button from './Button';

function NavBar({handleSearch}) {
	//nav bar list
	const navList =[
		{NavItem:{
			name: "Baby Apparel",
			link:"#",
		}},
		{NavItem:{
			name: "Baby Gifts",
			link:"#",
		}},
		{NavItem:{
			name: "Furniture",
			link:"#",
		}},
		{NavItem:{
			name: "Bedding",
			link:"#",
		}},
		{NavItem:{
			name: "Lighting",
			link:"#",
		}},
		{NavItem:{
			name: "SALE",
			link:"#",
		}},
		{NavItem:{
			name: "About",
			link:"#",
		}},
	]

	let navItems = navList.map(item=>{
		return(
			<li class="navbar-menu-list-item" key = {item.NavItem.name}>
				<a href={item.NavItem.link}>{item.NavItem.name}</a>
				<img src={require("../images/navarrow.svg").default} class="navbar-menu-list-item-svg" />
			</li>
		)
	})

	//search icon change color during searhcing
	const [typein, setTypein] =useState ("");
	const [search,setSearch] = useState (false);
	const [searchColor,setSearchColor] = useState ("#F25050")
	const [loadingSign,setLoadingSign] = useState ("hide-hidden");
	const [expandNav, setExpandNav] =useState ("navbar-menu");

	function searching(){
		setSearch(true); 
		setLoadingSign("show-hidden");
		setSearchColor("#133D6B");
	}

	//mock up waiting for searching results
	useEffect(() => {
		const timeout = setTimeout(() => {
		   setSearch(false);
		   setLoadingSign("hide-hidden");
		   setSearchColor("#F25050");
		   handleSearch(typein);
		 }, 2000);
	 
		return () => clearTimeout(timeout);
	   },[search]);

	
  	return (
		<div className = "navbar-menu-all">
			<div className = "navbar-menu-all-btn-row">
				<button className="navbar-hamburger" onClick={()=>setExpandNav("navbar-menu-show")}>
					<div className="navbar-hamburger-bar"></div>
					<div className="navbar-hamburger-bar"></div>
					<div className="navbar-hamburger-bar"></div>
				</button>
				<div class="navbar-cart-link-container-mobile">
					<a href="#" className="navbar-cart-link">
						<ShoppingBagSvg width="45px" height="45px"/>
						<div class="navbar-cart-num">5</div>
					</a>
				</div>
				<div className="navbar-btn-container-mobile">
					<Button btnStyle={"btn-frame-blue"}  btnText={"Contact"} btnSize="small"/>
					<Button btnStyle={"btn-fill-blue"} btnText={"Login"} btnSize="small"/>
				</div>
			</div>
			<div className={expandNav}>
				<ul class="navbar-menu-list">
					
					<li class="navbar-menu-list-item navbar-mobile-close-item">
						<button class="navbar-mobile-close-btn"
							onClick={()=>setExpandNav("navbar-menu")}>
							<Close stroke="#000" />
						</button>
					</li>
					{navItems}
					<li className="navbar-search">
						<div className="navbar-search-inner" >
							<input class="navbar-input" type="text" name="navbar-input" id="navbar-input" placeholder="Search..." onChange={e=>{
								setTypein(e.target.value);
							}}/>
							<button onClick = {searching} style={{border:`${searchColor} 2px solid`}}> 
								<Search stroke={searchColor} stroke-width="3" width="20" height="20"/> 
							</button>
							<div className={`lds-ring ${loadingSign}`}>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>
					</li>
					
					<li class="navbar-menu-list-item">
						<div class="navbar-mobile-newsletter-card">
							<div class="navbar-mobile-newsletter-container-inner">
								<div class="navbar-mobile-newsletter-signup">
									<h2>Newsletter</h2>
									<h3>Sign-Up</h3>
									<div class="navbar-mobile-newsletter-input-container">
										<label for="mobile__email"
												class="navbar-mobile-newsletter-input-label">
										</label>
										<input type="email" 
												id="mobile__email" 
												placeholder="Your Email" 
												class="navbar-mobile-newsletter-input" 
										/>
										<div class="navbar-mobile-newsletter-email-svg-container">
											<img src={require("../images/email.svg").default} class="navbar-mobile-newsletter-email-svg" />
										</div>
									</div>
									<div class="navbar-mobile-newsletter-button-container">
										<Button btnStyle={"btn-fill-yellow"}  btnText={"Sign Me Up!"}/>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
				
			</div>
		</div>
  )
}

export default NavBar