import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const SidebarNav = ({ collapsed, toggled, setToggled }) => {
    return (
        <div className='h-full bg-white gray-text'>
            {!toggled && <h2 className='text-center py-5 font-bold text-[30px] base-text hidden md:block'>Job Portal</h2>}
            <Sidebar
                collapsed={toggled}
                toggled={toggled}
                onBackdropClick={() => setToggled(false)}
                breakPoint="md"
            >
                <Menu>
                    {toggled && <MenuItem onClick={()=>setToggled(!toggled)}>
                        <GiHamburgerMenu  size={25} className='base-text text-center cursor-pointer'  />
                    </MenuItem>}
                    <MenuItem icon={<FaHome className='base-text' size={20} />}> Home </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default SidebarNav