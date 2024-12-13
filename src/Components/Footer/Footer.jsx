import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import "./Footer.css";
import logo from "../../Assets/logo.png";
const Footer = () => {
    return (
        <div className='Footer'>
            <div class="Footer-container">
                {/* <!-- Left Section (Reach Out To Us) --> */}
                <div class="footer-left w-1/3">
                    <h3>Reach Out To Us</h3>
                    <p>Email: <a href="mailto:info@rarsimedia.com">info@rarsimedia.com</a></p>
                    <p>Contact: <a href="tel:+918249336031">+91 8249336031</a></p>
                    <p>Address: Plot No-9, Gurukrupa, Saheed Nagar, Bhubaneswar, Odisha 751007</p>
                </div>
                <div className='Horizontal-line'></div>

                {/* <!-- Center Section (Logo and Social Icons) --> */}
                <div class="footer-center w-1/3">
                    <div class="footer-logo">
                        <img src={logo} alt="Rarsi Media Logo" height={400} width={250} />
                    </div>
                    <div class="social-icons">
                        <a href="https://facebook.com/rarsimedia" target="_blank" rel="noreferrer">
                            <FaFacebook  size={30}/>
                        </a>
                        <a href="https://instagram.com/rarsimedia" target="_blank">
                            <FaSquareInstagram size={30}/>
                        </a>
                        <a href="https://linkedin.com/company/rarsimedia" target="_blank">
                            <ImLinkedin size={30}/>
                        </a>
                    </div>
                </div>
                <div className='Horizontal-line'></div>
                {/* <!-- Right Section (Explore links) --> */}
                <div class="footer-right w-1/3">
                    <h3>Explore Pages:</h3>
                    <ul className='nav-item'>
                        <li><a href="services">Services</a></li>
                        <li><a href="blog">Blog</a></li>
                        <li><a href="terms">Terms & Conditions</a></li>
                    </ul>
                </div>
            </div>
            {/* <!-- Footer Bottom (Copyright message) --> */}
            <div class="footer-bottom">
                <p>&copy; 2024 Rarsi Media. All Rights Reserved.</p>
            </div>
            <div className='footer-bottom'></div>
        </div>
    )
}

export default Footer