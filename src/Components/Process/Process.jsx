import { TiClipboard } from "react-icons/ti";
import { FaMapLocationDot } from "react-icons/fa6";
import { SiDatabricks } from "react-icons/si";
// import { IoRemoveOutline } from "react-icons/io5";
// import { FaArrowDown } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import { motion } from "framer-motion";
import "./Process.css";
import DetailsPage from './DetailsPage';


const Process = () => {
    const icon1 = (
        <TiClipboard size={55} color='limegreen' />
    );
    const icon2 = (
        <FaMapLocationDot size={55} color='limegreen' />
    );
    const icon3 = (<SiDatabricks size={55} color='limegreen' />);

    return (
        <div className='bg-white p-8 w-full '>
            <div className='our_process'>
                <h1 className='text font-bold text-green-500 text-4xl text-center pt-5 pb-4'>OUR PROCESS</h1>
                <h2 className='text-slate-800  text-xl font-semibold text-center pb-10'>Follow the process to get your solutions.</h2>

            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: "0.6",
                }}
                className="icon-container flex flex-col  md:flex-row sm:flex-row lg:flex-row ">
                <DetailsPage icon={icon3} title="Book A Service" />
                <FaArrowRightLong  size={80} className='inner-line pb-5' />
                <DetailsPage icon={icon1} title="Consultation"/>
                <FaArrowRightLong size={80} className='inner-line pb-5' />
                <DetailsPage icon={icon2} title="Growth" />
            </motion.div>
            <div className="about-us-button">
                <button className="cta-btn"><a href="/contact">Get In Touch</a></button>
            </div>
        </div>
    )
}

export default Process;