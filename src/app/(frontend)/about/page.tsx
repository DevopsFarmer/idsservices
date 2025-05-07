import React from 'react';
import heroImage from './hero-image.png'; // Replace with actual image path

const HeroSection = () => {
  return (
    <>
    <section className="w-full bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 text-gray-800">
      <div className="max-w-7xl mx-auto   flex flex-col-reverse lg:flex-row items-center">
        
        {/* Left: Text */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-serif font-semibold leading-tight">
          Qualified, experienced &
compassionate carers
          </h1>
          <button className="mt-4 inline-block  px-6 py-3 border border-white text-white font-semibold tracking-widest rounded-lg hover:bg-white hover:text-orange-500 transition">
            OUR SERVICES
          </button>
        </div>

        {/* Right: Image */}
        <div className="lg:w-1/2  lg:mb-0">
          <img
            src='/about.png'
            alt="Life Coaching"
            className="w-full "
          />
        </div>
      </div>
    </section>





    <div className="bg-gray-50 py-16 px-6 md:px-16">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    <div>
      <img 
        src="/image2.png" 
        alt="Person with disability and supporter at sunset"
        className="rounded-[100px_0px_100px_0px] w-full object-cover shadow-md"
      />
    </div>

    <div>
      <h2 className="text-4xl md:text-5xl font-semibold text-orange-500 tracking-wide leading-tight mb-6">
        PERSON-CENTRED NDIS <br /> SUPPORT & CARE
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        At Invictus Disability Support Services we can help you find the right support with person-centred care, no matter how complex.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed">
        Our priority is to provide care that is specific and holistic to the needs of people living with disabilities. We have highly qualified support workers and support co-ordinators to ensure that people living with disabilities have the freedom to choose the services and supports that best helps them achieve their goals.
      </p>
    </div>

  </div>
</div>







<div className="bg-[rgb(66,73,79)] py-16">
  <div className="bg-white  max-w-6xl mx-auto rounded-xl shadow-md px-6 py-12 text-center">

    <h2 className="text-4xl font-light mb-4">
      <span className="text-pink-400 font-handwriting text-5xl">Why</span>
      <span className="text-gray-800">Choose Invictus?</span>
    </h2>
    <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-10">
      We believe there is no substitute for experience. We are committed to empowering Australians so they can continue to live at home.
    </p>

    <div className="grid md:grid-cols-2 gap-8 text-center border-t border-gray-200 pt-10">

      <div className="px-4">
        <div className="flex justify-center mb-4">
          <svg className="h-12 w-12 text-pink-400" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 16h8M8 12h8m-7 4h6m-6-8h6m2 4H4"></path>
          </svg>
        </div>
        <h3 className="text-pink-500 text-xl font-semibold tracking-widest uppercase mb-2">Skills & Qualifications</h3>
        <p className="text-gray-600 text-base leading-relaxed">
          All Invictus Carers undergo training to best support your needs. Unlike most other care providers, we also have a team of Registered Nurses on staff.
        </p>
      </div>

      <div className="px-4 border-l border-gray-200">
        <div className="flex justify-center mb-4">
          <svg className="h-12 w-12 text-orange-500" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 20l9-5-9-5-9 5 9 5z" />
            <path d="M12 12l9-5-9-5-9 5 9 5z" />
          </svg>
        </div>
        <h3 className="text-orange-500 text-xl font-semibold tracking-widest uppercase mb-2">Range of Services</h3>
        <p className="text-gray-600 text-base leading-relaxed">
          You can rely on for home and community care, complex care, mental health support and private care – with ongoing and dedicated support from our team.
        </p>
      </div>


      <div className="px-4">
        <div className="flex justify-center mb-4">
          <svg className="h-12 w-12 text-pink-400" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 16h8M8 12h8m-7 4h6m-6-8h6m2 4H4"></path>
          </svg>
        </div>
        <h3 className="text-pink-500 text-xl font-semibold tracking-widest uppercase mb-2">Skills & Qualifications</h3>
        <p className="text-gray-600 text-base leading-relaxed">
          All Invictus Carers undergo training to best support your needs. Unlike most other care providers, we also have a team of Registered Nurses on staff.
        </p>
      </div>

      <div className="px-4 border-l border-gray-200">
        <div className="flex justify-center mb-4">
          <svg className="h-12 w-12 text-orange-500" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 20l9-5-9-5-9 5 9 5z" />
            <path d="M12 12l9-5-9-5-9 5 9 5z" />
          </svg>
        </div>
        <h3 className="text-orange-500 text-xl font-semibold tracking-widest uppercase mb-2">Range of Services</h3>
        <p className="text-gray-600 text-base leading-relaxed">
          You can rely on for home and community care, complex care, mental health support and private care – with ongoing and dedicated support from our team.
        </p>
      </div>
    </div>
  </div>
</div>








    </>
  );
};

export default HeroSection;