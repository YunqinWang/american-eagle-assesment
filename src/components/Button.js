import React from 'react'

function Button({btnStyle,btnText,btnLink=""}) {
  return (
        
            <a className={btnStyle} href={btnLink}>
                {btnText}
            </a>
        
  )
}

export default Button