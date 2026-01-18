import PageBanner from '../Components/PageBanner'
function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <PageBanner 
        title="Privacy Policy" 
        description="Learn how we collect, use, and protect your personal information"
        bgImage="/assets/images/page-banners/events-banner.jpg"
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-8xl mx-auto space-y-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Privacy Policy </h2>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">1. Information We Collect</h3>
                <p className="text-gray-700 leading-relaxed">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-8 space-y-3 text-gray-700">
                  <li>Name and contact information</li>
                  <li>Profile information</li>
                  <li>Sports preferences and interests</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">2. How We Use Your Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-8 space-y-3 text-gray-700">
                  <li>Provide and maintain our services</li>
                  <li>Send you updates about events and programs</li>
                  <li>Improve our platform and user experience</li>
                  <li>Communicate with you about our services</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">3. Information Sharing</h3>
                <p className="text-gray-700 leading-relaxed">
                  We do not sell or rent your personal information to third parties. We may share your information with:
                </p>
                <ul className="list-disc pl-8 space-y-3 text-gray-700">
                  <li>Service providers who assist in our operations</li>
                  <li>Partners for specific programs or events (with your consent)</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">4. Data Security</h3>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">5. Your Rights</h3>
                <p className="text-gray-700 leading-relaxed">
                  You have the right to:
                </p>
                <ul className="list-disc pl-8 space-y-3 text-gray-700">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">6. Contact Us</h3>
                <p className="text-gray-700 leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-gray-50 p-8 rounded-xl mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#ff002b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-700">Email: satnamsingh@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#ff002b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-gray-700">Phone: +91 9810617498</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#ff002b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-700">Address: Hardcore Sports Welfare Foundation, 6th Floor, Magnus Tower, Sector 73, Noida, Uttar Pradesh, India 201301</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default PrivacyPolicy