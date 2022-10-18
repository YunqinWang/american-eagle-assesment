import React from 'react'

function Button({btnStyle,btnText,btnLink=""}) {
  return (
    <div className="btn">
      <a className={btnStyle} href={btnLink}>
          {btnText}
      </a>
    </div>
  )
}

export default Button