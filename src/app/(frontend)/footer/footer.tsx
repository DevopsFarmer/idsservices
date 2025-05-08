import { FaMapMarkerAlt, FaPhone, FaMobileAlt, FaClock, FaFacebookF, FaInstagram, FaEnvelope, FaFax } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700">
      {/* Top Section */}
      <div className="  relative pb-12">
        <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4">
          <img src="/image1.png" alt="Butterfly Logo" className="h-40 rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          
          {/* Find Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">FIND US</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1 text-orange-500" /><span>29 Komona Street, Clyde VIC 3978</span></div>
              <div className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1 text-orange-500" /><span>137 Eighth Street, Mildura VIC 3500</span></div>
              <div className="flex items-start gap-2"><FaFax className="mt-1 text-orange-500" /><span>PO Box 180, Kununurra WA 6743</span></div>
            </div>
            <div className="bg-gray-100 mt-4 text-gray-600 p-3 rounded text-xs">
              Invictus Disability Support Services acknowledges the Australian Aboriginal and Torres Strait Islander peoples...
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2"><FaPhone className="text-orange-500" /><span>1300 468 428 (1300 INVICTUS)</span></div>
              <div className="flex items-center gap-2"><FaPhone className="text-orange-500" /><span>03 5065 3032</span></div>
              <div className="flex items-center gap-2"><FaMobileAlt className="text-orange-500" /><span>+61414849637</span></div>
              <div className="flex items-center gap-2"><FaEnvelope className="text-orange-500" /><span>admin@idssservices.com.au</span></div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">WORKING HOURS</h3>
            <div className="space-y-1">
              <div className="flex items-start gap-2"><FaClock className="mt-1 text-orange-500" /><span><strong>Monday – Friday:</strong> 9am – 5pm</span></div>
              <div className="pl-6"><strong>Saturday:</strong> By appointment</div>
              <div className="pl-6"><strong>Sunday:</strong> Closed</div>
            </div>
            <div className="mt-4">
              <img src="/idis.png" alt="NDIS" className="h-8" />
              <p className="text-xs mt-1">NDIS Registration ID: 4050084209</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
                <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border-t text-center text-xs text-gray-600 py-3 px-4">
        © Invictus Disability Support Services 2023 |
        <a href="#" className="text-pink-600 mx-1 hover:underline">Privacy Policy</a> |
        <a href="#" className="text-pink-600 mx-1 hover:underline">Confidentiality Policy</a> |
        Website by <span className="text-gray-800 font-medium">Chilli Frog Marketing</span>
      </div>
    </footer>
  );
};

export default Footer;
