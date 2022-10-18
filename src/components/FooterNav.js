import React from 'react'
import FooterNavItem from './FooterNavItem';


function FooterNav() {

    //footer nav list
    const footerList =[
		{FooterItem:{
			name: "Shop",
            subLink:[
                {name: "baby apparel",link:"#"},
                {name: "baby gifts",link:"#"},
                {name: "furniture",link:"#"},
                {name: "bedding",link:"#"},
                {name: "lighting",link:"#"},
                {name: "sale",link:"#"},
            ]
		}},
		{FooterItem:{
			name: "Service",
            subLink:[
                {name: "contact us",link:"#"},
                {name: "order status",link:"#"},
                {name: "shipping policy",link:"#"},
                {name: "return policy",link:"#"},
                {name: "my account",link:"#"},
                {name: "faq",link:"#"},
            ]
		}},
		{FooterItem:{
			name: "About",
            subLink:[
                {name: "our story",link:"#"},
                {name: "baby registry",link:"#"},
                {name: "store location",link:"#"},
                {name: "reviews",link:"#"},
                {name: "news",link:"#"},
                {name: "subscribe",link:"#"},
            ]
		}},
        {FooterItem:{
			name: "Contact",
            address1: "4472 Lawn Avenue",
            address2: "Western Springs, IL 60558",
            phone: "1-708-245-1212",
            hours: "Store hours",
            link:"#",
		}},
	]
    
    
    let footerItems = footerList.map(item=>{
		return(
			<li className="footer-list-col" key = {item.FooterItem.name}>
                <FooterNavItem footerCol={item.FooterItem} />
			</li>
		)
	})

    return (
        <div className = "flex-box">
            <ul className = "flex-box footer-nav-list">
                {footerItems}
            </ul>
        </div>
    )
}

export default FooterNav