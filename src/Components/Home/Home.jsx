import "./Home.css";
import Hero from "../../assets/hero.mov";
import Navbar from '../Navbar/Navbar';
import Marketing from '../Marketing/Marketing';
import About from '../About/About';
import Process from '../Process/Process';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
const Home = () => {
    // const words = ["Presence", "Identity", "Strategy", "Brand", "Impact"];
    // Function to update the dynamic word
    return (
        <div id='home'>
            {/* <ContactUsPopup/> */}
            <header id="hero">
                <video
                    playsInline
                    className="hero-video"
                    autoPlay
                    loop
                    muted
                >
                    <source src={Hero} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Navbar />
                <div className="Home-container">
                    <div className='Heading_one'>
                        <p className="static-text">Transform Your Digital &nbsp;
                            <span id="dynamic-word">Presence</span>
                            <span>&nbsp;With Us.</span>
                        </p>
                    </div>
                    <div className='Heading_two'>
                        <p>We craft bold strategies to take your brand to the next level.</p>
                        <button className="cta-btn"><Link to="/services">Explore Services</Link>
                        </button>
                    </div>
                </div>
            </header>

            {/* <!-- Services Scroller --> */}
            <div className="service-scroller">
                {/* <marquee id="scroller" behavior="scroll" direction="left" scrollamount="10">
                    Capturing essence, curating influence. Your social media presence, elevated with grace. #RarsiMedia
                    | Dominating the digital game. Where bold strategies meet unstoppable results. Let’s make your brand unmissable.
                    #RarsiMedia
                </marquee> */}
            </div>
            <Marketing />
            <About />
            <Process />
            <Footer />
        </div>
    )
}
export default Home;

