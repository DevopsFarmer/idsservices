const GetInTouch = () => {
  return (
    <>
      <div className="bg-[#3c434a] py-16 px-4 pb-40 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 text-white">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-4">
              Get in <span className="text-yellow-400 italic">touch</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Get in touch with us to discuss your NDIS support needs and to chat about how we can
              assist in your long-term care plan.
            </p>
          </div>

          {/* Form */}
          <div className="md:w-1/2 bg-[#3c434a]">
            <form className="space-y-5">
              <div>
                <label className="block text-white mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-white mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full">
                  <label className="block text-white mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none"
                  />
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
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none"
                ></textarea>
              </div>
              <div>
                {/* Replace with your actual reCAPTCHA component or iframe */}
                <div className="bg-black p-4 rounded">
                  <p className="text-white">[reCAPTCHA widget here]</p>
                </div>
              </div>
              <button
                type="submit"
                className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded font-medium transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default GetInTouch
