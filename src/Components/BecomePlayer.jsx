function BecomePlayer() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <div className="w-full lg:w-1/2 relative">
            <img src="/assets/images/become-a-player.png" alt="Become a player illustration" className="w-full h-auto" />
          </div>

          <div className="w-full lg:w-1/2">
            <h4 className="text-[#4361ee] text-base md:text-lg mb-2">How to</h4>
            <h2 className="text-4xl md:text-5xl text-[#191b2a] mb-8 md:mb-12">Become A <span className='font-bold'>Player</span></h2>
            
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
                Join As Player
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BecomePlayer