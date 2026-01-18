import PageBanner from '../Components/PageBanner'
function CookiePolicy() {
  return (
    <div className="min-h-screen">
      <PageBanner 
        title="Cookie Policy" 
        description="Understanding how we use cookies to improve your experience"
        bgImage="/assets/images/page-banners/events-banner.jpg"
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Cookie Policy for HSWF Network</h2>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>            
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">1. What Are Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by:
                </p>
                <ul className="list-disc pl-8 space-y-3 text-gray-700">
                  <li>Remembering your preferences</li>
                  <li>Understanding how you use our website</li>
                  <li>Improving site functionality</li>
                  <li>Providing personalized content</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">2. Types of Cookies We Use</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">Essential Cookies</h4>
                    <p className="text-gray-700">Required for basic site functionality and security.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Analytics Cookies</h4>
                    <p className="text-gray-700">Help us understand how visitors interact with our website.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Functional Cookies</h4>
                    <p className="text-gray-700">Remember your preferences and settings.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">3. Managing Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  You can control and manage cookies in your browser settings. Please note that removing or blocking cookies may impact your website experience.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">4. Contact Us</h3>
                <p className="text-gray-700 leading-relaxed">
                  If you have questions about our Cookie Policy, please contact us at:
                </p>
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
export default CookiePolicy