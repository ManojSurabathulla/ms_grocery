import React from 'react'
import './Offer.scss'
import { Offer } from './OfferMock'

const OfferCard = () => {
    return (
        <main className='offer_container container'>
            <section className='offer'>

                    {Offer.map((offers) => (
                <div className='offer_parent' style={{'backgroundImage': `url(${offers?.image})`}} >
                        <div className='offer_parent_content'>
                            <button className='offer_parent_type' style={{'backgroundColor': `${offers?.bgColor}`}}>{offers?.offer}</button>
                            <p className='offer_parent_title'>{offers?.title} </p>
                            <p className='offer_parent_desc'>{offers?.desc}</p>
                            <div className='offer_parent_button'>
                                <button className='offer_parent_button_btn'>{offers?.btndesc}</button>
                            </div>
                        </div>
                </div>
                    ))}
            </section>
        </main>
    )
}

export default OfferCard