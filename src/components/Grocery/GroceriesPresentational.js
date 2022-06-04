import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Groceries.scss'
import NavBar from '../../Pages/Nav/NavBar'
import Card from '../../Pages/cards/Card'
import OfferCard from '../../Pages/OfferCard/OfferCard'
import BestSeller from '../../Pages/BestSeller/BestSeller'
import TopRatedSells from '../../Pages/TopRatedsells/TopRatedSells'

const GroceriesPresentational = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=1').then((res) => (
            setData(res?.data?.results)))
    }, [])
    return (
        <main>
            <NavBar data={data} />
            <Card />
            <OfferCard />
            <BestSeller />
            <TopRatedSells />
        </main>
    )
}

export default GroceriesPresentational