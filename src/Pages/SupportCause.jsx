import React from "react";
import PageBanner from "../Components/PageBanner";
function SupportCause() {
  const [showPopup, setShowPopup] = React.useState(false);
  const ContributionPopup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[95vh] overflow-y-auto">
        <div className="space-y-5">
          <h2 className="text-2xl font-bold">Contribute to the Cause!</h2>
          <p className="text-gray-600">
            Your support makes a difference! Help us empower athletes, build communities, and
            drive sports initiatives forward.
          </p>
          {/* Send Contributions Section */}
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
              <span>📦</span> Send your contributions to
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-600">Hardcore Sports Welfare Foundation, 5th Floor, Magnus Tower, Sector 73,
                Noida, Uttar Pradesh, India 201301</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Phone Number</p>
                  <p className="text-gray-600">+91 80750 70025</p>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">hello@hswf.network</p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Every contribution goes towards</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium mb-2">1.</p>
                <p className="text-gray-600">Providing resources and opportunities to underprivileged athletes.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium mb-2">2.</p>
                <p className="text-gray-600">Expanding sports outreach and welfare programs.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium mb-2">3.</p>
                <p className="text-gray-600">Organizing training programs and events.</p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 italic">
            Together, we can make a lasting impact. Thank you for being part of the HSWF family!
          </p>

          <div className="text-center pt-2">
            <button
              onClick={() => setShowPopup(false)}
              className="bg-[#ff002b] text-white px-8 py-2 rounded-lg hover:bg-[#cc0022] transition duration-300"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <PageBanner
        title="Support Cause"
        description="Join our team of players and help athletes achieve their goals."
        bgImage="/assets/images/page-banners/events-banner.jpg"
      />
      {/* Why Host Section */}
      <section className="py-16 bg-[#191b2a] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl mb-8">
                Why <span className="font-bold">Support</span>
              </h2>

              <div className="space-y-6">
                <p className="text-white">
                  By supporting HSWF, you become a catalyst for:
                </p>
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <svg
                      className="w-7 h-7 text-[#ff002b]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Empowering Athletes
                    </h3>
                    <p className="text-gray-300">
                      Help young and aspiring athletes access training,
                      facilities, and opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <svg
                      className="w-7 h-7 text-[#ff002b]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Promoting Grassroots Sports
                    </h3>
                    <p className="text-gray-300">
                      Strengthen community programs that identify and nurture
                      talent.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <svg
                      className="w-7 h-7 text-[#ff002b]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Building Sports Infrastructure
                    </h3>
                    <p className="text-gray-300">
                      Enable us to create and maintain world-class facilities
                      accessible to all.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <svg
                      className="w-7 h-7 text-[#ff002b]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Fostering Inclusivity
                    </h3>
                    <p className="text-gray-300">
                      Make sports accessible to underprivileged and marginalized
                      groups.
                    </p>
                  </div>
                </div>

                <p className="text-white">
                  Your contribution helps shape the future of sports in India
                  and transforms countless lives.
                </p>
              </div>
            </div>

            {/* Right Image Grid */}
            <div className="w-full lg:w-1/2 relative">
              <img
                src="assets/images/why_support_img.png"
                alt="Host"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      
      {/* Ways to Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Ways To <span className="font-bold">Support</span></h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Here's how you can make a difference by contributing to HSWF Network. Explore these impactful
              ways to support our mission, and see the dynamic results your generosity can achieve!
            </p>
          </div>

          {/* Sports Equipment Donation */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <img
                src="/assets/images/way_to_support_left_img.png"
                alt="Sports Equipment Donation"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl font-bold mb-6">Contribute Sports Equipment</h3>
              <p className="text-gray-700 mb-6">Donate essential sports gear to support grassroots programs.</p>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Accepted Items:</h4>
                  <p className="text-gray-700">Cricket kits, footballs, badminton racquets, jerseys, shoes, and protective equipment.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Drop-off Locations:</h4>
                  <p className="text-gray-700">Easily accessible locations in major cities (check our website for details).</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Dynamic Impact Example:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>1 cricket bat can empower 10 children in a local sports program.</li>
                    <li>5 pairs of shoes can equip an entire under-14 team.</li>
                  </ul>
                </div>

                <button
                  onClick={() => setShowPopup(true)}
                  className="bg-[#ff002b] text-white px-8 py-3 rounded-lg hover:bg-[#cc0022] transition duration-300"
                >
                  Contribute Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showPopup && <ContributionPopup />}
      
      {/* Donation Section */}
      <section className="py-16 bg-[url(assets/images/donate_banner_bg.jpg)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 md:p-8 shadow-lg">
            <h2 className="text-4xl font-bold mb-2">Donate</h2>
            <div className="h-1 w-16 bg-[#ff002b] mb-6"></div>
            
            <p className="text-gray-700 mb-8">Make a direct impact with your contributions:</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Online Donations:</h3>
                <p className="text-gray-600">Make a secure contribution through our website in just a few clicks.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Offline Donations:</h3>
                <p className="text-gray-600">Send your donation directly to our foundation.</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold mb-4">Dynamic Impact:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">₹500 can provide training equipment for one aspiring athlete.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">₹20,000 can sponsor a month of professional coaching for an underprivileged player.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowPopup(true)}
                className="bg-[#ff002b] text-white px-8 py-3 rounded-lg hover:bg-[#cc0022] transition duration-300 text-lg font-semibold"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default SupportCause;
