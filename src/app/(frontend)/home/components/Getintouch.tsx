'use client'
import { createClient } from '@supabase/supabase-js'
import React, { useState } from 'react'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { IoCall } from 'react-icons/io5'
import { MdOutlineMail } from 'react-icons/md'
import { MdOutlineWatchLater } from 'react-icons/md'

const GetInTouch = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [preferredContact, setPreferredContact] = useState('')
  const [servicesRequired, setServicesRequired] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const supabase = createClient(
    'https://xyrvbmeprktnueoiqcxr.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5cnZibWVwcmt0bnVlb2lxY3hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNDk1NjUsImV4cCI6MjA2MjYyNTU2NX0.rzxCMQ36DgzvY2C8JXkhajesgG-6mH1kJ9Q5a-B5wy0',
  )

 
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)

    setIsSubmitting(false)
    // Check if the email already exists
    const { data: existingData, error: fetchError } = await supabase
      .from('lilycare')
      .select('*')
      .eq('email', email)
  
    if (fetchError) {
      console.error('Error checking email:', fetchError)
      alert('Something went wrong. Please try again.')
      return
    }
  
    if (existingData && existingData.length > 0) {
      alert('This email has already been used to submit the form.')
      return
    }
  
    // Insert new entry
    const { data, error } = await supabase.from('lilycare').insert([
      {
        first_name: firstName,
        last_name: lastName,
        email,
        preferredContact,
        services: servicesRequired,
        message,
        phone,
      },
    ])
  
    if (error) {
      console.error('Error inserting data:', error)
      alert('Something went wrong, please try again.')
    } else {
      console.log('Data inserted successfully:', data)
      setSuccess(true)
      setFirstName('')
      setLastName('')
      setEmail('')
      setPreferredContact('')
      setServicesRequired('')
      setMessage('')
      setPhone('')
    }
  }




  return (
    <>
 
 <header
  className="relative flex items-center justify-center bg-fixed h-[400px] bg-center bg-cover"
  style={{
    backgroundImage: `url("/getintouch.png")`,
  }}
>
<img className="absolute bottom-96 rotate-180 left-0 w-full border-t border-[#f389a5] h-4" src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22100%25%22%20viewBox%3D%220%200%201667%20102%22%20preserveAspectRatio%3D%22none%22%20fill%3D%22rgba%28243%2C137%2C165%2C1%29%22%3E%3Cpath%20d%3D%22M0%20102V18L14%2023H34L43%2028H70L83%2023L88%2018L110%2023L165%2038C169.13%2036.9132%20174.712%2035.4721%20180.5%2034.0232C184.719%2032.9671%20190.047%2035.9301%20194%2035C201.258%2033.2924%20206.255%2028%20208%2028C209.361%2028%20213.031%2030.7641%20215.5%2029.5C216.777%2028.8461%20216.634%2024.4684%20218%2023.652C221.756%2021.407%20227.081%2029.2742%20229.5%2027.5L240.5%2020.625H249.5L256%2017.4737L267%2014L278%2025L280.5%2031.652L287%2029.5L291.5%2035.5L298%2038L304%2035.5L314%2038L325%2037L329.5%2038H336L348%2035.5L354%2028H365L370.5%2020.5L382.5%2020.875L389.5%2017L402%2020.875L409.5%2017L424.5%2018.5L435.5%2017L451%2018.5L463%2017L471.5%2023L478.5%2020.875L487%2024.5L498.5%2025.5L505%2028H510C510.958%2029.5968%20510.605%2033.4726%20512.5%2035.5C514.561%2037.7047%20518.916%2038%20521%2038H530L585%2028L616%2017L632%2010L651.5%2013.5L668.5%2021.7L676.5%2018.1L686%2023.5L694.5%2021.7L705.5%2027.5L717%2026.2L727%2030.6786H733.5L744%2037.5L754%2038L786%2028H814L868%2017L887%2019.1111L898%2023L910%2021.6667L917%2024L927%2022.3333L933%2024L943.5%2020.1957L956.5%2021L964%2017.5217L968%2017L980%2010H1005L1015%2017H1052L1110%2010L1132%200L1141%201.8L1156.5%208L1165.5%206.7L1180.5%2011.625H1188.75L1195.5%2014.6944H1201.5L1209.5%2018L1221%2019.3889L1235%2027L1268%2038L1311%2028L1316%2023L1338%2017L1354%2028L1364%2038L1392%2028.6667L1404.5%2030L1409%2023H1419.5L1427%2017L1437%2020L1445%2028.6667L1456%2023L1470.5%2028.6667L1497.5%2017L1505%2010L1514%2013L1522%2010L1530.5%2012L1536%205L1543.5%208.05L1553%205.40854L1563%2010L1567%200L1584%208.05L1594%206.55L1604.5%202L1614.5%204.75L1631%2011.5L1647.5%208.05L1667%2018V102H0Z%22%20fill%3D%22var%28--awb-color7%29%22%2F%3E%3C%2Fsvg%3E" alt="" />

<img  className="absolute bottom-0 left-0 w-full border-t border-[#42494fe1] h-4" src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22100%25%22%20viewBox%3D%220%200%201667%20102%22%20preserveAspectRatio%3D%22none%22%20fill%3D%22rgba%2866%2C73%2C79%2C1%29%22%3E%3Cpath%20d%3D%22M0%20102V18L14%2023H34L43%2028H70L83%2023L88%2018L110%2023L165%2038C169.13%2036.9132%20174.712%2035.4721%20180.5%2034.0232C184.719%2032.9671%20190.047%2035.9301%20194%2035C201.258%2033.2924%20206.255%2028%20208%2028C209.361%2028%20213.031%2030.7641%20215.5%2029.5C216.777%2028.8461%20216.634%2024.4684%20218%2023.652C221.756%2021.407%20227.081%2029.2742%20229.5%2027.5L240.5%2020.625H249.5L256%2017.4737L267%2014L278%2025L280.5%2031.652L287%2029.5L291.5%2035.5L298%2038L304%2035.5L314%2038L325%2037L329.5%2038H336L348%2035.5L354%2028H365L370.5%2020.5L382.5%2020.875L389.5%2017L402%2020.875L409.5%2017L424.5%2018.5L435.5%2017L451%2018.5L463%2017L471.5%2023L478.5%2020.875L487%2024.5L498.5%2025.5L505%2028H510C510.958%2029.5968%20510.605%2033.4726%20512.5%2035.5C514.561%2037.7047%20518.916%2038%20521%2038H530L585%2028L616%2017L632%2010L651.5%2013.5L668.5%2021.7L676.5%2018.1L686%2023.5L694.5%2021.7L705.5%2027.5L717%2026.2L727%2030.6786H733.5L744%2037.5L754%2038L786%2028H814L868%2017L887%2019.1111L898%2023L910%2021.6667L917%2024L927%2022.3333L933%2024L943.5%2020.1957L956.5%2021L964%2017.5217L968%2017L980%2010H1005L1015%2017H1052L1110%2010L1132%200L1141%201.8L1156.5%208L1165.5%206.7L1180.5%2011.625H1188.75L1195.5%2014.6944H1201.5L1209.5%2018L1221%2019.3889L1235%2027L1268%2038L1311%2028L1316%2023L1338%2017L1354%2028L1364%2038L1392%2028.6667L1404.5%2030L1409%2023H1419.5L1427%2017L1437%2020L1445%2028.6667L1456%2023L1470.5%2028.6667L1497.5%2017L1505%2010L1514%2013L1522%2010L1530.5%2012L1536%205L1543.5%208.05L1553%205.40854L1563%2010L1567%200L1584%208.05L1594%206.55L1604.5%202L1614.5%204.75L1631%2011.5L1647.5%208.05L1667%2018V102H0Z%22%20fill%3D%22var%28--awb-color6%29%22%2F%3E%3C%2Fsvg%3E" alt="" />

    </header>
    

<div
  className="md:h-[700px] bg-no-repeat bg-[#42494fe1] bg-bottom bg-cover overflow-hidden"
  style={{
    backgroundImage:
      "url('https://idsservices.com.au/wp-content/uploads/2023/08/aboriginal-art.png')",
  }}
>

<div className="bg-[#3c434ad9] py-16 px-4 pb-40 md:px-10 h-full w-full">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-10 text-center md:text-left">
    {/* Left Content */}
    <div className="md:w-1/2 text-white">
      <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-4">
        Get in <span className="text-yellow-400 text-7xl font-signature">touch</span>
      </h2>
      <p className="text-base sm:text-lg leading-relaxed ">
        Get in touch with us to discuss your NDIS support needs and to chat about how we can assist in your long-term care plan.
      </p>
    </div>

    {/* Form */}
    <div className="md:w-1/2 w-full p-4 rounded">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block text-white mb-1">Name</label>
          <input type="text" value={firstName}   onChange={(e) => setFirstName(e.target.value)} className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none" />
        </div>
        <div>
          <label className="block text-white mb-1">Email</label>
          <input type="email"    value={email}   onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <label  className="block text-white mb-1">Phone</label>
            <input type="tel" value={phone}   onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none" />
          </div>
          <div className="w-full">
            <label className="block text-white mb-1">Preferred Contact</label>
            <select value={preferredContact}   onChange={(e) => setPreferredContact(e.target.value)} className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none">
              <option>Phone</option>
              <option>Email</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-white mb-1">Message</label>
          <textarea rows={4} value={message}   onChange={(e) => setMessage(e.target.value)} className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none"></textarea>
        </div>
        {/* <div className="bg-black p-4 rounded">
          <p className="text-white">[reCAPTCHA widget here]</p>
        </div> */}
        <button disabled={isSubmitting} type="submit" className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded font-medium transition-all">
        {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  </div>
</div>



</div>
    </>
  )
}

export default GetInTouch
function setSuccess(arg0: boolean) {
  throw new Error('Function not implemented.')
}

