import PageBanner from '../Components/PageBanner'
function CodeOfConduct() {
  return (
    <div className="min-h-screen">
      <PageBanner 
        title="Code of Conduct" 
        description="Our commitment to maintaining a respectful and inclusive community"
        bgImage="/assets/images/page-banners/events-banner.jpg"
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Code of Conduct for HSWF Network</h2>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">1. Our Values</h3>
                <ul className="list-disc pl-8 space-y-3 text-gray-700">
                  <li>Respect and dignity for all</li>
                  <li>Integrity in all actions</li>
                  <li>Commitment to excellence</li>
                  <li>Inclusivity and diversity</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">2. Expected Behavior</h3>
                <ul className="list-disc pl-8 space-y-3 text-gray-700">
                  <li>Be respectful and considerate</li>
                  <li>Maintain professional conduct</li>
                  <li>Follow safety guidelines</li>
                  <li>Report violations promptly</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">3. Prohibited Behavior</h3>
                <ul className="list-disc pl-8 space-y-3 text-gray-700">
                  <li>Harassment or discrimination</li>
                  <li>Unsafe or dangerous conduct</li>
                  <li>Violation of laws or regulations</li>
                  <li>Misuse of resources or facilities</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">4. Reporting Violations</h3>
                <p className="text-gray-700 leading-relaxed">
                  If you witness or experience a violation of this code of conduct, please report it to:
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
export default CodeOfConduct