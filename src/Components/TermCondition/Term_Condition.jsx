import './Term&Condition.css';
import { FaCheck } from "react-icons/fa";
import Footer from '../Footer/Footer';
import logo from "../../../public/logo.png";
const Term_Condition = () => {
  return (
    <div>
      <div className='w-full'>
        <div className="logo-container w-full">
          <a href="/" className="back-icon">&larr;</a>
          <a href="/home" className="logo">
            <img src={logo} alt="Rarsi Media Logo" />
          </a>
        </div>
        <div id='termCondition' className='term-container text-black '>
          <div className='term-header'>
            <h1 className='text-4xl text-black flex justify-center pb-10 pt-16'>-: &nbsp;Terms&Condition&nbsp;:-</h1>
          </div>
          <p>
            <div className='flex gap-4'>
              <FaCheck size={20} color='green' />
              <p className='font-semibold'>
                Terms & Conditions:
              </p>
            </div>
            <p>
              These Terms and Conditions are intended to detail our obligations to you regarding our site as well as inform you of the rules and regulations of Rarsi Media. By using this site (rarsimedia.com), you agree to these Terms and Conditions, and as such we strongly encourage our visitors to read through this content regularly to stay informed of this disclaimer and any changes to our Terms and Conditions. In the following Terms and Conditions, “we, us, and site” are used to refer to Rarsi Media</p>
          </p>
          <p>
            <div className='flex gap-4'>
              <FaCheck size={20} color='green' />
              <p className='font-semibold'>Use of Our Website:</p>
            </div>
            You are permitted to use this site for you own purposes to print, download, and share material provided you do not modify any content without our explicit consent. Material on this website may not be republished online or offline without our permission. The copyright and all intellectual property rights of the material on this site are owned by Rarsi Media and may not be reproduced without our prior consent.
          </p>
          <p>
            The information contained on this website is for general information purposes only. While we endeavor to keep the information up-to-date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you placed on such information is strictly at your own risk.
          </p>
          <p>
            <div className='flex gap-4'>
              <FaCheck size={20} color='green' />
              <p className='font-semibold'>Visitor Conduct:</p>
            </div>
            With the exception of personal information (the use of which is covered under our Privacy Policy), any material you send or post to this write shall be considered non-proprietary and not confidential. Unless you advise to the contrary, we remain free to copy, disclose, distribute, incorporate and otherwise use such material for any and all purposes.
          </p>
          <p>
            <div className='flex gap-4'>
              <FaCheck size={20} color='green' />
              <p className='font-semibold'>Site Activity:</p>
            </div>
            We take the utmost care to ensure that this site is available 24/7 in a day and  365 days per year. However, websites do sometimes encounter downtime due to server or technical issues. In that case  your screen will be displayed as the website is under maintenance.
          </p>
          <p>
            <div className='flex gap-4'>
              <FaCheck size={20} color='green' />
              <p className='font-semibold'> Contacting us:</p>
            </div>

            If you have any questions regarding our Terms and Conditions or your dealings with rarsimedia.com please contact us using the following information
            Contact number:-8249336031, 8455067505<br />
            Email adress -info@rarsimedia.com<br />
            Office -Plot no 9, Gurukrupa,SaheedNagar
          </p>
        </div>
        <div> <Footer /></div>
      </div>
    </div>
  )
}

export default Term_Condition;