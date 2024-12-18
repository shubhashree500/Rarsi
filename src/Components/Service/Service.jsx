import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../../public/logo.png";
import img1 from "../../../public/img6.png";
import img2 from "../../../public/img4.png";
import img3 from "../../../public/img1.png";
import img4 from "../../../public/img2.png";
import img5 from "../../../public/img5.png";
import img6 from "../../../public/img3.png";
import Footer from "../Footer/Footer";
import "./Service.css";

const Service = () => {
  const data = [
    {
      img: img5,
      name: "Social Media",
      Details: "We help manage your brand's voice, engage your audience, and create impactful social campaigns."
    },
    {
      img: img2,
      name: "Marketing Solutions",
      Details: "From strategy to execution, we offer marketing solutions that deliver measurable results.",
    },
    {
      img: img3,
      name: "Content Production & Creation",
      Details: "Creative and compelling content designed to captivate your audience and strengthen your brand.",
    },
    {
      img: img4,
      name: "CC Management",
      Details: "Building strong customer connections through consistent and innovative community management.",
    },
    {
      img: img1,
      name: "Website and SEO",
      Details: "We design websites that attract, engage, and convert. With powerful SEO, we make sure your site ranks high.",
    },
    {
      img: img6,
      name: "Brand Development & Strategy",
      Details: "We help you define, refine, and elevate your brand strategy, ensuring you stand out in the market.",
    },
  ];

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-slate-300" id="services">
      <div className="service-container">
        <div className="logo-container w-full">
          <a href="/" className="back-icon">&larr;</a>
          <a href="/home" className="logo">
            {/* Use the imported logo */}
            <img src={logo} alt="Rarsi Media Logo" />
          </a>
        </div>
        <div className="service-part">
          <div className="service-header">
            <h2>-: &nbsp;SERVICES &nbsp;:-</h2>
          </div>
          <div className="mt-5 lg:px-32 px-5">
            <div className="two">
              <Slider {...settings}>
                {data.map((e, index) => (
                  <div
                    className="h-[450px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
                    key={index}
                  >
                    <div>
                      {/* Use the imported image for each service */}
                      <img
                        src={e.img}
                        alt={e.name}
                        className="h-56 rounded-t-xl w-full p-6"
                      />
                    </div>

                    <div className="flex flex-col justify-center items-center rounded-md">
                      <h1 className="font-semibold text-xl pt-4">{e.name}</h1>
                      <h3 className="p-4 flex text-center">{e.Details}</h3>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="about-us-button">
          <button className="cta-btn"><a href="/contact">Get In Touch</a></button>
        </div>
        <div className="footerSection pt-16">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Service;
