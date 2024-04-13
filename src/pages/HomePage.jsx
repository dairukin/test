


import { useState } from 'react'
import Slider from '../components/Slider/Slider'
import Products from '../components/Products/Products'


function HomePage() {

    return (
        <>
            <Slider />

            <div className="container">
       

                <Products />
            </div>

        </>
    )
}

export default HomePage
