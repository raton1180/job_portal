import { Navbar } from 'flowbite-react'
import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";


const NavbarMenu = ({
    setToggled,
    toggled
}) => {
    return (
        <Navbar fluid rounded className='border-b w-full p-5'>
            <Navbar.Brand>
                {!toggled && <GiHamburgerMenu onClick={()=>setToggled(!toggled)} size={25} className='base-text cursor-pointer' />}
                {toggled && <h2 className='text-center font-bold text-[30px] base-text'>Job Portal</h2>}
            </Navbar.Brand>
            <Navbar.Collapse>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarMenu