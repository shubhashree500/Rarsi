import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import "./Footer.css";
import logo from "../../Assets/logo.png";
import {Link} from 'react-router-dom';
const Footer = () => {
    return (
        <div className='Footer'>
            <div className="Footer-container w-full">
                {/* <!-- Left Section (Reach Out To Us) --> */}
                <div className="footer-left w-1/3">
                    <h3>Reach Out To Us</h3>
                    <p>Email:<a href="info@rarsimedia.com">info@rarsimedia.com</a></p>
                    <p>Contact:<a href="+918249336031">+918249336031</a></p>
                    <p className=''>Address: Plot No-9, Gurukrupa, Saheed Nagar,Bhubaneswar, Odisha 751007</p>
                </div>
                <div className='Horizontal-line'></div>

                {/* <!-- Center Section (Logo and Social Icons) --> */}
                <div className="footer-center w-1/3">
                    <div className="footer-logo">
                        <img src={logo} alt="Rarsi Media Logo"/>
                    </div>
                    <div className="social-icons">
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
                <div className="footer-right w-1/3">
                    <ul className='nav-item'>
                    <h3>Explore:</h3>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/termCondition">Terms&Condition</Link></li>
                    </ul>
                </div>
            </div>
            <div style={{border:"1px solid white",marginTop:"2%"}}></div>
            {/* <!-- Footer Bottom (Copyright message) --> */}
            <div className="footer-bottom">
                <p>&copy; 2024 Rarsi Media. All Rights Reserved.</p>
            </div>
            <div className='footer-bottom'></div>
        </div>
    )
}

export default Footer