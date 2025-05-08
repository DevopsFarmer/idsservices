type SupportSectionProps = {
  image: string
  title: string
  description: string
  reverse?: boolean
}

const SupportSection = ({ image, title, description, reverse = false }: SupportSectionProps) => {
  return (
    <div className={`mx-auto flex flex-col p-18 md:flex-row items-center gap-10 py-12`}>
      {!reverse && (
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt="Support"
            className="rounded-tl-[200px] rounded-br-[200px] object-cover w-full p-10 h-auto"
          />
        </div>
      )}

      <div className="flex items-center justify-center w-1/2">
        <div className="w-full text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-serif text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-xl text-center leading-relaxed mb-6">{description}</p>

          <div className="flex items-center justify-center">
            <button className="border border-pink-400 text-pink-500 px-6 py-2 rounded-xl font-medium hover:bg-pink-50 transition-all duration-200">
              FIND OUT MORE <span className="ml-2">➤</span>
            </button>
          </div>
        </div>
      </div>

      {reverse && (
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt="Support"
            className="rounded-tl-[200px] rounded-br-[200px] object-cover p-10 w-full h-auto"
          />
        </div>
      )}
    </div>
  )
}

const Card = () => {
  return (
    <>
      <div className="bg-white max-w-7xl px-20 mx-auto">
        <h2 className="text-center text-4xl sm:text-6xl font-medium text-gray-700 mt-12">
          Someone by <span className="text-pink-500 font-handwritten">your</span> side
        </h2>
        <SupportSection
          image="/image2.png"
          title="SUPPORT COORDINATION & IN HOME SUPPORT"
          description="We will help you take action and follow your plan, supporting you in achieving your goals. Assistance with everyday tasks and personal care."
        />
        <SupportSection
          image="/image2.png"
          title="SUPPORT COORDINATION & IN HOME SUPPORT"
          description="We will help you take action and follow your plan, supporting you in achieving your goals. Assistance with everyday tasks and personal care."
          reverse
        />
        <SupportSection
          image="/image2.png"
          title="SUPPORT COORDINATION & IN HOME SUPPORT"
          description="We will help you take action and follow your plan, supporting you in achieving your goals. Assistance with everyday tasks and personal care."
        />
        <SupportSection
          image="/image2.png"
          title="SUPPORT COORDINATION & IN HOME SUPPORT"
          description="We will help you take action and follow your plan, supporting you in achieving your goals. Assistance with everyday tasks and personal care."
          reverse
        />
      </div>
    </>
  )
}

export default Card
