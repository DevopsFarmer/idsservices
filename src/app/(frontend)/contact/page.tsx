import React from 'react';


const HeroSection = () => {
  return (
    <>
    <section className="w-full bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 text-gray-800">
      <div className="max-w-7xl mx-auto   flex flex-col-reverse lg:flex-row items-center">
        
        {/* Left: Text */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-serif font-semibold leading-tight">
          Get in
            <span className="block">  touch</span>
          </h1>
        
        </div>

        {/* Right: Image */}
        <div className="lg:w-1/2  lg:mb-0">
          <img
            src='/contact.png'
            alt="Life Coaching"
            className="w-full "
          />
        </div>
      </div>
    </section>




    <div className="bg-white py-12  px-4 md:px-10 lg:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#f9f9fb] rounded-xl shadow-md p-6 md:p-10">
    
    {/* Contact Info Column */}
    <div className="space-y-8 text-gray-800">
      {/* Address */}
      <div className="space-y-2">
        <div className="text-center text-3xl text-orange-500">
          📍
        </div>
        <div className="text-center space-y-1">
          <p>29 Komona Street, Clyde VIC 3978</p>
          <p>137 Eighth Street, Mildura VIC 3500</p>
          <p>PO Box 180, Kununurra WA 6743</p>
        </div>
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <div className="text-center text-3xl text-pink-400">
          📞
        </div>
        <div className="text-center space-y-1">
          <p>Ph: <span className="text-pink-500">+61 414 849 637</span></p>
          <p>1300 468 428 (1300 INVICTUS)</p>
          <p>03 5065 3032</p>
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <div className="text-center text-3xl text-yellow-500">
          ✉️
        </div>
        <p className="text-center">admin@idsservices.com.au</p>
      </div>

      {/* Hours */}
      <div className="space-y-2">
        <div className="text-center text-3xl text-orange-400">
          ⏰
        </div>
        <div className="text-center text-sm">
          <p><strong>Monday – Friday</strong> 9am – 5pm</p>
          <p><strong>Saturday</strong> by appointment</p>
          <p><strong>Sunday</strong> Closed</p>
        </div>
      </div>
    </div>

    {/* Contact Form Column */}
    <form className="space-y-6">
      <h2 className="text-xl font-light text-gray-700 uppercase tracking-widest text-center">
        Get in touch to discuss your personalised needs today.
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="text"
          placeholder="Last"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="text"
          placeholder="Preferred Contact"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <input
        type="text"
        placeholder="Services Required"
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <textarea
        rows="4"
        placeholder="Message"
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
      ></textarea>

      {/* Simulated reCAPTCHA placeholder */}
      <div className="bg-white border rounded p-4 shadow flex items-center space-x-2">
        <input type="checkbox" />
        <span>I’m not a robot</span>
        {/* You can embed real reCAPTCHA here */}
      </div>

      <button
        type="submit"
        className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded shadow"
      >
        Submit
      </button>
    </form>
  </div>
</div>



<div className="bg-[rgb(66,73,79)] relative pb-40 py-16">
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
    {/* <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-10">
      <path d="M1200 0L0 0 892.25 114.72 1200 0z" fill="#fff"></path>
    </svg> */}
  </div>

  <div className="flex justify-center items-center">
    <button className="flex items-center gap-2 bg-orange-500 text-white text-lg px-6 py-4 rounded-lg shadow-md hover:bg-orange-600 transition">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m2 0a2 2 0 100-4H7a2 2 0 100 4m12 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6m16 0H5" />
      </svg>
      COMPLETE OUR REFERRAL FORM
    </button>
  </div>
</div>




    </>
  );
};

export default HeroSection;