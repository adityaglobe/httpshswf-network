import PageBanner from '../Components/PageBanner'
function TermsOfUse() {
  return (
    <div className="min-h-screen">
      <PageBanner 
        title="Terms of Use" 
        description="Please read these terms carefully before using our services"
        bgImage="/assets/images/page-banners/events-banner.jpg"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Terms of Use for HSWF Network</h2>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h3>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using the HSWF Network website and services, you agree to be bound by these Terms of Use and all applicable laws and regulations.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">2. User Responsibilities</h3>
                <ul className="list-disc pl-8 space-y-3 text-gray-700">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect the rights of other users</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">3. Intellectual Property</h3>
                <p className="text-gray-700 leading-relaxed">
                  All content on this website is the property of HSWF Network and is protected by copyright and other intellectual property laws.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">4. Limitation of Liability</h3>
                <p className="text-gray-700 leading-relaxed">
                  HSWF Network shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">5. Contact Information</h3>
                <div className="bg-gray-50 p-8 rounded-xl mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#ff002b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-700">Email: hello@hswf.network</p>
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
export default TermsOfUse