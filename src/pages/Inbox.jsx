import React from 'react'
import SideNavbar from '../components/global/SideNavbar'
import Navbar from '../components/global/Navbar'
import AllInbox from '../components/Openbox/AllInbox'
import MailDetails from '../components/Openbox/MailDetails'

const Inbox = () => {
    return (
        <SideNavbar>
            <Navbar />
            <div className='w-[100%] flex flex-row justify-between'>
                <AllInbox />
                <MailDetails />
            </div>
        </SideNavbar>
    )
}

export default Inbox
