import { title } from 'process'
import React from 'react'

const PersonCentred = () => {
  const data = [
    {
      title: 'SHORT-TERM ACCOMMODATION',
      description: [
        `Invictus Disability Support Services provides Short Term Accommodation (STA), including respite care NDIS. Short-Term Accommodation is designed to give both you and your support network a hard-earned break. It is funding covered by NDIS for support and accommodation away from your usual home, for up to 14 days at time. It’s often accessible when your regular care team isn’t available, or to give you the chance to try new activities in fresh surroundings.`,
        `STA includes all expenses in a 24-hour period including assistance with daily personal activities, odation, food and other activities. It gives you a chance to try new things, make new friends or develop new skills. Our goal is to make our short stay accommodation your home away from home.`,
      ],
    },
    {
      title: 'MEDIUM-TERM ACCOMMODATION',
      description: [
        `Invictus Disability Support Services provides Medium Term Accommodation (MTA) so you have somewhere to live while waiting for your long term housing solution to be confirmed. MTA might be used in situations such as those who are waiting for home modifications to be finalised or participants ready to leave hospital who are waiting for disability related home modifications to be completed or for permanent accommodation to become available.`,
        `NDIS Medium Term Accommodation covers up to 90 days of funding in furnished accommodation as well as core supports.`,
      ],
    },
    {
      title: 'Supported Independent Living',
      description: [
        `NDIS Supported Independent Living Melbourne is NDIS funding that helps people with disability to live as independently as possible. SIL funding is typically for people who need 24/7 support while living in a shared home. It exists to cover the cost of support staff in the house. Whereas Supported Independent Living is the funding for support services, Specialist Disability Accommodation is the accommodation in which those services are delivered.`,
        `Invictus Disability Support Services NDIS Supported Independent living mildura can help you enjoy your independence and build your confidence while living as independently as possible, with all the support you need.`,
      ],
    },
  ]

  return (
    <>
      <div
        className="md:h-[900px] bg-no-repeat  bg-bottom bg-cover overflow-hidden"
        style={{
          backgroundImage:
            "url('https://idsservices.com.au/wp-content/uploads/2023/08/aboriginal-art.png')",
        }}
      >
        <div className=" px-6 md:px-16">
          <div className=" py-16 px-6 md:px-20 space-y-20">
            {data.map((section, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Left Side: Icon and Title */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right">
                  <img
                    src="/LilyCare1.svg" // Replace with your butterfly image path
                    alt="butterfly"
                    className="w-[700] h-[700] mb-2"
                  />
                  <h2 className="text-2xl md:text-3xl font-serif tracking-widest text-gray-700 uppercase leading-snug">
                    {section.title}
                  </h2>
                </div>

                {/* Right Side: Description */}
                <div className="md:col-span-2 text-gray-700 space-y-4 text-justify">
                  {section.description.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonCentred
