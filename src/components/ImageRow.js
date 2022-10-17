import React from 'react'

function ImageRow({images}) {
    let imageRow = images.map((item,i)=>{
        return (
            <div key={i} className="image-item" style={{backgroundImage:`url(${item.image.src})`}}>
            </div>
        )
    })
  return (
    <section className="image-row">
        {imageRow}
    </section>
  )
}

export default ImageRow