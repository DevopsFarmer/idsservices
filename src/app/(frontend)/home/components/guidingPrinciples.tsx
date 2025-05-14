const GuidingPrinciples = () => {
  return (
    <>
      <div
        className="mt-60 md:h-[470px] bg-[rgb(66,73,79)] bg-cover bg-top bg-no-repeat  "
        style={{
          backgroundImage:
            "url('https://idsservices.com.au/wp-content/uploads/2023/08/aboriginal-art_2.png')",
        }}
      >
        <div className="max-w-5xl md:mx-auto mx-10 bg-white -top-40 rounded-2xl shadow-md p-10 relative">
          {/* LilyCare Image */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
            <img src="/LilyCare1.svg" alt="LilyCare" className="w-[700px]" />
          </div>

          {/* Heading */}
          <h2 className="text-center text-2xl sm:text-5xl font-medium text-gray-700 mt-12">
            Our guiding <span className="font-signature text-8xl text-[#F389A5] ">principles</span>
          </h2>

          {/* Description */}
          <p className="text-center text-gray-600 font-mono mt-4 max-w-2xl mx-auto">
            Our guiding principles support the actions and services we provide to enhance the
            well-being and lifestyles of our participants.
          </p>

          {/* 3 Principles */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-8xl text-orange-500 font-signature">1.</h3>
              <h4 className="mt-2   tracking-widest text-xl  text-gray-600">CHOICE</h4>
              <p className="mt-2 text-gray-600 text-sm font-mono">
                Giving you back the freedom in your choices and enabling self-empowerment.
              </p>
            </div>
            <div>
              <h3 className="text-8xl text-orange-500 font-signature">2.</h3>
              <h4 className="mt-2 text-xl  tracking-widest  text-gray-600">INCLUSION</h4>
              <p className="mt-2 text-gray-600 text-sm font-mono">
                Supporting self-sufficiency and integration into everyday activities.
              </p>
            </div>
            <div>
              <h3 className="text-8xl text-orange-500 font-signature">3.</h3>
              <h4 className="mt-2 text-xl  tracking-widest  text-gray-600">RESPECT</h4>
              <p className="mt-2 text-gray-600 text-sm font-mono">
                Respecting the dignity and ongoing confidentiality of every individual.
              </p>
            </div>
          </div>
        </div>
        <img
          className="w-full border-t h-10"
          src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22100%25%22%20viewBox%3D%220%200%201667%20102%22%20preserveAspectRatio%3D%22none%22%20fill%3D%22rgba%28249%2C249%2C251%2C1%29%22%3E%3Cpath%20d%3D%22M0%20102V18L14%2023H34L43%2028H70L83%2023L88%2018L110%2023L165%2038C169.13%2036.9132%20174.712%2035.4721%20180.5%2034.0232C184.719%2032.9671%20190.047%2035.9301%20194%2035C201.258%2033.2924%20206.255%2028%20208%2028C209.361%2028%20213.031%2030.7641%20215.5%2029.5C216.777%2028.8461%20216.634%2024.4684%20218%2023.652C221.756%2021.407%20227.081%2029.2742%20229.5%2027.5L240.5%2020.625H249.5L256%2017.4737L267%2014L278%2025L280.5%2031.652L287%2029.5L291.5%2035.5L298%2038L304%2035.5L314%2038L325%2037L329.5%2038H336L348%2035.5L354%2028H365L370.5%2020.5L382.5%2020.875L389.5%2017L402%2020.875L409.5%2017L424.5%2018.5L435.5%2017L451%2018.5L463%2017L471.5%2023L478.5%2020.875L487%2024.5L498.5%2025.5L505%2028H510C510.958%2029.5968%20510.605%2033.4726%20512.5%2035.5C514.561%2037.7047%20518.916%2038%20521%2038H530L585%2028L616%2017L632%2010L651.5%2013.5L668.5%2021.7L676.5%2018.1L686%2023.5L694.5%2021.7L705.5%2027.5L717%2026.2L727%2030.6786H733.5L744%2037.5L754%2038L786%2028H814L868%2017L887%2019.1111L898%2023L910%2021.6667L917%2024L927%2022.3333L933%2024L943.5%2020.1957L956.5%2021L964%2017.5217L968%2017L980%2010H1005L1015%2017H1052L1110%2010L1132%200L1141%201.8L1156.5%208L1165.5%206.7L1180.5%2011.625H1188.75L1195.5%2014.6944H1201.5L1209.5%2018L1221%2019.3889L1235%2027L1268%2038L1311%2028L1316%2023L1338%2017L1354%2028L1364%2038L1392%2028.6667L1404.5%2030L1409%2023H1419.5L1427%2017L1437%2020L1445%2028.6667L1456%2023L1470.5%2028.6667L1497.5%2017L1505%2010L1514%2013L1522%2010L1530.5%2012L1536%205L1543.5%208.05L1553%205.40854L1563%2010L1567%200L1584%208.05L1594%206.55L1604.5%202L1614.5%204.75L1631%2011.5L1647.5%208.05L1667%2018V102H0Z%22%20fill%3D%22var%28--awb-color2%29%22%2F%3E%3C%2Fsvg%3E"
        />
      </div>
    </>
  )
}

export default GuidingPrinciples
