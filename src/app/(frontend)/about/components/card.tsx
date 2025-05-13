import React from 'react';
import { TbCertificate } from "react-icons/tb";
const Card = () => {
  return (
    <>

<div className="bg-[rgb(66,73,79)] py-16">
  <div className="bg-white mx-8  max-w-6xl md:mx-auto -top-40 rounded-xl relative shadow-md px-6 py-12 text-center">
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
        <img src='/icons/Qualifications.png' alt='' className="w-24 h-auto" />
        </div>
        <h3 className="text-pink-500 text-xl font-semibold tracking-widest uppercase mb-2">Skills & Qualifications</h3>
        <p className="text-gray-600 text-base leading-relaxed">
          All Invictus Carers undergo training to best support your needs. Unlike most other care providers, we also have a team of Registered Nurses on staff.
        </p>
      </div>

      <div className="px-4 border-l border-gray-200">
        <div className="flex justify-center mb-4">
        <img src='/icons/Range.png' alt='' className="w-24 h-auto" />
        </div>
        <h3 className="text-orange-500 text-xl font-semibold tracking-widest uppercase mb-2">Range of Services</h3>
        <p className="text-gray-600 text-base leading-relaxed">
          You can rely on for home and community care, complex care, mental health support and private care – with ongoing and dedicated support from our team.
        </p>
      </div>


      <div className="px-4">
        <div className="flex justify-center mb-4">
        <img src='/icons/Diversity.png' alt='' className="w-24 h-auto" />
        </div>
        <h3 className="text-pink-500 text-xl font-semibold tracking-widest uppercase mb-2">Diversity</h3>
        <p className="text-gray-600 text-base leading-relaxed">
        Our carers speak 50+ languages and come from diverse cultural backgrounds. We will match carers to you based on your support needs, culture, language and interests.
        </p>
      </div>

      <div className="px-4 border-l border-gray-200">
        <div className="flex justify-center mb-4">
        <img src='/icons/Personalised.png' alt='' className="w-24 h-auto" />
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