import React from 'react';

const services = [
  { icon: '/icons/shopping.png', title: 'Shopping' },
  { icon: '/icons/personal-care.png', title: 'Personal Care' },
  { icon: '/icons/keeping-active.png', title: 'Keeping Active' },
  { icon: '/icons/transportation.png', title: 'Transportation' },
  { icon: '/icons/quick-checkin.png', title: 'Quick Check-In' },
  { icon: '/icons/companionship.png', title: 'Companionship' },
  { icon: '/icons/nursing-home.png', title: 'Nursing at Home' },
  { icon: '/icons/meal-prep.png', title: 'Meal Prep' },
  { icon: '/icons/housekeeping.png', title: 'Light Housekeeping' },
  { icon: '/icons/medication.png', title: 'Medication Assistance' },
  { icon: '/icons/continence.png', title: 'Continence Management' },
  { icon: '/icons/social-access.png', title: 'Social & Community Access' },
];

const CareServices = () => {
  return (
    <div className="text-center px-6 py-12">
      <p className="max-w-4xl mx-auto text-gray-700 text-lg md:text-xl mb-12">
        We employ our Carers based on skills and values to deliver the highest quality home and community care.
        You and your family will have ongoing support from a dedicated My Aged Care providers Mildura team with assistance with:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10  max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-3">
            <img src={service.icon} alt={service.title} className="w-24 h-auto" />
            <p className="uppercase text-gray-800 font-semibold tracking-wide text-sm">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareServices;
