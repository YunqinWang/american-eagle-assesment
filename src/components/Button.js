import React from 'react'

function Button({btnStyle,btnText,btnLink=""}) {
  return (
    <div>
      <a className={btnStyle} href={btnLink}>
          {btnText}
      </a>
    </div>
  )
}

export default Button