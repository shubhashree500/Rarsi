import React, { useEffect, useState } from 'react';
import crossIcon from "../../Assets/cross_icon.svg";
import MenuIcon from "../../Assets/menu_icon.svg";
import logo from "../../Assets/logo.png";
const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [showMobileMenu])

    return (
        <div className='absolute top-0 left-0 w-full z-10 '>
            <div className=' mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                <img src={logo} alt="" height={200} width={200} />
                <ul className='hidden md:flex gap-7 text-white'>
                    <a href="#Header" className='cursor-pointer hover:text-gray-400 text-green-400'>Home</a>

                    <a href="#services" className='cursor-pointer hover:text-gray-400'>Services</a>

                    <a href="#blog" className='cursor-pointer hover:text-gray-400'>Blog</a>

                    <a href="#contact" className='cursor-pointer hover:text-gray-400'>Reach Us</a>
                </ul>
                <img onClick={() => setShowMobileMenu(true)} src={MenuIcon} className="md:hidden w-7 cursor-pointer ml-auto" alt="" />
                {/* --------mobile-menu-------- */}
                <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                    <div className='flex justify-end p-6 cursor-pointer'>
                        <img onClick={() => setShowMobileMenu(false)} src={crossIcon} className='w-6 ' alt="" />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium text-black'>
                        <a onClick={() => setShowMobileMenu(false)} href="#home" className='px-4 py-2 rounded-full inline-block'>Home</a>
                        <a onClick={() => setShowMobileMenu(false)} href="#services" className='px-4 py-2 rounded-full inline-block'>Services</a>
                        <a onClick={() => setShowMobileMenu(false)} href="#blog" className='px-4 py-2 rounded-full inline-block'>Blog</a>
                        <a onClick={() => setShowMobileMenu(false)} href="#contact" className='px-4 py-2 rounded-full inline-block'>Reach Us</a>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar;