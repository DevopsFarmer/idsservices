import React from 'react';

const PersonCentred = () => {
  return (
    <div
      className="h-[600px] bg-no-repeat bg-bottom bg-cover overflow-hidden"
      style={{
        backgroundImage:
          "url('https://idsservices.com.au/wp-content/uploads/2023/08/aboriginal-art.png')",
      }}
    >
      <div className="px-6 md:px-16 h-full flex items-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          {/* Optional Image on Left */}
          <div className="hidden md:block">
         
          </div>

          {/* Text Section on Right */}
          <div className="w-full space-y-8">
            {[
              "Our Going to the park, beach or lake",
              "Participating in bowling, golf, swimming, outings to the movies or shopping",
              "Our NDIS Community participation Melbourne team helps in attending sporting games, going to the gym, catching up with or meeting new",
              "Joining religious or community events, attending art, drama or music classes",
            ].map((text, i) => (
              <div key={i} className="flex items-start space-x-4">
                <span className="text-orange-500 text-2xl">»</span>
                <h3 className="text-pink-500 font-semibold text-lg uppercase mb-1">
                  {text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCentred;
