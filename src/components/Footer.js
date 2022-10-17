import React from 'react'
import FooterNav from './FooterNav'
import FooterCopyRight from './FooterCopyRight'

function Footer() {
  return (
    <footer>
        <div className = "footer-inner">
            <FooterNav/>
            <FooterCopyRight/>
        </div>
    </footer>
  )
}

export default Footer