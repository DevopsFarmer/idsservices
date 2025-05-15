import React from 'react'
import Image from 'next/image'

const PersonCentred = () => {
  return (
    <>
      <div
        className="h-[600px] bg-no-repeat hidden md:block bg-bottom bg-cover overflow-hidden"
        style={{
          backgroundImage:
            "url('https://idsservices.com.au/wp-content/uploads/2023/08/aboriginal-art.png')",
        }}
      >
        <div className="py-16 px-6  md:px-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="/about/image.png"
                alt="Person with disability and supporter at sunset"
                width={400}
                height={300}
                className="rounded-[100px_0px_100px_0px] w-[400px] object-cover shadow-md"
                priority={true}
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-4xl  text-orange-500 tracking-wide leading-tight mb-6">
                PERSON-CENTRED NDIS <br /> SUPPORT & CARE
              </h2>
              <p className="text-gray-700 font-Arial text-lg leading-relaxed mb-4">
                At Invictus Disability Support Services we can help you find the right support with
                person-centred care, no matter how complex.
              </p>
              <p className="text-gray-700 font-Arial text-lg leading-relaxed">
                Our priority is to provide care that is specific and holistic to the needs of people
                living with disabilities. We have highly qualified support workers and support
                co-ordinators to ensure that people living with disabilities have the freedom to
                choose the services and supports that best helps them achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" bg-no-repeat md:hidden  bg-bottom bg-cover overflow-hidden"
        style={{
          backgroundImage:
            "url('https://idsservices.com.au/wp-content/uploads/2023/08/aboriginal-art.png')",
        }}
      >
        <div className="py-16 px-6  md:px-16">
          <div className="max-w-5xl mx-auto px-10   gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-4xl  text-orange-500 tracking-wide leading-tight mb-6">
                PERSON-CENTRED NDIS <br /> SUPPORT & CARE
              </h2>
              <p className="text-gray-700 font-Arial text-lg leading-relaxed mb-4">
                At Invictus Disability Support Services we can help you find the right support with
                person-centred care, no matter how complex.
              </p>
              <p className="text-gray-700 font-Arial pb-10 text-lg leading-relaxed">
                Our priority is to provide care that is specific and holistic to the needs of people
                living with disabilities. We have highly qualified support workers and support
                co-ordinators to ensure that people living with disabilities have the freedom to
                choose the services and supports that best helps them achieve their goals.
              </p>
            </div>

            <div className="flex items-center justify-center pb-20">
              <Image
                src="/about/image.png"
                alt="Person with disability and supporter at sunset"
                width={400}
                height={400}
                className="rounded-[60px_0px_60px_0px] w-[400px] object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonCentred
