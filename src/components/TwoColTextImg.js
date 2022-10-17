import React from 'react'
import TwoColTitle from './TwoColTitle'
import TwoColImage from './TwoColImage'

function TwoColTextImg({title,image, textPosition,color}) {
    const twoColTitle = <TwoColTitle title={title}    
                                     color={color}/>
    const twoColImage = <TwoColImage image={image.src} 
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
        <section className = {`two-col-${color}`}>
            {twoColImage}
            {twoColTitle}
        </section>
    )
}

export default TwoColTextImg