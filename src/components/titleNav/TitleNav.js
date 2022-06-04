import React from 'react'
import { titlesNav } from '../Grocery/Constants'

const TitleNav = ({ title, setFilterkey }) => {
    return (
        <section className='grocery_card container main_parent'>
            <div className='grocery_card_parent'>
                <h2>{title}</h2>
                <ul className='grocery_card_lists'>
                    {titlesNav.map((nav) => (
                        <li className='grocery_card_lists_items' onClick={() => setFilterkey(nav?.type)} >{nav?.title}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default TitleNav