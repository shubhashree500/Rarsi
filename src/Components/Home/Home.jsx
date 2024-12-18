import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Marketing from "../Marketing/Marketing";
import About from "../About/About";
import Process from "../Process/Process";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <header id="hero">
        <video
          playsInline
          className="hero-video"
          autoPlay
          loop
          muted
        >
          {/* Update the src to use the public folder */}
          <source src="/src/assets/hero.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Navbar />
        <div className="Home-container">
          <div className="Heading_one">
            <p className="static-text">
              Transform Your Digital &nbsp;
              <span id="dynamic-word">Presence</span>
              <span>&nbsp;With Us.</span>
            </p>
          </div>
          <div className="Heading_two">
            <p>
              We craft bold strategies to take your brand to the next level.
            </p>
            <button className="cta-btn">
              <Link to="/services">Explore Services</Link>
            </button>
          </div>
        </div>
      </header>

      <div className="service-scroller">
        {/* Optionally include a marquee or dynamic text */}
      </div>
      <Marketing />
      <About />
      <Process />
      <Footer />
    </div>
  );
};

export default Home;
