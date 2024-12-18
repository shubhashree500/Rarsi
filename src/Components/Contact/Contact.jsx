import "./Contact.css";
import logo from "../../assets/logo.png"
import Footer from '../Footer/Footer';
// import { toast } from 'react-toastify';

// import Home from '../Home/Home';
const Contact = () => {
    // const [result, setResult] = React.useState("");

    // const onSubmit = async (event) => {
    //     event.preventDefault();
    //     setResult("Sending....");
    //     const formData = new FormData(event.target);

    //     formData.append("access_key", "066dfc6c-5b1a-4721-abaa-cdbc78b084b3");

    //     const response = await fetch("https://api.web3forms.com/submit", {
    //         method: "POST",
    //         body: formData
    //     });

    //     const data = await response.json();

    //     if (data.success) {
    //         setResult("");
    //         toast.success("Form Submitted Sucessfully")
    //         event.target.reset();
    //     } else {
    //         console.log("Error", data);
    //        toast.error(data.message)
    //         setResult("");
    //     }
    // };
    return (
        <div id='contact'>
            <nav>
                <div className="Contact-container">
                    <a href="/" className="back-icon">&larr;</a>
                    <a href="/" className="logo">
                        <img src={logo} alt="Rarsi Media Logo" />
                    </a>
                </div>
            </nav>

            <section id="contact" className='pb-10'>
                <div className="Contact-containers">
                    <h2>-: &nbsp;Contact Us &nbsp;:-</h2>
                    <p><b>Got a minute? We’ve got all day for you. Doors open, inbox ready—hit us up!</b></p>
                    <form>
                        <label>Your Name <span className="required">*</span></label>
                        <input type="text" id="name" placeholder="Name" required />

                        <label>Your Email <span className="required">*</span></label>
                        <input type="email" id="email" placeholder="Email" required />

                        <label>Phone Number <span className="required">*</span></label>
                        <input type="tel" id="phone" placeholder="Phone Number" required />

                        <label>Your Message</label>
                        <textarea id="message" placeholder="Message" rows="5"></textarea>

                        <button className='mt-5'>Send Message</button>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Contact