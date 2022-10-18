import React from 'react'
import TwoColTitle from './TwoColTitle'
import ImageCol from './ImageCol'

function TwoColTextImg({title,image, textPosition,color}) {
    const twoColTitle = <TwoColTitle title={title}    
                                     color={color}/>
    const twoColImage = <ImageCol image={image.src} 
                                     imageText={image.text} 
                                     imageColor={`two-col-image-${color}`}/>

    if(textPosition == "left")
    return (
        <section className = {`two-col-${color}`}>
            {twoColTitle}
            {twoColImage}
        </section>
    )
    else return(
        <section className = {`two-col-right-text two-col-${color}`}>
            {twoColImage}
            {twoColTitle}
        </section>
    )
}

export default TwoColTextImg