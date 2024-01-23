import React, { useState } from 'react'
import SidebarNav from '../components/shared/Sidebar/Sidebar'
import NavbarMenu from '../components/shared/Navbar/Navbar'

const Home = () => {
    const [toggled, setToggled] = useState(true)

    return (
        <div className='flex'>
            <div className='h-screen mt-5'>
                <SidebarNav
                    setToggled={setToggled}
                    toggled={toggled}
                />
            </div>
            <div className='w-full'>
                <div className=''>
                    <NavbarMenu
                        setToggled={setToggled}
                        toggled={toggled}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home