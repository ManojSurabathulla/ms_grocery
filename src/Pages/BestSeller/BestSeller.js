import React from 'react'
import { images } from '../../assets/img'
import './BestSeller.scss'
import { seller } from './mock'

const BestSeller = () => {
    return (
        <main className='bestseller container'>
            <section className='bestseller_parent'>
                <div className='bestseller_parent_container'>
                    <h2 className='bestseller_parent_container_title'>Daily Best Sells</h2>
                    <ul className='bestseller_parent_container_lists'>
                        <li className='bestseller_parent_container_lists_items active'>Featured</li>
                        <li className='bestseller_parent_container_lists_items'>Popular</li>
                        <li className='bestseller_parent_container_lists_items'>New</li>
                    </ul>
                    <button className='bestseller_parent_container_btn'>Expires in: 10 : 56 : 21</button>
                </div>
            </section>
            <section className='bestseller_card_parent'>
                {seller?.map((sellers) => (
                    <div className='bestseller_card'>
                        <button className='bestseller_card_offer' style={{backgroundColor: `${sellers?.bgColor}`, color: `${sellers?.dealColor}`}} >{sellers?.offer}</button>
                        <div>
                            <img className='bestseller_card_img' src={sellers?.image} />
                        </div>
                        <div className='bestseller_card_content'>
                            <p className='bestseller_card_subTitle'>{sellers?.subText}</p>
                            <h2 className='bestseller_card_title'>{sellers?.title}</h2>
                            <p className='bestseller_card_author'>{sellers?.author}</p>
                            <div className='bestseller_card_price'>
                                <p className='bestseller_card_price_doller'>{sellers?.price}</p>
                                <span className='bestseller_card_price_discount'>{sellers?.discount}</span>
                            </div>
                            <span className='bestseller_card_sold'>Sold :{sellers?.sold}</span>
                            <div className='bestseller_card_cartBtn'>
                                <button className='bestseller_card_cartBtn_btn'> <img className='bestseller_card_cartBtn_icon' src={images?.shoppingcart} /> Add to cart </button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default BestSeller