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
   








<div className="bg-white max-w-6xl px-20 mx-auto">
<h2 className="text-center text-4xl sm:text-4xl font-medium text-gray-700 mt-12">
Someone by   <span className="text-pink-500 font-handwritten">your</span> side
    </h2>
  <SupportSection
    image="/image2.png"
    title="SUPPORT COORDINATION & IN HOME SUPPORT"
    description="We will help you take action and follow your plan, supporting you in achieving your goals. Assistance with everyday tasks and personal care."
  />
  <SupportSection
    image="/image2.png"
    title="SUPPORT COORDINATION & IN HOME SUPPORT"
    description="We will help you take action and follow your plan, supporting you in achieving your goals. Assistance with everyday tasks and personal care."
    reverse
  />
  <SupportSection
    image="/image2.png"
    title="SUPPORT COORDINATION & IN HOME SUPPORT"
    description="We will help you take action and follow your plan, supporting you in achieving your goals. Assistance with everyday tasks and personal care."
  />
  <SupportSection
    image="/image2.png"
    title="SUPPORT COORDINATION & IN HOME SUPPORT"
    description="We will help you take action and follow your plan, supporting you in achieving your goals. Assistance with everyday tasks and personal care."
    reverse
  />
</div>











    </>
  );
};

export default InfoSection;
