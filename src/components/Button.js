import React from 'react'

function Button({btnStyle,btnText,btnLink="",btnSize="normal"}) {
  return (
    <div className={`btn-${btnSize}`}>
      <a className={btnStyle} href={btnLink}>
          {btnText}
      </a>
    </div>
  )
}

export default Button