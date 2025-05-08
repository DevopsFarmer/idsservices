

const GuidingPrinciples = () => {
  return (
    <>

<div className="bg-[rgb(66,73,79)] py-12 mt-60 px-4">
  <div className="max-w-6xl mx-auto bg-white -top-40 rounded-2xl shadow-md p-10 relative ">
    {/* Butterfly Image */}
    <div className="absolute  -top-20 left-1/2 transform -translate-x-1/2">
      <img
        src="/image1.png" // Change to your actual image path
        alt="Butterfly"
        className="w-40 rounded-full"
      />
    </div>

    {/* Heading */}
    <h2 className="text-center text-2xl sm:text-3xl font-medium text-gray-700 mt-12">
      Our guiding <span className="text-pink-500 font-handwritten">principles</span>
    </h2>

    {/* Description */}
    <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
      Our guiding principles support the actions and services we provide to enhance the
      well-being and lifestyles of our participants.
    </p>

    {/* 3 Principles */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
      {/* Choice */}
      <div>
        <h3 className="text-5xl text-orange-500 font-handwritten">1.</h3>
        <h4 className="mt-2 text-lg font-semibold tracking-wider text-gray-800">CHOICE</h4>
        <p className="mt-2 text-gray-600 text-sm">
          Giving you back the freedom in your choices and enabling self-empowerment.
        </p>
      </div>

      {/* Inclusion */}
      <div>
        <h3 className="text-5xl text-orange-500 font-handwritten">2.</h3>
        <h4 className="mt-2 text-lg font-semibold tracking-wider text-gray-800">INCLUSION</h4>
        <p className="mt-2 text-gray-600 text-sm">
          Supporting self-sufficiency and integration into everyday activities.
        </p>
      </div>

      {/* Respect */}
      <div>
        <h3 className="text-5xl text-orange-500 font-handwritten">3.</h3>
        <h4 className="mt-2 text-lg font-semibold tracking-wider text-gray-800">RESPECT</h4>
        <p className="mt-2 text-gray-600 text-sm">
          Respecting the dignity and ongoing confidentiality of every individual.
        </p>
      </div>
    </div>
  </div>
</div>




    </>
  );
};

export default GuidingPrinciples;
