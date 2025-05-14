import {
  FaMapMarkerAlt,
  FaPhone,
  FaMobileAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaFax,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <img
        className="  w-full  bg-[#42494f] h-5 border-t border-[#ffffff]  "
        src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22100%25%22%20viewBox%3D%220%200%201667%20102%22%20preserveAspectRatio%3D%22none%22%20fill%3D%22rgba%28255%2C255%2C255%2C1%29%22%3E%3Cpath%20d%3D%22M0%20102V18L14%2023H34L43%2028H70L83%2023L88%2018L110%2023L165%2038C169.13%2036.9132%20174.712%2035.4721%20180.5%2034.0232C184.719%2032.9671%20190.047%2035.9301%20194%2035C201.258%2033.2924%20206.255%2028%20208%2028C209.361%2028%20213.031%2030.7641%20215.5%2029.5C216.777%2028.8461%20216.634%2024.4684%20218%2023.652C221.756%2021.407%20227.081%2029.2742%20229.5%2027.5L240.5%2020.625H249.5L256%2017.4737L267%2014L278%2025L280.5%2031.652L287%2029.5L291.5%2035.5L298%2038L304%2035.5L314%2038L325%2037L329.5%2038H336L348%2035.5L354%2028H365L370.5%2020.5L382.5%2020.875L389.5%2017L402%2020.875L409.5%2017L424.5%2018.5L435.5%2017L451%2018.5L463%2017L471.5%2023L478.5%2020.875L487%2024.5L498.5%2025.5L505%2028H510C510.958%2029.5968%20510.605%2033.4726%20512.5%2035.5C514.561%2037.7047%20518.916%2038%20521%2038H530L585%2028L616%2017L632%2010L651.5%2013.5L668.5%2021.7L676.5%2018.1L686%2023.5L694.5%2021.7L705.5%2027.5L717%2026.2L727%2030.6786H733.5L744%2037.5L754%2038L786%2028H814L868%2017L887%2019.1111L898%2023L910%2021.6667L917%2024L927%2022.3333L933%2024L943.5%2020.1957L956.5%2021L964%2017.5217L968%2017L980%2010H1005L1015%2017H1052L1110%2010L1132%200L1141%201.8L1156.5%208L1165.5%206.7L1180.5%2011.625H1188.75L1195.5%2014.6944H1201.5L1209.5%2018L1221%2019.3889L1235%2027L1268%2038L1311%2028L1316%2023L1338%2017L1354%2028L1364%2038L1392%2028.6667L1404.5%2030L1409%2023H1419.5L1427%2017L1437%2020L1445%2028.6667L1456%2023L1470.5%2028.6667L1497.5%2017L1505%2010L1514%2013L1522%2010L1530.5%2012L1536%205L1543.5%208.05L1553%205.40854L1563%2010L1567%200L1584%208.05L1594%206.55L1604.5%202L1614.5%204.75L1631%2011.5L1647.5%208.05L1667%2018V102H0Z%22%20fill%3D%22var%28--awb-color1%29%22%2F%3E%3C%2Fsvg%3E"
        alt=""
      />

      <footer className="bg-white text-gray-700">
        {/* Top Section */}
        <div className="  relative pb-12">
          <div className="absolute -top-24 left-1/2 transform -translate-x-1/2">
            <div className="bg-white rounded-full w-36 h-36 flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src="/LilyCare1.svg"
                alt="Lilycare Logo"
                className="h-28 w-28 scale-[4] object-contain"
              />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 pt-20 pb-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            {/* Find Us */}
            <div>
              <h3 className="text-2xl  text-center  tracking-widest mb-4">FIND US</h3>
              <div className="space-y-2  font-Arial">
                <div className="flex py-4 items-start gap-2">
                  <FaMapMarkerAlt className="mt-1 text-orange-500" />
                  <span>29 Komona Street, Clyde VIC 3978</span>
                </div>
                <div className="flex py-4 items-start gap-2">
                  <FaMapMarkerAlt className="mt-1 text-orange-500" />
                  <span>137 Eighth Street, Mildura VIC 3500</span>
                </div>
                <div className="flex py-4 items-start gap-2">
                  <FaFax className="mt-1 text-orange-500" />
                  <span>PO Box 180, Kununurra WA 6743</span>
                </div>
              </div>
              <div className="bg-gray-100 mt-4  text-gray-600 p-3 rounded text-center text-xs">
                Invictus Disability Support Services acknowledges the Australian Aboriginal and
                Torres Strait Islander peoples as the first inhabitants of the nation and the
                traditional custodians of the lands where we live, learn and work.
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-2xl  tracking-widest text-center mb-4">CONTACT US</h3>
              <div className="space-y-2 font-Arial">
                <div className="flex py-4 items-start gap-4">
                  <FaPhone className="text-orange-500  mt-1" />
                  <div>
                    <p>1300 468 428</p>
                    <p className="text-sm text-gray-500">(1300 INVICTUS)</p>
                  </div>
                </div>
                <div className="flex pb-2 items-start gap-4">
                  <FaPhone className="text-orange-500  mt-1" />
                  <p>03 5065 3032</p>
                </div>

                <div className="flex py-4 items-start gap-4">
                  <FaMobileAlt className="text-orange-500  mt-1" />
                  <p>+61 414 849 637</p>
                </div>

                <div className="flex py-4 items-start gap-4">
                  <FaEnvelope className="text-orange-500  mt-1" />
                  <p>admin@idssservices.com.au</p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div>
              <h3 className="text-2xl font- text-center tracking-widest mb-4">WORKING HOURS</h3>
              <div className="space-y-2 pl-10 font-extralight text-base italic  font-Arial">
                <div className="flex pt-4 items-start gap-2">
                  <FaClock className="mt-1 pr-4 text-orange-500" />
                  <span>Monday – Friday: 9am – 5pm</span>
                </div>
                <div className="pl-6">Saturday: By appointment</div>
                <div className="pl-6">Sunday: Closed</div>
              </div>
              <div className="mt-4 md:p-10 flex flex-col items-center text-center">
                <img src="/idis.png" alt="NDIS" className="h-10" />
                <p className="text-xs mt-1">NDIS Registration ID: 4050084209</p>
                <div className="flex gap-4 pt-6 mt-4">
                  <a href="#" className="hover:text-blue-500">
                    <FaFacebookF className="h-8" />
                  </a>
                  <a href="#" className="hover:text-pink-500">
                    <FaInstagram className="h-6 w-6 mt-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-white border-t text-center text-xs text-gray-600 py-3 px-4">
          © Invictus Disability Support Services 2023 |
          <a href="#" className="text-pink-600 mx-1 hover:underline">
            Privacy Policy
          </a>{' '}
          |
          <a href="#" className="text-pink-600 mx-1 hover:underline">
            Confidentiality Policy
          </a>{' '}
          | Website by <span className="text-gray-800 font-medium">Chilli Frog Marketing</span>
        </div>
      </footer>
    </>
  )
}

export default Footer
