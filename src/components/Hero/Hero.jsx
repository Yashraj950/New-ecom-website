import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";
// import { MdDescription } from "react-icons/md";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% fo on all Men's Wear",
    description:
      " Lorem ipsum dolor sit amet, \
       consectetur adipisicing elit.  architecto accusamus, cum eos reprehenderit culpa nisi ",
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 30% fo on all Men's Wear",
    description:
      " Lorem ipsum dolor sit amet, \
       consectetur adipisicing elit.  architecto accusamus, cum eos reprehenderit culpa nisi ",
  },
  {
    id: 3,
    img: Image3,
    title: "Upto 70% fo on all Men's Wear",
    description:
      " Lorem ipsum dolor sit amet, \
       consectetur adipisicing elit.  architecto accusamus, cum eos reprehenderit culpa nisi ",
  },
];
const Hero = ({handleOrderPopup}) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    SliderToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div
      className="relative overflow-hidden min-h-[550px]
    sm:min-h-[650px] bg-gray-100 flex justify-center
    items-center dark:bg-gray-950 dark:text-white
     duration-200"
    >
      {/* background pattern */}
      <div
        className="h-[700px] w-[700px] bg-cyan-500/65 absolute -top-1/2
         right-0 rounded-3xl rotate-45 -z-9"
      ></div>
      {/* hero section  */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section  */}
                <div
                  className="flex flex-col justify-center gap-4 pt-12 
            sm:pt-0 text-center sm:text-left
            order-2 sm:order-1 relative z-10"
                >
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="font-serif text-5xl sm:text-6xl
                    lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p 
                      data-aos="zoom-up"
                      data-aos-duration="500"
                      data-aos-delay="300"
                  className="text-sm font-serif">{data.description}</p>
                  <div
                     data-aos="fade-down"
                     data-aos-duration="500"
                     data-aos-delay="500"
                  >
                    <button
                    onClick={handleOrderPopup}
                      className="bg-gradient-to-r
                from-primary to-secondary 
                hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* Image  section  */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10 "
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[350px] h-[300px] sm:h-[450px]
                     sm:w-[450px] sm:scale-125
                     lg:scale-120 object-contain mx-auto "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
