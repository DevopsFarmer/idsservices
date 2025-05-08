import React from 'react'

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center">
        
        {/* Left: Text */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-[170px] leading-[65px] font-thinker text-white">
            Services
          </h1>
        </div>

        {/* Right: Image */}
        <div className="lg:w-1/2 lg:mb-0">
          <img
            src="/services.png"
            alt="Life Coaching"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
