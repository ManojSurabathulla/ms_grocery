import React from 'react'
import { images } from '../../assets/img'
import { Vegetables } from '../../components/Grocery/Constants'

const SearchBar = () => {
    return (
        <>
            <div className='grocery_header_categories_search'>
                <input className='grocery_header_categories_search_input' type='text' placeholder='Search for items...' />
                <img className='grocery_header_categories_search_btn' src={images?.searchbtnIcon} />
            </div>
            {/* <div>
                {Vegetables?.map((vegies) => (
                    <ul style={{ display: 'flex', flexDirection: 'column' }}>
                        <li>
                            {vegies?.itemName}
                        </li>
                    </ul>
                ))}
            </div> */}
        </>
    )
}

export default SearchBar