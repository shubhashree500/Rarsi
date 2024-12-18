import bloggif from "../../assets/blogif.mp4";
import logo from "../../../public/logo.png";
import Footer from "../Footer/Footer";
import "./Blog.css";
const Blog = () => {
  return (
    <div>
      <nav>
        <div className="blog-container">
          <a href="/" className="back-icon">&larr;</a>
          <a href="/home" className="logo">
            <img src={logo} alt="Rarsi Media Logo" />
          </a>
        </div>
      </nav>
      <div className='pt-12 pb-12'>
        <div id='blog' className='blog-containerr flex justify-center items-center'>
          <h1 className='text-black font-semibold text-4xl'>
            Wait wait wait ! There is something exciting!!
          </h1>
        </div>
        <video
          playsInline
          className="blog-video h-60 w-full"
          autoPlay
          loop
          muted
        >
          <source src={bloggif} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="contact-us-button">
        <button className="cta-btn"><a href="/contact">Get In Touch</a></button>
      </div>
      <Footer />
    </div>
  )
}

export default Blog