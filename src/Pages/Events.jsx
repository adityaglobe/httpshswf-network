import PageBanner from '../Components/PageBanner'
import MemberBenefits from '../Components/MemberBenefits'
import SuccessStories from '../Components/SuccessStories'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
function Events() {
  const eventBenefits = [
    {
      title: 'Marketing Support',
      description: 'Boost your event visibility with customised campaigns across social media, newsletters, and digital platforms.',
      bgColor: 'bg-[#f8e9e0]',
      image: 'assets/images/markert-1.png'
    },
    {
      title: 'Design Assistance',
      description: 'Engage your audience with stunning visuals, including banners, posters, and social media creatives.',
      bgColor: 'bg-[#d9eeec]',
      image: '/assets/images/access_resource.png'
    },
    {
      title: 'Player Engagement',
      description: 'Reach athletes and teams through our vast network to ensure strong participation.',
      bgColor: 'bg-[#e9ecf0]',
      image: '/assets/images/be_recognized.png'
    },
    {
      title: 'Community Outreach',
      description: 'Tap into our grassroots programs and connect with local communities to foster inclusivity.',
      bgColor: 'bg-[#e9ecf0]',
      image: '/assets/images/be_recognized.png'
    },
    {
      title: 'PR & Media Coverage',
      description: 'Enhance your event’s reputation with press releases and media outreach to maximise exposure.',
      bgColor: 'bg-[#e9ecf0]',
      image: '/assets/images/be_recognized.png'
    }
  ]

  return (
    <div>
      <PageBanner 
          title='Host Your Event with HSWF' 
          description="Make your event a success with the Hardcore Sports Welfare Foundation (HSWF). Whether you're hosting a tournament, workshop, or community initiative, our tailored support services ensure your event stands out, reaches the right audience, and achieves its goals."
          bgImage="/assets/images/page-banners/events-banner.jpg"
      />

      {/* Why Host Section */}
      <section className="py-16 bg-[#191b2a] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl mb-8">
                Why Host Your <span className='font-bold'>Event With HSWF?</span></h2>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <svg className="w-7 h-7 text-[#ff002b]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Unmatched Visibility</h3>
                    <p className="text-gray-300">Leverage our network of 100K+ sports enthusiasts and professionals.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <svg className="w-7 h-7 text-[#ff002b]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Comprehensive Support</h3>
                    <p className="text-gray-300">From marketing to community outreach, we cover every aspect of event management.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <svg className="w-7 h-7 text-[#ff002b]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professional Expertise</h3>
                    <p className="text-gray-300">Get access to our skilled team for design, communication, and technical needs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Grid */}
            <div className="w-full lg:w-1/2 relative">
              <img src="assets/images/why_support_img.png" alt="Host" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <MemberBenefits 
        title="Event Host Benefits"
        benefits={eventBenefits}
        buttonText="Host Your Event"
      />

      
      {/* Our Support Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center mb-12">
            Our Support <span className="font-bold">Packages</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Marketing Support */}
            <div className="bg-[#f8e9e0] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-3">Marketing Support</h3>
              <p className="text-gray-600 mb-6">Boost your event visibility with customised campaigns across social media, newsletters, and digital platforms.</p>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/assets/images/markert-1.png" 
                  alt="Marketing Support"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Design Assistance */}
            <div className="bg-[#d9eeec] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-3">Design Assistance</h3>
              <p className="text-gray-600 mb-6">Engage your audience with stunning visuals, including banners, posters, and social media creatives.</p>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/assets/images/access_resource.png" 
                  alt="Design Assistance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Player Engagement */}
            <div className="bg-[#e9ecf0] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-3">Player Engagement</h3>
              <p className="text-gray-600 mb-6">Reach athletes and teams through our vast network to ensure strong participation.</p>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/assets/images/be_recognized.png" 
                  alt="Player Engagement"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SuccessStories />

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

    <section className='bg-[url(assets/images/cta-bg2.png)] py-20'>
      <div className='container mx-auto '></div>
        <div className='flex flex-col items-center justify-center'>
          <div className='max-w-[700px] text-center'>
          <h2 className='text-4xl text-[#0d123d] md:text-5xlmb-8'>
          Let’s Make Your Event  <span className='font-bold'>Unforgettable</span>
            </h2>
            <p className='mb-8'>Ready to take your event to the next level? Partner with HSWF and let us handle the details while you focus on making an impact.</p>
            <a href="#" className='button-style1'>Host Your Event Now</a>
          </div>
          </div>
    </section>
    </div>
  )
}
export default Events