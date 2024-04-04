import React from 'react'
import SideNavbar from '../global/SideNavbar'
import Navbar from '../global/Navbar'

const Welcome = () => {
    return (
        <SideNavbar>
            <Navbar />
            <div className='bg-black h-screen font-sans text-white'>
                Welcome
            </div>
        </SideNavbar>
    )
}

export default Welcome
