import React from 'react'
import { images } from '../../assets/img'
import SearchBar from '../SearchBar/SearchBar'
import './Nav.scss'

const NavBar = ({ data }) => {
    return (
        <>
            <section className='grocery_header container'>
                <div className='grocery_header_logo' >
                    <img className='grocery_header_logo_img' src={images?.logo} />
                </div>
                <div className='grocery_header_categories'>
                    <div className='grocery_header_categories_content'>
                        <p className='grocery_header_categories_content_text'>All Categories </p>
                        <img className='grocery_header_categories_content_icon' src={images?.downIcon} />
                    </div>
                   <SearchBar />
                </div>
                <div className='grocery_header_wishlist'>
                    <img className='grocery_header_wishlist_icon' src={images?.heartIcon} />
                    <span className='grocery_header_wishlist_text' >Wishlist</span>
                </div>
                <div className='grocery_header_cart'>
                    <img className='grocery_header_cart_icon' src={images?.shoppingCartIcon} />
                    <div className='grocery_header_cart_container'>
                        <span className='grocery_header_cart_container_text'>My cart</span>
                        <span className='grocery_header_cart_container_doller'>$21</span>
                    </div>
                    <img className='grocery_header_categories_content_icon' src={images?.downIcon} />
                </div>
                {data?.map((item) => (
                    <div className='grocery_header_user'>
                        <img className='grocery_header_user_img' src={item?.picture?.medium} />
                        <h2 className='grocery_header_user_name'>{item?.name?.first}</h2>
                        <img className='grocery_header_categories_content_icon' src={images?.downIcon} />
                    </div>
                ))}
            </section>

            <section className='container' >
                <ul className='grocery_nav' >
                    <li className='grocery_nav_lists grid'> <img src={images?.gridIcon} />  Brows All Categories</li>
                    <li className='grocery_nav_lists  active'> <img src={images?.frameIcon} /> Home</li>
                    <li className='grocery_nav_lists'> <img src={images?.vectorIcon} /> Hot deals</li>
                    <li className='grocery_nav_lists'> <img src={images?.percentIcon} /> Promotions</li>
                    <li className='grocery_nav_lists'> <img src={images?.megaphoneIcon} /> New products</li>
                    <li className='grocery_nav_lists'> <img src={images?.callIcon} /> <span className='active' >1233-7777</span> 24/7 support center</li>
                </ul>
            </section>

            <section className='grocery_banner'>
                <div className='grocery_banner_content container' >
                    <div className='grocery_banner_content_parent'>
                        <h1 className='grocery_banner_content_parent_head'>Don’t miss our daily amazing deals.</h1>
                        <span className='grocery_banner_content_parent_span'>Save up to 60% off on your first order</span>
                        <div className='grocery_banner_content_email'>
                            <div className='grocery_banner_content_email_parent'>
                                <img className='grocery_banner_content_email_send' src={images?.sendIcon} />
                                <input className='grocery_banner_content_email_input' placeholder='Enter your email address' />
                            </div>
                            <button className='grocery_banner_content_email_btn'>Subscribe</button>
                        </div>
                    </div>
                    <div className='grocery_banner_content_image'>
                        <img className='grocery_banner_content_image_bgIcon' src={images?.vegImg} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default NavBar