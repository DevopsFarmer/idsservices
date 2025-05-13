const InHomeSupport = () => {
  return (
    <>
      <img
        className="  w-full   h-5 border-b border-[#42494f] rotate-180  "
        src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22100%25%22%20viewBox%3D%220%200%201667%20102%22%20preserveAspectRatio%3D%22none%22%20fill%3D%22rgba%28255%2C255%2C255%2C1%29%22%3E%3Cpath%20d%3D%22M0%20102V18L14%2023H34L43%2028H70L83%2023L88%2018L110%2023L165%2038C169.13%2036.9132%20174.712%2035.4721%20180.5%2034.0232C184.719%2032.9671%20190.047%2035.9301%20194%2035C201.258%2033.2924%20206.255%2028%20208%2028C209.361%2028%20213.031%2030.7641%20215.5%2029.5C216.777%2028.8461%20216.634%2024.4684%20218%2023.652C221.756%2021.407%20227.081%2029.2742%20229.5%2027.5L240.5%2020.625H249.5L256%2017.4737L267%2014L278%2025L280.5%2031.652L287%2029.5L291.5%2035.5L298%2038L304%2035.5L314%2038L325%2037L329.5%2038H336L348%2035.5L354%2028H365L370.5%2020.5L382.5%2020.875L389.5%2017L402%2020.875L409.5%2017L424.5%2018.5L435.5%2017L451%2018.5L463%2017L471.5%2023L478.5%2020.875L487%2024.5L498.5%2025.5L505%2028H510C510.958%2029.5968%20510.605%2033.4726%20512.5%2035.5C514.561%2037.7047%20518.916%2038%20521%2038H530L585%2028L616%2017L632%2010L651.5%2013.5L668.5%2021.7L676.5%2018.1L686%2023.5L694.5%2021.7L705.5%2027.5L717%2026.2L727%2030.6786H733.5L744%2037.5L754%2038L786%2028H814L868%2017L887%2019.1111L898%2023L910%2021.6667L917%2024L927%2022.3333L933%2024L943.5%2020.1957L956.5%2021L964%2017.5217L968%2017L980%2010H1005L1015%2017H1052L1110%2010L1132%200L1141%201.8L1156.5%208L1165.5%206.7L1180.5%2011.625H1188.75L1195.5%2014.6944H1201.5L1209.5%2018L1221%2019.3889L1235%2027L1268%2038L1311%2028L1316%2023L1338%2017L1354%2028L1364%2038L1392%2028.6667L1404.5%2030L1409%2023H1419.5L1427%2017L1437%2020L1445%2028.6667L1456%2023L1470.5%2028.6667L1497.5%2017L1505%2010L1514%2013L1522%2010L1530.5%2012L1536%205L1543.5%208.05L1553%205.40854L1563%2010L1567%200L1584%208.05L1594%206.55L1604.5%202L1614.5%204.75L1631%2011.5L1647.5%208.05L1667%2018V102H0Z%22%20fill%3D%22var%28--awb-color1%29%22%2F%3E%3C%2Fsvg%3E"
        alt=""
        style={{
          background: 'linear-gradient(rgb(243, 137, 165) 25%, rgb(244, 127, 74) 100%)',
        }}
      />

      <div
        className="relative pb-40 py-16 px-4 md:px-20 text-white"
        style={{
          background: 'linear-gradient(rgb(243, 137, 165) 25%, rgb(244, 127, 74) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold uppercase">NDIS LIFE SKILLS DEVELOPMENT AND TRAINING</h2>
          <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-white/90">
          We help you build confidence, self-esteem and independence, so you can live as autonomously as possible and participate in all life has to offer. Training by our friendly and highly experienced team can be provided either individually or through group activities and can include NDIS development life skills Melbourne, communication and social skills, problem solving and managing funding of supports.
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-white/90">
          By participating in these activities, you improve your ability to manage the challenges of life, including building your networks of support. And if you have a particular ability, skill or unique interest, we work with you to put a program of learning together that helps you achieve your goals.
          </p>
        </div>
      
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
          {/* Left - Services */}
          <div className="flex-1 text-white pt-20">
          <h3 className="text-lg md:text-xl font-semibold uppercase tracking-wide mb-6 text-center md:text-left">
          Our assistance with development life skills NDIS and training includes:
        </h3>
            <ul className=" text-black space-y-4 text-base md:text-lg">
              {[
                'Travel training, including the use of public transport',
                'Cooking, menu planning and nutrition skills',
                'Managing money, budgeting and bill payment',
                'Computer skills',
                'Personal safety training',
                'Supportive training for parents and carers',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-white">»</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* <p className="mt-6 text-white/90 text-sm md:text-base">
              Our NDIS In home support Melbourne can help families or carers to have time away from
              care giving to refresh and renew, whilst also helping participants to improve their
              quality of life by remaining independent.
            </p> */}
          </div>

          {/* Right - Image */}
          <div className="flex-1">
            <img
              src="/service/service4.png"
              alt="In-home support"
              className="rounded-[0px_100px_0px_100px] w-[500px] object-cover"
            />
          </div>
        </div>
      </div>

      <img
        className="  w-full   h-5 border-b border-[#42494f]   "
        src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22100%25%22%20viewBox%3D%220%200%201667%20102%22%20preserveAspectRatio%3D%22none%22%20fill%3D%22rgba%28255%2C255%2C255%2C1%29%22%3E%3Cpath%20d%3D%22M0%20102V18L14%2023H34L43%2028H70L83%2023L88%2018L110%2023L165%2038C169.13%2036.9132%20174.712%2035.4721%20180.5%2034.0232C184.719%2032.9671%20190.047%2035.9301%20194%2035C201.258%2033.2924%20206.255%2028%20208%2028C209.361%2028%20213.031%2030.7641%20215.5%2029.5C216.777%2028.8461%20216.634%2024.4684%20218%2023.652C221.756%2021.407%20227.081%2029.2742%20229.5%2027.5L240.5%2020.625H249.5L256%2017.4737L267%2014L278%2025L280.5%2031.652L287%2029.5L291.5%2035.5L298%2038L304%2035.5L314%2038L325%2037L329.5%2038H336L348%2035.5L354%2028H365L370.5%2020.5L382.5%2020.875L389.5%2017L402%2020.875L409.5%2017L424.5%2018.5L435.5%2017L451%2018.5L463%2017L471.5%2023L478.5%2020.875L487%2024.5L498.5%2025.5L505%2028H510C510.958%2029.5968%20510.605%2033.4726%20512.5%2035.5C514.561%2037.7047%20518.916%2038%20521%2038H530L585%2028L616%2017L632%2010L651.5%2013.5L668.5%2021.7L676.5%2018.1L686%2023.5L694.5%2021.7L705.5%2027.5L717%2026.2L727%2030.6786H733.5L744%2037.5L754%2038L786%2028H814L868%2017L887%2019.1111L898%2023L910%2021.6667L917%2024L927%2022.3333L933%2024L943.5%2020.1957L956.5%2021L964%2017.5217L968%2017L980%2010H1005L1015%2017H1052L1110%2010L1132%200L1141%201.8L1156.5%208L1165.5%206.7L1180.5%2011.625H1188.75L1195.5%2014.6944H1201.5L1209.5%2018L1221%2019.3889L1235%2027L1268%2038L1311%2028L1316%2023L1338%2017L1354%2028L1364%2038L1392%2028.6667L1404.5%2030L1409%2023H1419.5L1427%2017L1437%2020L1445%2028.6667L1456%2023L1470.5%2028.6667L1497.5%2017L1505%2010L1514%2013L1522%2010L1530.5%2012L1536%205L1543.5%208.05L1553%205.40854L1563%2010L1567%200L1584%208.05L1594%206.55L1604.5%202L1614.5%204.75L1631%2011.5L1647.5%208.05L1667%2018V102H0Z%22%20fill%3D%22var%28--awb-color1%29%22%2F%3E%3C%2Fsvg%3E"
        alt=""
        style={{
            background: 'linear-gradient(rgb(243, 137, 165) 25%, rgb(244, 127, 74) 100%)',
          }}
      />
      
    </>
  )
}

export default InHomeSupport

// import React from 'react'

// export default async function InHomesport() {

//   return (
//     <>
//   <img
//     className="  w-full   h-5 border-b border-[#42494f] rotate-180  "
//     src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22100%25%22%20viewBox%3D%220%200%201667%20102%22%20preserveAspectRatio%3D%22none%22%20fill%3D%22rgba%28255%2C255%2C255%2C1%29%22%3E%3Cpath%20d%3D%22M0%20102V18L14%2023H34L43%2028H70L83%2023L88%2018L110%2023L165%2038C169.13%2036.9132%20174.712%2035.4721%20180.5%2034.0232C184.719%2032.9671%20190.047%2035.9301%20194%2035C201.258%2033.2924%20206.255%2028%20208%2028C209.361%2028%20213.031%2030.7641%20215.5%2029.5C216.777%2028.8461%20216.634%2024.4684%20218%2023.652C221.756%2021.407%20227.081%2029.2742%20229.5%2027.5L240.5%2020.625H249.5L256%2017.4737L267%2014L278%2025L280.5%2031.652L287%2029.5L291.5%2035.5L298%2038L304%2035.5L314%2038L325%2037L329.5%2038H336L348%2035.5L354%2028H365L370.5%2020.5L382.5%2020.875L389.5%2017L402%2020.875L409.5%2017L424.5%2018.5L435.5%2017L451%2018.5L463%2017L471.5%2023L478.5%2020.875L487%2024.5L498.5%2025.5L505%2028H510C510.958%2029.5968%20510.605%2033.4726%20512.5%2035.5C514.561%2037.7047%20518.916%2038%20521%2038H530L585%2028L616%2017L632%2010L651.5%2013.5L668.5%2021.7L676.5%2018.1L686%2023.5L694.5%2021.7L705.5%2027.5L717%2026.2L727%2030.6786H733.5L744%2037.5L754%2038L786%2028H814L868%2017L887%2019.1111L898%2023L910%2021.6667L917%2024L927%2022.3333L933%2024L943.5%2020.1957L956.5%2021L964%2017.5217L968%2017L980%2010H1005L1015%2017H1052L1110%2010L1132%200L1141%201.8L1156.5%208L1165.5%206.7L1180.5%2011.625H1188.75L1195.5%2014.6944H1201.5L1209.5%2018L1221%2019.3889L1235%2027L1268%2038L1311%2028L1316%2023L1338%2017L1354%2028L1364%2038L1392%2028.6667L1404.5%2030L1409%2023H1419.5L1427%2017L1437%2020L1445%2028.6667L1456%2023L1470.5%2028.6667L1497.5%2017L1505%2010L1514%2013L1522%2010L1530.5%2012L1536%205L1543.5%208.05L1553%205.40854L1563%2010L1567%200L1584%208.05L1594%206.55L1604.5%202L1614.5%204.75L1631%2011.5L1647.5%208.05L1667%2018V102H0Z%22%20fill%3D%22var%28--awb-color1%29%22%2F%3E%3C%2Fsvg%3E"
//     alt=""
//     style={{
//         background: 'linear-gradient(rgb(243, 137, 165) 25%, rgb(244, 127, 74) 100%)',
//       }}
//   />
//     <div className=" font-Arial text-gray-800 py-16 px-4">

//       <h1 className=' text-center text-orange-400 py-18 text-6xl '>SUPPORT COORDINATION</h1>
//       <div className="max-w-4xl mx-auto text-center font-thin space-y-6 text-xl">
//         <p className=" leading-relaxed">
//         At Invictus Disability Support Services, our Support Coordinators Perth and NDIS Support Coordination Melbourne teams bring extensive experience working with individuals with disabilities and their families. Our coordinators hold qualifications in social work and have a deep background in assisting people with psycho-social disabilities and those involved in the justice system.
//         </p>
//         <p className=" leading-relaxed">
//         Through our Support Coordination services, a dedicated Support Coordinator will help you understand and implement the funded supports in your NDIS plan. will connect you to community services, mainstream options, and other government resources. Our NDIS Support Coordination Mildura team focus on building your skills and linking you to the right providers, ensuring you are supported every step of the way.
//         </p>

//       </div>
//     </div>
    //   <img
    //     className="  w-full   h-5 border-b border-[#42494f]   "
    //     src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22100%25%22%20viewBox%3D%220%200%201667%20102%22%20preserveAspectRatio%3D%22none%22%20fill%3D%22rgba%28255%2C255%2C255%2C1%29%22%3E%3Cpath%20d%3D%22M0%20102V18L14%2023H34L43%2028H70L83%2023L88%2018L110%2023L165%2038C169.13%2036.9132%20174.712%2035.4721%20180.5%2034.0232C184.719%2032.9671%20190.047%2035.9301%20194%2035C201.258%2033.2924%20206.255%2028%20208%2028C209.361%2028%20213.031%2030.7641%20215.5%2029.5C216.777%2028.8461%20216.634%2024.4684%20218%2023.652C221.756%2021.407%20227.081%2029.2742%20229.5%2027.5L240.5%2020.625H249.5L256%2017.4737L267%2014L278%2025L280.5%2031.652L287%2029.5L291.5%2035.5L298%2038L304%2035.5L314%2038L325%2037L329.5%2038H336L348%2035.5L354%2028H365L370.5%2020.5L382.5%2020.875L389.5%2017L402%2020.875L409.5%2017L424.5%2018.5L435.5%2017L451%2018.5L463%2017L471.5%2023L478.5%2020.875L487%2024.5L498.5%2025.5L505%2028H510C510.958%2029.5968%20510.605%2033.4726%20512.5%2035.5C514.561%2037.7047%20518.916%2038%20521%2038H530L585%2028L616%2017L632%2010L651.5%2013.5L668.5%2021.7L676.5%2018.1L686%2023.5L694.5%2021.7L705.5%2027.5L717%2026.2L727%2030.6786H733.5L744%2037.5L754%2038L786%2028H814L868%2017L887%2019.1111L898%2023L910%2021.6667L917%2024L927%2022.3333L933%2024L943.5%2020.1957L956.5%2021L964%2017.5217L968%2017L980%2010H1005L1015%2017H1052L1110%2010L1132%200L1141%201.8L1156.5%208L1165.5%206.7L1180.5%2011.625H1188.75L1195.5%2014.6944H1201.5L1209.5%2018L1221%2019.3889L1235%2027L1268%2038L1311%2028L1316%2023L1338%2017L1354%2028L1364%2038L1392%2028.6667L1404.5%2030L1409%2023H1419.5L1427%2017L1437%2020L1445%2028.6667L1456%2023L1470.5%2028.6667L1497.5%2017L1505%2010L1514%2013L1522%2010L1530.5%2012L1536%205L1543.5%208.05L1553%205.40854L1563%2010L1567%200L1584%208.05L1594%206.55L1604.5%202L1614.5%204.75L1631%2011.5L1647.5%208.05L1667%2018V102H0Z%22%20fill%3D%22var%28--awb-color1%29%22%2F%3E%3C%2Fsvg%3E"
    //     alt=""
    //     style={{
    //         background: 'linear-gradient(rgb(243, 137, 165) 25%, rgb(244, 127, 74) 100%)',
    //       }}
    //   />
//     </>
//   )
// }
