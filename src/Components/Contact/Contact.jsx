import "./Contact.css"; // Importing styles
import logo from "../../assets/logo.png"; // Importing logo (Ensure correct path)
import Footer from "../Footer/Footer"; // Importing Footer component

const Contact = () => {
    return (
        <div id="contact">
            {/* Navigation Section */}
            <nav>
                <div className="Contact-container">
                    {/* Back Icon */}
                    <a href="/" className="back-icon">&larr;</a>
                    {/* Logo */}
                    <a href="/" className="logo">
                        {/* Ensure the path is correct */}
                        <img src={logo} alt="Rarsi Media Logo" />
                    </a>
                </div>
            </nav>

            {/* Contact Section */}
            <section id="contact" className="pb-10">
                <div className="Contact-containers">
                    <h2>-: &nbsp;Contact Us &nbsp;:-</h2>
                    <p>
                        <b>Got a minute? We’ve got all day for you. Doors open, inbox ready—hit us up!</b>
                    </p>
                    <form>
                        {/* Name Field */}
                        <label>
                            Your Name <span className="required">*</span>
                        </label>
                        <input type="text" id="name" placeholder="Name" required />

                        {/* Email Field */}
                        <label>
                            Your Email <span className="required">*</span>
                        </label>
                        <input type="email" id="email" placeholder="Email" required />

                        {/* Phone Number Field */}
                        <label>
                            Phone Number <span className="required">*</span>
                        </label>
                        <input type="tel" id="phone" placeholder="Phone Number" required />

                        {/* Message Field */}
                        <label>Your Message</label>
                        <textarea id="message" placeholder="Message" rows="5"></textarea>

                        {/* Submit Button */}
                        <button className="mt-5">Send Message</button>
                    </form>
                </div>
            </section>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default Contact;
