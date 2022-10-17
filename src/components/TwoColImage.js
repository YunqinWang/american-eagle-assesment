import React from 'react'

function TwoColImage({image, imageText,imageColor}) {
  return (
    <div className="two-col-image">
        <div className="two-col-image-inner" 
            style={{backgroundImage:`url(${image})`}}>
            <div>
                <h4 className={imageColor}>{imageText}</h4>
            </div>
        </div>
    </div>
  )
}

export default TwoColImage
//<img src={(image)}/>