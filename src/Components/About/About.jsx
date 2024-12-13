import React from 'react';
import About_img from "../../Assets/About.png";
import AboutVdo from "../../Assets/about.mov";
import { motion } from "framer-motion";
import './About.css';
const About = () => {
  return (
    <div id='about'>
      <div class="about-us-container">
        {/* <!-- Background Video --> */}
        <div class="about-us-background">
          <video
            playsInline
            autoplay
            muted
            loop
          >
            <source src={AboutVdo} type="video/mp4" />
          </video>
        </div>
        <div className='About-Container'>
          <div class="about-us-content"
          >
            <h3 style={{ display: "flex", justifyContent: "center", color: "#3bab5a" }}>ABOUT US</h3>
            <p>We Rarsi Media, where creativity meets strategy to transform brands into social media powerhouses. We are a
              vibrant and innovative social media agency dedicated to helping businesses of all sizes establish a compelling
              digital presence.</p>
            <p>At Rarsi Media, we don’t just manage your social platforms; we craft stories that resonate, campaigns that
              connect, and content that captivates. Our team of passionate marketers, content creators, and strategists are
              here to elevate your brand’s voice in an ever-evolving digital landscape.</p>
            {/* <p>We specialize in <strong>Social Media Management</strong>, <strong>Marketing Solutions</strong>,
              <strong>Content Production & Creation</strong>, and <strong>CC Management</strong>, blending cutting-edge tools
              with a personalized approach. From crafting engaging posts to designing impactful campaigns, we tailor every
              strategy to reflect your brand’s unique essence and goals.</p>
            <p>Our mission is simple: to amplify your reach, foster genuine connections with your audience, and drive
              measurable results. Whether you’re a budding startup or an established enterprise, we believe in creating a
              digital journey that feels authentic, impactful, and aligned with your vision.</p>
            <p>At Rarsi Media, we’re not just your social media team; we’re your brand’s biggest cheerleaders, constantly
              pushing boundaries to ensure you stand out in every scroll. Ready to transform your digital story? Let’s
              collaborate and make it unforgettable.</p> */}
            <p><strong>Rarsi Media—Your Partner in Social Brilliance.</strong></p>
          </div>
          <div className='About-img'>
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, origin: 1 }}
              src={About_img} alt="AboutImg" height={650} width={650} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;