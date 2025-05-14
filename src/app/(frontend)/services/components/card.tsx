import Link from "next/link"
type SupportSectionProps = {
    image: string
    title: string
    description: string
    reverse?: boolean
    link: string
  }

  const SupportSection = ({ image, title, description,link, reverse = false }: SupportSectionProps) => {
  return (
    <div className={`mx-auto flex flex-col md:flex-row items-center gap-10 py-12`}>

      {!reverse && (
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt="Support"
            className="rounded-tl-[100px] rounded-br-[100px] object-cover w-full h-auto"
          />
        </div>
      )}

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 text-base leading-relaxed mb-6">{description}</p>
        <Link href={link}>
            <button className="border border-pink-400 text-pink-500 px-6 py-2 rounded-xl font-medium hover:bg-pink-50 transition-all duration-200">
              FIND OUT MORE <span className="ml-2">➤</span>
            </button></Link>
      </div>

      {reverse && (
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt="Support"
            className="rounded-tl-[100px] rounded-br-[100px] object-cover w-full h-auto"
          />
        </div>
      )}
    </div>
  )
}

const Card = () => {
  return (
    <>
     <div className="bg-white max-w-7xl md:px-20 mx-auto">
        <h2 className="text-center text-4xl md:text-4xl  font-medium text-gray-700 mt-12">
          Someone by <span className="text-pink-500 font-signature">your</span> side
        </h2>
        <SupportSection
          image="/image2.png"
          title="SUPPORT COORDINATION & IN HOME SUPPORT"
          description="We will help you take action and follow your plan, supporting you in achieving your goals. Assistance with everyday tasks and personal care."
          link="/services/support-coordination-in-home-support-ndis-services-idss"      
       />
        <SupportSection
          image="/image3.png"
          title="COMMUNITY PARTICIPATION & SKILLS DEVELOPMENT"
          description="We are NDIS Registered providers South East suburbs. We support participants in engaging in a wide range of activities and participation in community events. Our goal is to help build confidence, self-esteem, and independence so you can live as autonomously as possible."
          link="/services/community-participation-skills-development"
          reverse
         
        />
        <SupportSection
          image="/image4.png"
          title="RESPITE, ACCOMMODATION & SUPPORTED INDEPENDENT LIVING"
          description="We coordinate both short-term respite care, medium-term accommodation, and 24/7 support while living in a shared home."
          link="/services/respite-accommodationsil-invictus-disability-support-services"
       />
        <SupportSection
          image="/image5.png"
          title="AGED CARE"
          description="Our qualified carers provide experienced and compassionate home care, helping you live independently."
          link="/services/aged-care"
          reverse
        />
      </div>
    </>
  )
}

export default Card
