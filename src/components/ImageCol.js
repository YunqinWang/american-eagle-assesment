import React from 'react'

function ImageCol({image, imageText,imageColor}) {
  return (
    <div className="two-col-image">
        <div className="two-col-image-inner" 
            style={{backgroundImage:`url(${image})`}}>
            <div>
                <h5 className={imageColor}>{imageText}</h5>
            </div>
        </div>
    </div>
  )
}

export default ImageCol