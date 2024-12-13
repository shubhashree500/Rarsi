import React from 'react'
import "./Contact.css";
import logo from "../../Assets/logo.png"
import Footer from '../Footer/Footer';
const Contact = () => {
    return (
        <div id='contact'>
            <nav>
                <div class="Contact-container">
                    <a href="index.html" class="back-icon">&larr;</a>
                    <a href="index.html" class="logo">
                        <img src={logo} alt="Rarsi Media Logo" />
                    </a>
                </div>
            </nav>

            <section id="contact">
                <div class="Contact-container">
                    <h2>-: &nbsp;Contact Us &nbsp;:-</h2>
                    <p><b>Got a minute? We’ve got all day for you. Doors open, inbox ready—hit us up!</b></p>
                    <form>
                        <label for="name">Your Name <span class="required">*</span></label>
                        <input type="text" id="name" placeholder="Name" required />

                        <label for="email">Your Email <span class="required">*</span></label>
                        <input type="email" id="email" placeholder="Email" required />

                        <label for="phone">Phone Number <span class="required">*</span></label>
                        <input type="tel" id="phone" placeholder="Phone Number" required />

                        <label for="message">Your Message</label>
                        <textarea id="message" placeholder="Message" rows="5"></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Contact