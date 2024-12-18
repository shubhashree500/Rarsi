import  { useEffect, useState } from 'react';
import crossIcon from "../../assets/cross_icon.svg";
import MenuIcon from "../../assets/menu_icon.svg";
import logo from "../../../public/logo.png";
import { Link } from 'react-router-dom';
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
                    <Link to="/services" className='cursor-pointer hover:text-gray-400'>Services</Link>

                    <Link to="/blog" className='cursor-pointer hover:text-gray-400'>Blog</Link>

                    <Link to="/contact" className='cursor-pointer hover:text-gray-400'>Reach Us</Link>
                    <Link to="/termCondition" className='cursor-pointer hover:text-gray-400'>Term&Condition</Link>

                </ul>
                <img onClick={() => setShowMobileMenu(true)} src={MenuIcon} className="md:hidden w-7 cursor-pointer ml-auto" alt="" />
                {/* --------mobile-menu-------- */}
                <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                    <div className='flex justify-end p-6 cursor-pointer'>
                        <img onClick={() => setShowMobileMenu(false)} src={crossIcon} className='w-6 ' alt="" />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium text-black'>
                        <Link onClick={() => setShowMobileMenu(false)} to="/services" className='px-4 py-2 rounded-full inline-block'>Services</Link>
                        <Link onClick={() => setShowMobileMenu(false)} to="/blog" className='px-4 py-2 rounded-full inline-block'>Blog</Link>
                        <Link onClick={() => setShowMobileMenu(false)} to="/contact" className='px-4 py-2 rounded-full inline-block'>Reach Us</Link>
                        <Link onClick={() => setShowMobileMenu(false)} to="/termCondition" className='px-4 py-2 rounded-full inline-block'>Term&Condition</Link>

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar;