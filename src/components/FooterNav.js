import React from 'react'


function FooterNav() {
    //footer nav list
    const footerList =[
		{FooterItem:{
			name: "Shop",
            subLink:[
                {name: "baby apparel",link:"#",},
                {name: "baby gifts",link:"#",},
                {name: "furniture",link:"#",},
                {name: "bedding",link:"#",},
                {name: "lighting",link:"#",},
                {name: "sale",link:"#",},
            ]
		}},
		{FooterItem:{
			name: "Service",
            subLink:[
                {name: "contact us",link:"#",},
                {name: "order status",link:"#",},
                {name: "shipping policy",link:"#",},
                {name: "return policy",link:"#",},
                {name: "my account",link:"#",},
                {name: "faq",link:"#",},
            ]
		}},
		{FooterItem:{
			name: "About",
            subLink:[
                {name: "our story",link:"#",},
                {name: "baby registry",link:"#",},
                {name: "store location",link:"#",},
                {name: "reviews",link:"#",},
                {name: "news",link:"#",},
                {name: "subscribe",link:"#",},
            ]
		}},
	]
    let footerItems = footerList.map(item=>{
        let innerLink = item.FooterItem.subLink.map(subItem=>{
            return <li key={subItem.name} className="footer-list-col-item">
                        <a href={subItem.link}>{subItem.name}</a>
                    </li>
        })
		return(
			<li className="footer-list-col" key = {item.FooterItem.name}>
                <ul className="footer-list-col-title">{item.FooterItem.name}</ul>
				{innerLink}
			</li>
		)
	})
    
    //social links
    const links=[
        {social:{name:"facebook" ,link:"#",svg:require("../images/facebook.svg").default}},
        {social:{name:"instagram" ,link:"#",svg:require("../images/instagram.svg").default}},
        {social:{name:"tiktok" ,link:"#",svg:require("../images/tiktok.svg").default}},
        {social:{name:"twitter" ,link:"#",svg:require("../images/twitter.svg").default}},
    ]
    let socialLink = links.map(item=>{
        console.log(item.social.name);
        return(
            <a key={item.social.name}>
                <img src={item.social.svg} alt={item.social.name}/>
            </a>
        )
    })

    return (
        <div className = "footer-nav">
            <ul className = "footer-nav-list">
                {footerItems}
            </ul>
            <div className = "footer-nav-contact">
                <h5 className="footer-list-col-title">Contact</h5>
                <p>4472 Lawn Avenue <br />Western Springs, IL 60558</p>
                <p>1-708-245-1212</p>
                <a href="#">Store Hours</a>
                <div className="footer-social-links">
                    {socialLink}
                </div>
            </div>
        </div>
    )
}

export default FooterNav