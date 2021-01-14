import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import VidoContainer from '../../Components/VidoContainer/VidoContainer'
import './HomePage.css'

const HomePage = () => {
    return (
        <div className='homePage'>
            <Sidebar />
            <VidoContainer />
        </div>
    )
}

export default HomePage
