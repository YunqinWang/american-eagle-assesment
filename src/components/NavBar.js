import React from 'react'

function NavBar() {
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
			<li class="navbar__menu-list-item" key = {item.NavItem.name}>
				<a href={item.NavItem.link}>{item.NavItem.name}</a>
				<img src={require("../images/navarrow.svg").default} class="navbar__menu-list-item-svg" />
			</li>
		)
	})
  	return (
		<div class="navbar__menu">
			<ul class="navbar__menu-list">
				
				<li class="navbar__menu-list-item navbar__mobile-close-item">
					<button class="navbar__mobile-close-btn">
						<img src={require("../images/close.svg").default} />
					</button>
				</li>
				{navItems}
				
				<li class="navbar__menu-list-item">
					<div class="navbar__mobile-newsletter-card">
						<div class="navbar__mobile-newsletter-inner-container">
							<div class="navbar__mobile-newsletter-signup">
								<h2 class="navbar__mobile-newsletter-signup-title">
									Newsletter
								</h2>
								<h3 class="navbar__mobile-newsletter-signup-subtitle">
									Sign-Up
								</h3>
								<div class="navbar__mobile-newsletter-input-container">
									<label for="mobile__email" class="navbar__mobile-newsletter-input-label"></label>
									<input type="email" id="mobile__email" placeholder="Your Email" class="navbar__mobile-newsletter-input" />
									<div class="navbar__mobile-newsletter-email-svg-container">
											<img src="assets/images/email.svg" class="navbar__mobile-newsletter-email-svg" />
									</div>
								</div>
								<div class="navbar__mobile-newsletter-button-container">
									<button class="navbar__mobile-newsletter-button">
										Sign Me Up!
									</button>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
			<div class="navbar__search">
				<input class="navbar__input" type="text" name="navbar__input" id="navbar__input" placeholder="Search..." />
				<button>Search</button>
			</div>
		</div>
  )
}

export default NavBar