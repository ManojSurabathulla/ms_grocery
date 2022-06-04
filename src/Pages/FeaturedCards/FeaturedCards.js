import React, { useMemo, useState } from 'react'
import { images } from '../../assets/img'
import { Featured } from '../../components/Grocery/Constants'
import TitleNav from '../../components/titleNav/TitleNav'
import './FeaturedCard.scss'

const FeaturedCards = () => {
    const [filterkey, setFilterkey] = useState('')
    const featuredData = useMemo(() => {
        if (filterkey==='all' || '') {
            return Featured;
        }
        return Featured.filter((features) => {
            return (features?.type || '').toLowerCase().includes(filterkey.toLowerCase())
        })
    }, [Featured, filterkey])

    return (
        <main className='grocery_cards_main'>
            <TitleNav {...{ title: 'Featured Products', setFilterkey }} />

            <section>
                <div className='grocery_featured container'>
                    {featuredData?.map((featureds) => (
                        <div className='grocery_featured_parent'>
                            <img className='grocery_featured_img' src={featureds?.image} />
                            <div className='grocery_featured_content'>
                                <p className='grocery_featured_subTitle'>{featureds?.subTitle}</p>
                                <p className='grocery_featured_title'>{featureds?.itemName}</p>
                                <span className='grocery_featured_author'>{featureds?.author}</span>
                                <div className='grocery_featured_container'>
                                    <div className='grocery_featured_container_price'>
                                        <span className='grocery_featured_container_doller'>{featureds?.price}</span>
                                        <span className='grocery_featured_container_discount'>{featureds?.discontDoller}</span>
                                    </div>
                                    <div className='grocery_featured_container_button'>
                                        <button className='grocery_featured_container_btn'> < img className='grocery_featured_container_btn_img' src={images?.cart} /> Add </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default FeaturedCards