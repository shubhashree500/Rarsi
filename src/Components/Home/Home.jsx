import React, { useState } from 'react'
import "./Home.css";
import Hero from "../../Assets/hero.mov";
import Navbar from '../Navbar/Navbar';
import Marketing from '../Marketing/Marketing';

const Home = () => {
    const words = ["Presence", "Identity", "Strategy", "Brand", "Impact"];
    const [ChangeWord, SetChangeWord] = useState(true);
    // Function to update the dynamic word
    function updateDynamicWord() {
        ChangeWord.textContent = words[1];
        SetChangeWord = (ChangeWord + 1) % words.length;
    }
    return (
        <div>
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
                <div class="Home-container">
                    <div className='Heading_one'>
                        <p class="static-text">Transform Your Digital &nbsp;
                            <span id="dynamic-word">Presence</span>
                            <span>&nbsp;With Us.</span>
                        </p>
                    </div>
                    <div className='Heading_two'>
                    <p>We craft bold strategies to take your brand to the next level.</p>
                    <button class="cta-btn"><a href="services.html">Explore Services</a>
                    </button>
                </div>
                </div>
            </header>

            {/* <!-- Services Scroller --> */}
            <div class="service-scroller">
                <marquee id="scroller" behavior="scroll" direction="left" scrollamount="10">
                    Capturing essence, curating influence. Your social media presence, elevated with grace. #RarsiMedia
                    | Dominating the digital game. Where bold strategies meet unstoppable results. Let’s make your brand unmissable.
                    #RarsiMedia
                </marquee>
            </div>
            <Marketing />
        </div>
    )
}
export default Home;