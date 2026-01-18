import PageBanner from "../Components/PageBanner";
function Player() {
  return (
    <div>
      <PageBanner
        title="Join the HSWF Players Network"
        description="Empower your journey in sports. Connect, grow, and make an impact with the HSWF Network."
      />
      
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="w-full lg:w-1/2 relative">
              <img
                src="/assets/images/member-1.png"
                alt="Become a player illustration"
                className="w-full h-auto"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h4 className="text-[#4361ee] text-base md:text-lg mb-2">
                How to
              </h4>
              <h2 className="text-4xl md:text-5xl text-[#191b2a] mb-8 md:mb-12">
                Become A <span className="font-bold">Player</span>
              </h2>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex items-start gap-2 relative">
                  <span className="text-4xl font-bold text-[#191b2a] min-w-[48px] absolute left-[-10px] top-8 z-10">
                    01
                  </span>
                  <div className="border border-gray-200 rounded-lg p-6 ps-14 w-full relative before:absolute before:w-[48px] before:h-full before:bg-white before:-left-[54px] before:top-0">
                    <h3 className="font-semibold text-lg mb-1">
                      Fill Out the Form:
                    </h3>
                    <p className="text-gray-600">
                      Share your details, skills, and areas of interest.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-2 relative">
                  <span className="text-4xl font-bold text-[#191b2a] min-w-[48px] absolute left-[-10px] top-8 z-10">
                    02
                  </span>
                  <div className="border border-gray-200 rounded-lg p-6 ps-14 w-full relative before:absolute before:w-[48px] before:h-full before:bg-white before:-left-[54px] before:top-0">
                    <h3 className="font-semibold text-lg mb-1">
                      Submit Your Application:
                    </h3>
                    <p className="text-gray-600">
                      Provide a brief introduction and let us know how you'd
                      like to contribute.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-2 relative">
                  <span className="text-4xl font-bold text-[#191b2a] min-w-[48px] absolute left-[-10px] top-8 z-10">
                    03
                  </span>
                  <div className="border border-gray-200 rounded-lg p-6 ps-14 w-full relative before:absolute before:w-[48px] before:h-full before:bg-white before:-left-[54px] before:top-0">
                    <h3 className="font-semibold text-lg mb-1">
                      Get Approved:
                    </h3>
                    <p className="text-gray-600">
                      Once reviewed and approved, you'll receive confirmation
                      and be connected to relevant programs.
                    </p>
                  </div>
                </div>

                <button className="bg-[#ff002b] text-white px-8 py-4 rounded-lg hover:bg-red-600 transition-colors text-lg">
                  Join As Player
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Benefits Section */}
       <section className="py-16 bg-[url(assets/images/benefit_bg.png)] bg-center bg-cover">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center mb-16">
            Benefits <span className="text-[#191b2a]">To Players</span>
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
            {/* Left Benefits */}
            <div className="w-full lg:w-1/3 space-y-8">
              <div className="flex flex-col items-end text-right">
                <div className="flex gap-3">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Showcase Your Talent</h3>
                        <p className="text-gray-600">Create a professional profile to display your achievements and skills.</p>
                    </div>
                    <img src="assets/images/benefit_rnd_icon.svg" className="w-10" alt="" />
                </div>
              </div>
              
              <div className="flex flex-col items-end text-right">
                <div className="flex gap-3">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Contribute to the Community</h3>
                        <p className="text-gray-600">Help others by volunteering, coaching, or mentoring.</p>
                    </div>
                    <img src="assets/images/benefit_rnd_icon.svg" className="w-10" alt="" />
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative w-[400px] h-[400px] rounded-full border-1 border-red-500">
                <img
                  src="/assets/images/benefit_round.png"
                  alt="Benefits illustration"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Right Benefits */}
            <div className="w-full lg:w-1/3 space-y-8">
              <div className="flex flex-col items-start">
                <div className="flex gap-3 flex-row-reverse">
                <div>
                    <h3 className="text-xl font-semibold mb-2">Networking Opportunities</h3>
                    <p className="text-gray-600">Connect with coaches, teammates, and industry professionals.</p>
                </div>
                <img src="assets/images/benefit_rnd_icon.svg" className="w-10" alt="" />
                </div>
              </div>
              
              <div className="flex flex-col items-start">
                <div className="flex gap-3 flex-row-reverse">
                    <div>
                    <h3 className="text-xl font-semibold mb-2">Personal Development</h3>
                    <p className="text-gray-600">Learn essential skills such as leadership, teamwork, and discipline.</p>
                    </div>
                    <img src="assets/images/benefit_rnd_icon.svg" className="w-10" alt="" />
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
export default Player