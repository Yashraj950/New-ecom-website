import React from "react";
// import Products from './Products';
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { data } from "autoprefixer";
import { FaStar } from "react-icons/fa6";
// import Img5 from '../../assets/women/women5.png';
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.1,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 3.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 5.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.0,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 4,
    img: Img2,
    title: "Printed T-Shirt",
    rating: 4.0,
    color: "Yellow",
    aosDelay: "600",
  },
];
const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container ">
        {/* Header Section   */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-2xl text-blue-500">Top Selling Products for you</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            cum.
          </p>
        </div>

        {/* Body Section  */}
        <div>
          <div
            className="grid  grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
            place-items-center gap-5"
          >
            {/* card section  */}

            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold"> {data.title} </h3>
                  <p className="text-sm text-gray-600"> {data.color} </p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-teal-500" />
                    <span> {data.rating} </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* button section  */}
          <div className=" flex justify-center ">
            <button className="text-center cursor-pointer
             bg-primary text-white py-1 px-5 rounded-md ">
              View All Button 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
