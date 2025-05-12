import React from 'react';
import { TbCertificate } from "react-icons/tb";
const Card = () => {
  return (
    <>

<div className="bg-[rgb(66,73,79)] py-16">
  <div className="bg-white  max-w-6xl mx-auto -top-40 rounded-xl relative shadow-md px-6 py-12 text-center">
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
        <TbCertificate className='w-10 h-10 text-gray-500' />
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
        <h3 className="text-pink-500 text-xl font-semibold tracking-widest uppercase mb-2">Diversity</h3>
        <p className="text-gray-600 text-base leading-relaxed">
        Our carers speak 50+ languages and come from diverse cultural backgrounds. We will match carers to you based on your support needs, culture, language and interests.
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
        <h3 className="text-orange-500 text-xl font-semibold tracking-widest uppercase mb-2">Personalised Support</h3>
        <p className="text-gray-600 text-base leading-relaxed">
        You’ll have a dedicated Care Manager and care team who will closely work with you to meet your needs. Start your Home Care Package journey with Invictus!
        </p>
      </div>
    </div>
  </div>
</div>





   


    </>
  );
};

export default Card;