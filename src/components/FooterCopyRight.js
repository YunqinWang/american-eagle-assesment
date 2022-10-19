import React from 'react'

function FooterCopyRight() {
    //subfooter list
    const subFooterList =[
        {subItem:{name:"Site Map", link:"#"}},
        {subItem:{name:"Privacy Policy", link:"#"}},
        {subItem:{name:"Terms & Conditions", link:"#"}},
    ]
    let footerList = subFooterList.map(item=>{
        return(
            <li key={item.subItem.name}>
                <a href={item.subItem.link}> {item.subItem.name} </a>
            </li>
        )
    })

    return (
        <div className="footer-subfooter">
            <div className="footer-copyright">
                <ul>
                    <li><p><span>&copy;</span>2022 Beautiful Beginnings. All Rights Reserved</p></li>
                    {footerList}
                </ul>
            </div>
            <div className="footer-design-text">
                <p>Designed and developed by <a href="#">americaneagle.com</a></p>
            </div>
            <div>
                <img src={require("../images/logo.svg").default} alt="AmericanEagle Logo"/>
            </div>
        </div>
    )
}

export default FooterCopyRight