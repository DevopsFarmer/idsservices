import { FileText } from 'lucide-react'; // Optional icon (use Lucide or any icon lib)



const NDISplan = () => {
  return (
    <>

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







    </>
  );
};

export default NDISplan;
