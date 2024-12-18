import "./Marketing.css";
// import Marketingvdo from "../../Assets/marketing.mov";

const Marketing = () => {
  return (
    <div>
      <div className="marketing-section">
        <div className="marketing-background">
          {/* <video
            playsInline
            autoplay
            muted
            loop
          >
            <source src={Marketingvdo} type="video/mp4" />
          </video> */}
        </div>

        <div className="marketing-text">
          <p className="marketing-line one">Twists and turns?</p>
          <p className="marketing-line two" style={{color:"black"}}>We turn them into trends</p>
          <p className="marketing-line three">your brand, always ahead.</p>
        </div>

        {/* <!-- Heartbeat Line --> */}
        <div className="heartbeat-line"></div>
      </div>
    </div>
  )
}

export default Marketing