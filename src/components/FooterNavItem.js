import React, {useState} from 'react'

function FooterNavItem({footerCol}) {
    const [expand, setExpand] =useState(false)
    const btnClass = "footer-mobile-expand ";

    let expandClass = btnClass;
    let collapseClass = btnClass;
    let subLiClass = "footer-list-col-item ";
    let contactSubClass = "footer-nav-contact ";
    let innerLink ;

    if(!expand) {
        expandClass += "show-inline";
        collapseClass += "hide";
        subLiClass += "hide";
        contactSubClass += "hide";
    }
    else {
        expandClass += "hide"
        collapseClass += "show-inline";
        subLiClass += "show-block";
        contactSubClass += "show-block";
    }

    //social links
    const links=[
        {social:{name:"facebook" ,link:"#",svg:require("../images/facebook.svg").default}},
        {social:{name:"instagram" ,link:"#",svg:require("../images/instagram.svg").default}},
        {social:{name:"tiktok" ,link:"#",svg:require("../images/tiktok.svg").default}},
        {social:{name:"twitter" ,link:"#",svg:require("../images/twitter.svg").default}},
    ]
    let socialLink = links.map(item=>{
        return(
            <a key={item.social.name}>
                <img src={item.social.svg} alt={`${item.social.name} link`}/>
            </a>
        )
    })
    
    if(footerCol.name!="Contact"){
    innerLink = footerCol.subLink.map(subItem=>{
            return (
                <li key={subItem.name} className={subLiClass}>
                    <a href={subItem.link}>{subItem.name}</a>
                </li>
            )
        })
    }
    else{
        innerLink = (
            <div className = {contactSubClass}>
                <p>{footerCol.address1} <br />{footerCol.address2}</p>
                <p>{footerCol.phone}</p>
                <a href={footerCol.link}>{footerCol.hours}</a>
                <div className="footer-social-links">
                    {socialLink}
                </div>
            </div>
        )
    }

  return (
    <div className="footer-list-col">
            <ul className="footer-list-col-title">
                {footerCol.name} 
                <button onClick={()=>setExpand(!expand)} className={expandClass}>+</button> 
                <button onClick={()=>setExpand(!expand)} className={collapseClass}>-</button>
            </ul>
            <ul>{innerLink}</ul>
    </div>
  )
}

export default FooterNavItem