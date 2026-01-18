import PageBanner from '../Components/PageBanner'
function RefundPolicy() {
  return (
    <div className="min-h-screen">
      <PageBanner 
        title="Refund Policy" 
        description="Understanding our refund and cancellation procedures"
        bgImage="/assets/images/page-banners/events-banner.jpg"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Refund Policy for HSWF Network</h2>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">1. Refund Eligibility</h3>
                <p className="text-gray-700 leading-relaxed">
                  We offer refunds under the following circumstances:
                </p>
                <ul className="list-disc pl-8 space-y-3 text-gray-700">
                  <li>Service cancellation within 24 hours of purchase</li>
                  <li>Technical issues preventing service delivery</li>
                  <li>Duplicate payments or billing errors</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">2. Refund Process</h3>
                <p className="text-gray-700 leading-relaxed">
                  To request a refund:
                </p>
                <ol className="list-decimal pl-8 space-y-3 text-gray-700">
                  <li>Contact our support team</li>
                  <li>Provide order details and reason for refund</li>
                  <li>Allow 5-7 business days for processing</li>
                </ol>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">3. Non-Refundable Items</h3>
                <ul className="list-disc pl-8 space-y-3 text-gray-700">
                  <li>Completed services</li>
                  <li>Digital content already accessed</li>
                  <li>Custom or personalized services</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">4. Contact Us</h3>
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
export default RefundPolicy