import React from 'react'

function OfferRow({offers}) {
    let offerRow = offers.map((item,i)=>{
        return(
            <li className='offer-item' key={i}>
                <div className='offer-item-icon-outer'>
                    <div className='offer-item-icon' 
                        style={{backgroundImage:`url(${item.offer.icon})`}}>
                    </div>
                </div>
                <div className='offer-item-text'>
                    <h4>{item.offer.title}</h4>
                    <h5>{item.offer.subtitle}</h5>
                </div>
            </li>
        )
    })
  return (
    <section className='container-outer offer-outer'>
        <div className='container-inner'>
            <div className='offer-row-title'>
                <h4>Beatiful Beginnings</h4>
                <h5>Customer Benifits</h5>
            </div>
            <ul className='flex-box'> 
                {offerRow}
            </ul>
        </div>
    </section>
  )
}

export default OfferRow