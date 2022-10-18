import React from 'react'

function FloatIcon({icon}) {
  return (
    <div className = {`float-icon`}>
        <a><img src={icon.src}/></a>
    </div>
  )
}

export default FloatIcon