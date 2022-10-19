import React from 'react'

function FloatIcon({icon}) {
  return (
    <div className = {`float-icon`}>
        <a><img src={icon.src} alt={icon.name}/></a>
    </div>
  )
}

export default FloatIcon