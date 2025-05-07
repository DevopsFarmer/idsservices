import React from 'react';
import heroImage from './hero-image.png'; // Replace with actual image path

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 text-gray-800">
      <div className="max-w-7xl mx-auto   flex flex-col-reverse lg:flex-row items-center">
        
        {/* Left: Text */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-serif font-semibold leading-tight">
            Unlock Your True With <br />
            <span className="block">Life Coaching Services</span>
          </h1>
          <button className="mt-4 inline-block  px-6 py-3 border border-white text-white font-semibold tracking-widest rounded-lg hover:bg-white hover:text-orange-500 transition">
            OUR SERVICES
          </button>
        </div>

        {/* Right: Image */}
        <div className="lg:w-1/2  lg:mb-0">
          <img
            src='/herosection.png'
            alt="Life Coaching"
            className="w-full "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
