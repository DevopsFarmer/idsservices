import { FileText } from 'lucide-react'; // Optional icon (use Lucide or any icon lib)



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



    </>
  );
};

export default InfoSection;
