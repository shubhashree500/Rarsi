import { useState, useEffect } from 'react';

const ContactUsPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Show the popup 2 seconds after the component is mounted
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2 className='flex text-center justify-center items-center'>Contact Us</h2>
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <label>
                Email:
                <input type="email" name="email" />
              </label>
              <label>
                Message:
                <textarea name="message"></textarea>
              </label>
              <button type="submit">Submit</button>
            </form>
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default ContactUsPopup;
