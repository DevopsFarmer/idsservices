import React from 'react';

const PersonCentred = () => {
  return (
    <>



<div
  className="h-[600px] bg-no-repeat  bg-bottom bg-cover overflow-hidden"
  style={{
    backgroundImage:
      "url('https://idsservices.com.au/wp-content/uploads/2023/08/aboriginal-art.png')",
  }}
>
    <div className=" px-6 md:px-16">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    <div>
      <img 
        src="/service.png" 
        alt="Person with disability and supporter at sunset"
        className="rounded-[100px_0px_100px_0px] w-[400px] object-cover shadow-md"
      />
    </div>

  {/* Text Section */}
  <div className=" w-full  space-y-8">
        {/* Item 1 */}
        <div className="flex items-start space-x-4">
          <span className="text-orange-500 text-2xl">»</span>
          <div>
            <h3 className="text-pink-500 font-semibold text-lg uppercase mb-1">
              Support Connection
            </h3>
            <p className="text-gray-700">
              We assist you in understanding all aspects of your plan and connect you to providers and the broader systems of support to help you achieve your goals.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-start space-x-4">
          <span className="text-orange-500 text-2xl">»</span>
          <div>
            <h3 className="text-pink-500 font-semibold text-lg uppercase mb-1">
              Co-ordination of Supports
            </h3>
            <p className="text-gray-700">
              We work together to design and build your supports and help you build and maintain your networks.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-start space-x-4">
          <span className="text-orange-500 text-2xl">»</span>
          <div>
            <h3 className="text-pink-500 font-semibold text-lg uppercase mb-1">
              Specialist Support Co-ordination
            </h3>
            <p className="text-gray-700">
              If you have complex needs or are in a crisis, we focus on outcomes and help to reduce complexity in your supports.
            </p>
          </div>
        </div>
      </div>

  </div>
</div>
</div>

</>
  );
};

export default PersonCentred;