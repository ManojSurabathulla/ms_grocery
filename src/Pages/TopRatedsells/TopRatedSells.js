import React from 'react'
import { images } from '../../assets/img'
import './TopRatedSells.scss'

const TopRatedSells = () => {
    return (
        <>
            <section className='topsells container'>
                <div className='topsells_container'>
                    <div className='topsells_parent'>
                        <h2>Top Sells</h2>
                        <div>
                            <div>
                                <img src={images?.orange} />
                            </div>
                            <div>
                                <h3>Orange 1kg</h3>
                                <div>
                                    <p>$2</p>
                                    <p>$3.99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Top Rated</h2>
                    </div>
                    <div>
                        <h2>Trending Items</h2>
                    </div>
                    <div>
                        <h2>Recently Added</h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopRatedSells