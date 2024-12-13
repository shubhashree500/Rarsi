import React from 'react';
// import { motion } from "framer-motion";

const DetailsPage = ({ title, icon, data }) => {
    return (
        <div className='group flex flex-col items-center text-center gap-2 w-full h-full lg:w-1/3 p-9 cursor-pointer'>
            <div className='bg-black h-24 w-26 text-center p-6'>{icon}</div>
            <h1 className=' text-lg text-black pt-8'>{title}</h1>
            <p className='text-black pt-6'>{data}</p>
        </div>    )
}

export default DetailsPage;