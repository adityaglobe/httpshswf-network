import PageBanner from '../Components/PageBanner'
function Volunteer() {
    const joinOptions = [
        {
          title: "Event Support",
          description: "Help organize and manage tournaments, workshops, and outreach events.",
          images: ['/assets/images/event-support.png'],
          bgColor: 'bg-[#E8F5F0]'
        },
        {
          title: "Community Engagement",
          description: "Work on programs that promote sports at the grassroots level.",
          images: ['/assets/images/community_engage.png'],
          bgColor: 'bg-[#F3F4F6]'
        },
        {
          title: "Administrative Assistance",
          description: "Provide support for operations, communications, or logistics.",
          images: ['/assets/images/admin_assist.png'],
          bgColor: 'bg-[#FDF2F8]'
        },
        {
          title: "Coaching Assistance",
          description: "Help coaches during training camps or talent hunts.",
          images: ['/assets/images/coaching_assist.png'],
          bgColor: 'bg-[#ECFDF5]'
        },
        {
          title: "Media & Publicity",
          description: "Contribute to social media, photography, and event coverage.",
          images: ['/assets/images/media_publcty.png'],
          bgColor: 'bg-[#FDF2F8]'
        }
      ];
  return (
    <div>
         <PageBanner 
        title="Join the HSWF Volunteer Network" 
        description="Make a difference by contributing your time, skills, and passion to empower athletes and strengthen the sports community. As an HSWF volunteer, you’ll play a key role in driving impactful initiatives and supporting our mission to make sports accessible to all." 
      />
       <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <div className="w-full lg:w-1/2 relative">
            <img src="/assets/images/member-1.png" alt="Become a player illustration" className="w-full h-auto" />
          </div>

          <div className="w-full lg:w-1/2">
            <h4 className="text-[#4361ee] text-base md:text-lg mb-2">How to</h4>
            <h2 className="text-4xl md:text-5xl text-[#191b2a] mb-8 md:mb-12">Become A <span className='font-bold'>Volunteer</span></h2>
            
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start gap-2 relative">
                <span className="text-4xl font-bold text-[#191b2a] min-w-[48px] absolute left-[-10px] top-8 z-10">01</span>
                <div className="border border-gray-200 rounded-lg p-6 ps-14 w-full relative before:absolute before:w-[48px] before:h-full before:bg-white before:-left-[54px] before:top-0">
                  <h3 className="font-semibold text-lg mb-1">Fill Out the Form:</h3>
                  <p className="text-gray-600">Share your details, skills, and areas of interest.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-2 relative">
                <span className="text-4xl font-bold text-[#191b2a] min-w-[48px] absolute left-[-10px] top-8 z-10">02</span>
                <div className="border border-gray-200 rounded-lg p-6 ps-14 w-full relative before:absolute before:w-[48px] before:h-full before:bg-white before:-left-[54px] before:top-0">
                  <h3 className="font-semibold text-lg mb-1">Submit Your Application:</h3>
                  <p className="text-gray-600">Provide a brief introduction and let us know how you'd like to contribute.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-2 relative">
                <span className="text-4xl font-bold text-[#191b2a] min-w-[48px] absolute left-[-10px] top-8 z-10">03</span>
                <div className="border border-gray-200 rounded-lg p-6 ps-14 w-full relative before:absolute before:w-[48px] before:h-full before:bg-white before:-left-[54px] before:top-0">
                  <h3 className="font-semibold text-lg mb-1">Get Approved:</h3>
                  <p className="text-gray-600">Once reviewed and approved, you'll receive confirmation and be connected to relevant programs.</p>
                </div>
              </div>

              <button className="bg-[#ff002b] text-white px-8 py-4 rounded-lg hover:bg-red-600 transition-colors text-lg">
                Join As Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='py-20 join-option mti-0 bg-[#f8f8f8]'>
        <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-normal text-center mb-16">
        Volunteer <span className="text-[#000] font-bold ">Roles</span>
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {joinOptions.map((option, index) => (
            <div key={index} className={`${option.bgColor} rounded-lg relative overflow-hidden group pb-5`}>
                <div className="relative z-10 p-6">
                <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                </div>
                <div className="rounded-tr-lg overflow-hidden">
                <img 
                    src={option.images[0]} 
                    alt={option.title} 
                    className="w-full h-md-[300px] max-h-80 object-md-cover object-contain"
                />
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>

    <section className="py-16 bg-[url(/assets/images/benefit_bg.png)] bg-center bg-cover">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center mb-16">
            Benefits <span className="text-[#191b2a] font-normal">To Players</span>
          </h2> 
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2 relative">
            {/* Left Benefits */}
            <div className="w-full lg:w-1/3 lg:order-0 order-1 space-y-8 lg:mb-0 mb-5">
              <div className="flex flex-col">
                <div className="flex flex-row gap-3">
                    <img src="/assets/images/benefit_rnd_icon.svg" className="w-5 md:w-10" alt="" />
                    <div className="">
                        <h3 className="text-2xl mb-2">Benefits of <span className='font-bold'>Volunteering</span></h3>
                        <p className="text-gray-600">Create a professional profile to display your achievements and skills.</p>
                    </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-3">
                    <img src="/assets/images/benefit_rnd_icon.svg" className="w-5 md:w-10" alt="" />
                    <div className="">
                        <h3 className="text-xl font-semibold mb-2">Contribute to the Community</h3>
                        <p className="text-gray-600">Help others by volunteering, coaching, or mentoring.</p>
                    </div>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="w-full lg:w-1/3 lg:order-1 order-0 flex justify-center">
              <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border border-red-500">
                <img
                  src="/assets/images/benefit_round.png"
                  alt="Benefits illustration"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Right Benefits */}
            <div className="w-full lg:w-1/3 space-y-8 order-2">
              <div className="flex flex-col items-start">
                <div className="flex flex-row gap-3">
                    <img src="/assets/images/benefit_rnd_icon.svg" className="w-5 md:w-10" alt="" />
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Networking Opportunities</h3>
                        <p className="text-gray-600">Connect with coaches, teammates, and industry professionals.</p>
                    </div>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex flex-row gap-3">
                    <img src="/assets/images/benefit_rnd_icon.svg" className="w-5 md:w-10" alt="" />
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Personal Development</h3>
                        <p className="text-gray-600">Learn essential skills such as leadership, teamwork, and discipline.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#ff002b] text-white px-8 py-4 rounded-lg hover:bg-red-600 transition-colors">
              Join As Player
            </button>
          </div>
        </div>
    </section>
    </div>
  )
}
export default Volunteer