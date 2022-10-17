import React from 'react'
import Button from './Button'

function TwoColTitle({title,color}) {
  return (
    <div className = {`two-col-title-box-${color}`}>
        <div className = "two-col-title-inner">
          <h4>{title.description.subtitle}</h4>
          <h3>{title.description.title}</h3>
          <Button btnStyle={title.btn.style}  btnText={title.btn.text}/>
        </div>
    </div>
  )
}

export default TwoColTitle