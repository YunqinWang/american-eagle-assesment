import React from 'react'
import TwoColTitle from './TwoColTitle'
import ImageCol from './ImageCol'

function TwoColTextImg({type,title,image, textPosition,color}) {
    const twoColTitle = <TwoColTitle title={title}    
                                     color={color}/>
    const twoColImage = <ImageCol image={image.src} 
                                     imageText={image.text} 
                                     imageColor={`two-col-image-${color}`}/>

    let typeClass ="";
    if (type == "image") typeClass ="two-col-fixed-height";
    else typeClass = "two-col-hug-height"

    if(textPosition == "left")
    return (
        <section className = {`${typeClass} two-col-${color}`}>
            {twoColTitle}
            {twoColImage}
        </section>
    )
    else return(
        <section className = {`${typeClass} two-col-right-text two-col-${color}`}>
            {twoColImage}
            {twoColTitle}
        </section>
    )
}

export default TwoColTextImg