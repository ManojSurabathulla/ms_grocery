import React, { useState, useMemo } from 'react'
import { images } from '../../assets/img'
import { Vegetables } from '../../components/Grocery/Constants'
import TitleNav from '../../components/titleNav/TitleNav'
import FeaturedCards from '../FeaturedCards/FeaturedCards'
import './Card.scss'


const Card = () => {
    
    const [filterKey, setFilterkey] = useState('')

    const filterData = useMemo(() => {
        if(filterKey === 'all' || '') {
            return Vegetables;
        }
        return Vegetables.filter((vegies) => {
            return(vegies?.type || '' ).toLowerCase().includes(filterKey.toLowerCase())
        })
    },[Vegetables, filterKey])

    return (
        <main className='grocery_cards_main'>
            <TitleNav {...{ title: 'Explore Categories',setFilterkey } } />
            <section className='grocery_cards'>
                <div className='grocery_cards_container container'>
                    {filterData?.map((items, i) => (
                        <div className='grocery_cards_parent' style={{ backgroundColor: `${items.bgColor}` }}>
                            <img className='grocery_cards_img' src={items?.image} />
                            <p className='grocery_cards_title'>{items?.itemName}</p>
                            <span className='grocery_cards_items'>{items?.title}</span>
                        </div>
                    ))}
                </div>
            </section>
            <FeaturedCards />
        </main>
    )
}

export default Card

// const [filterKey, setFilterkey] = useState('')

//      const filteredData = useMemo(() => {
//         if (filterKey === 'all' || '') {
//             return Vegetables;
//         }
//         return Vegetables.filter((veggies) => {
//             return (
//                 (veggies?.type || '')?.toLowerCase().includes(filterKey.toLowerCase())
//             );
//         });
//     }, [Vegetables, filterKey]);