import React from 'react';
import "./Marketing.css";
// import Marketingvdo from "../../Assets/marketing.mov";

const Marketing = () => {
  return (
    <div>
      <div class="marketing-section">
        <div class="marketing-background">
          {/* <video
            playsInline
            autoplay
            muted
            loop
          >
            <source src={Marketingvdo} type="video/mp4" />
          </video> */}
        </div>

        <div class="marketing-text">
          <p class="marketing-line one">Twists and turns?</p>
          <p class="marketing-line two" style={{color:"black"}}>We turn them into trends—</p>
          <p class="marketing-line three">your brand, always ahead.</p>
        </div>

        {/* <!-- Heartbeat Line --> */}
        <div class="heartbeat-line"></div>
      </div>
    </div>
  )
}

export default Marketing