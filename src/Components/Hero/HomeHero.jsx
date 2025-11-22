import { assets } from "@/assets/assets";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const HomeHero = () => {
  return (
    <div
      className="w-full h-[500px] sm:h-[400px] md:h-[500px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${assets.HomeHero.src})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-10 lg:px-20 space-y-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight">
          Your Journey <br /> Your Car <br /> Your Way
        </h1>

        <p className="text-gray-300 text-sm sm:text-[0.9rem] md:text-base max-w-full sm:max-w-md lg:max-w-lg">
          Discover your perfect ride at [Your Website Name], the ultimate destination for buying and selling cars. Browse thousands of new and used vehicles with detailed specifications and high-quality images. Connect directly with trusted sellers or dealerships to get the best deals. Compare prices, read reviews, and make informed decisions before you buy.
        </p>

        <div>
          <button className="btn bg-primary border-0 text-white flex items-center gap-2 px-4 py-2 text-sm sm:text-base">
            Subscribe <FaLocationArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
