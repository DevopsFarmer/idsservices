import { FileText } from 'lucide-react' // Optional icon (use Lucide or any icon lib)

const InfoSection = () => {
  return (
    <>
      <section className="bg-gray-50 font-Arial text-gray-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center font-thin space-y-6 text-xl">
          <p className="leading-relaxed">
            Get in touch with Invictus Disability Support Services to explore how we can assist you
            or your loved ones through our tailored NDIS support services. Whether you&rsquo;re in Clyde,
            Mildura, Melbourne, or Kununurra, our friendly team is here to answer your questions and
            guide you through the NDIS journey. We are committed to providing prompt, professional,
            and compassionate support every step of the way.
          </p>
          <p className="leading-relaxed">
            Contact us today via phone, email, or our website to schedule a consultation or learn
            more about our services. At Invictus, your needs and goals are our top priority, and
            we&rsquo;re always ready to help you take the next step toward a more empowered and
            independent life.
          </p>

          {/* Button */}
          <div className="pt-6">
            <button className="inline-flex text-base tracking-widest font-extralight items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white  px-6 py-3 rounded-xl shadow-md transition">
              <FileText className="w-5 h-5" />
              COMPLETE OUR REFERRAL FORM
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default InfoSection
