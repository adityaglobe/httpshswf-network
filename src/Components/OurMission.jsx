import { Link } from 'react-router-dom'
function OurMission() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img 
              src="/assets/images/about-text.png" 
              alt="Sports Collage" 
              className="w-full rounded-lg"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="text-[#ff002b]">Mission</span>
            </h2>
            <p className="text-gray-700 text-sm-lg">
              At the Hardcore Sports Welfare Foundation (HSWF.Network), we believe in the power of sports to build communities and inspire dreams. Our mission is to empower athletes, coaches, and enthusiasts with resources, opportunities, and an accessible sports network where talent thrives, support is available, and success stories are created.
            </p>
            <ul className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ff002b] flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <li className="text-gray-700">Building a strong and supportive sports community</li>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ff002b] flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <li className="text-gray-700">Providing resources and opportunities for growth</li>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ff002b] flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <li className="text-gray-700">Creating an accessible network for all sports enthusiasts</li>
              </div>
            </ul>
            <Link to="/join" className="button-style1 inline-block" onClick={() => window.scrollTo(0, 0)}>Join HSWF Network</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurMission