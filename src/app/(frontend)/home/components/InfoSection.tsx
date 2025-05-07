import { FileText } from 'lucide-react'; // Optional icon (use Lucide or any icon lib)


const SupportSection = ({ image, title, description, reverse = false }) => {
    return (
      <div className={`mx-auto flex flex-col md:flex-row items-center gap-10 py-12`}>
        {/* Conditionally flip layout */}
        {!reverse && (
          <div className="w-full md:w-1/2">
            <img
              src={image}
              alt="Support"
              className="rounded-tl-[100px] rounded-br-[100px] object-cover w-full h-auto"
            />
          </div>
        )}
  
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {description}
          </p>
          <button className="border border-pink-400 text-pink-500 px-6 py-2 rounded-full font-medium hover:bg-pink-50 transition-all duration-200">
            FIND OUT MORE <span className="ml-2">➤</span>
          </button>
        </div>
  
        {reverse && (
          <div className="w-full md:w-1/2">
            <img
              src={image}
              alt="Support"
              className="rounded-tl-[100px] rounded-br-[100px] object-cover w-full h-auto"
            />
          </div>
        )}
      </div>
    );
  };
  


const InfoSection = () => {
  return (
    <>
    <section className="bg-gray-50 text-gray-800 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <p className="text-lg leading-relaxed">
          Invictus Disability Support Services is a registered NDIS Support Provider offering services in Clyde, Melbourne, Mildura, and Kununurra. We specialise in delivering NDIS Services Clyde, NDIS Services Mildura, and NDIS Services Melbourne. We are proud to be among the top NDIS Registered Providers Melbourne, serving across the South East Suburbs, Gippsland, and beyond.
        </p>
        <p className="text-lg leading-relaxed">
          We provide disability support services that manage day-to-day living, community inclusion and participation, support and accommodation coordination, and aged care. Our NDIS support services empower our participants to live every day to the fullest by offering the assistance they need to succeed. Our goal is to empower our participants to live the life they choose with confidence.
        </p>

        {/* Button */}
        <div className="pt-6">
          <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
            <FileText className="w-5 h-5" />
            COMPLETE OUR REFERRAL FORM
          </button>
        </div>
      </div>
    </section>







<div className="bg-[#f28cb3] relative overflow-hidden py-16 px-6 md:px-10">
  {/* Optional Butterfly Image - Top Left */}
  <img
    src="/image1.png" // replace with actual image path
    alt="Butterfly"
    className="absolute -top-20 left-40 w-32 md:w-40"
  />

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
    {/* Left: Text */}
    <div className="md:w-1/2 text-white z-10">
      <h2 className="text-3xl sm:text-4xl font-serif font-semibold leading-snug">
        Are you eligible for a<br />NDIS Plan?
      </h2>
    </div>

    {/* Right: Info Box */}
    <div className="md:w-1/2 bg-white rounded-lg shadow-md p-6 z-10">
      <p className="text-gray-700 mb-4">
        If you are unsure whether you qualify for an NDIS support plan, visit the NDIS website and submit an application. You will need to provide evidence of:
      </p>
      <ul className="space-y-2 mb-6">
        <li className="flex items-start">
          <span className="text-orange-500 mr-2">»</span> <span>Your age</span>
        </li>
        <li className="flex items-start">
          <span className="text-orange-500 mr-2">»</span> <span>Australian citizenship or permanent residency</span>
        </li>
        <li className="flex items-start">
          <span className="text-orange-500 mr-2">»</span> <span>That you live in Australia permanently</span>
        </li>
        <li className="flex items-start">
          <span className="text-orange-500 mr-2">»</span> <span>Your disability</span>
        </li>
      </ul>

      <button className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-6 rounded flex items-center gap-2">
        <span className="text-white">❓</span> HOW TO APPLY
      </button>
    </div>
  </div>
</div>










<div className="bg-[#3c434a] py-16 px-4 pb-40 md:px-10">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
    
    {/* Left Content */}
    <div className="md:w-1/2 text-white">
      <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-4">
        Get in <span className="text-yellow-400 italic">touch</span>
      </h2>
      <p className="text-base sm:text-lg leading-relaxed">
        Get in touch with us to discuss your NDIS support needs and to chat about how we can assist in your long-term care plan.
      </p>
    </div>

    {/* Form */}
    <div className="md:w-1/2 bg-[#3c434a]">
      <form className="space-y-5">
        <div>
          <label className="block text-white mb-1">Name</label>
          <input type="text" className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none" />
        </div>
        <div>
          <label className="block text-white mb-1">Email</label>
          <input type="email" className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <label className="block text-white mb-1">Phone</label>
            <input type="tel" className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none" />
          </div>
          <div className="w-full">
            <label className="block text-white mb-1">Preferred Contact</label>
            <select className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none">
              <option>Phone</option>
              <option>Email</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-white mb-1">Message</label>
          <textarea rows="4" className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none"></textarea>
        </div>
        <div>
          {/* Replace with your actual reCAPTCHA component or iframe */}
          <div className="bg-black p-4 rounded">
            <p className="text-white">[reCAPTCHA widget here]</p>
          </div>
        </div>
        <button type="submit" className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded font-medium transition-all">
          Submit
        </button>
      </form>
    </div>
  </div>
</div>





    </>
  );
};

export default InfoSection;
