import { useState } from 'react'
import PageBanner from "../Components/PageBanner";
function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    mobileNumber: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // EmailJS code removed
    setTimeout(() => {
      alert('Message sent successfully! (EmailJS removed)');
      setFormData({
        fullName: '',
        companyName: '',
        mobileNumber: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div>
      <PageBanner 
        title="Contact" 
        description="Get in touch with us for any inquiries or support"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Contact Information */}
            <div className="bg-[#0A142F] text-white p-8 md:p-12 rounded-lg relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">Contact <span className="font-normal">information</span></h2>
                <p className="text-gray-300 mb-12">
                  We're here to support and connect with everyone passionate about empowering the sports community. Whether you're an athlete, coach, sponsor, or a sports enthusiast, the HSWF Network is just a message away!
                </p>

                {/* Location */}
                <div className="mb-8">
                  <h3 className="font-bold mb-2">Location</h3>
                  <p className="text-gray-300">
                    Hardcore Sports Welfare Foundation, 6th Floor,<br />
                    Magnus Tower, Sector 73, Noida, Uttar Pradesh,<br />
                    India 201301
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-2">Phone Number</h3>
                    <a href="tel:+918076070025" className="text-gray-300">+91 80760 70025</a>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <a href="mailto:hello@hswf.network" className="text-gray-300">hello@hswf.network</a>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Office Hours</h3>
                    <p className="text-gray-300">Monday to Saturday: 10:00 AM — 07:00 PM</p>
                    <p className="text-gray-300">Sunday: Closed</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
                  <p className="text-gray-300 mb-6">
                    Follow HSWF Network for the latest updates, events, and stories that inspire:
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-white p-2 rounded-lg">
                      <img src="/assets/images/facebook-red.svg" alt="Facebook" className="w-6 h-6" />
                    </a>
                    <a href="#" className="bg-white p-2 rounded-lg">
                      <img src="/assets/images/twitter-red.svg" alt="Twitter" className="w-6 h-6" />
                    </a>
                    <a href="#" className="bg-white p-2 rounded-lg">
                      <img src="/assets/images/threads-red.svg" alt="Threads" className="w-6 h-6" />
                    </a>
                    <a href="#" className="bg-white p-2 rounded-lg">
                      <img src="/assets/images/instagram-red.svg" alt="Google" className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <img src="/assets/images/pattern.svg" alt="" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white p-md-8 md:p-12 rounded-lg">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">How Can We <span className="text-[#0A142F]">Help?</span></h2>
              <ul className="check">
                <li>Are you looking to collaborate or sponsor?</li>
                <li>Want to know more about our programs and initiatives?</li>
                <li>Have feedback or suggestions to share?</li>
              </ul>
              <p className="my-8">Let us know! Fill out the form below, and we'll get back to you promptly.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg focus:outline-none focus:border-[#0A142F]"
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg focus:outline-none focus:border-[#0A142F]"
                />
                <div className="flex items-center border rounded-lg p-4 focus-within:border-[#0A142F]">
                  <img src="/assets/images/india-flag.png" alt="India" className="w-6 h-4 mr-2" />
                  <input
                    type="tel"
                    name="mobileNumber"
                    placeholder="Enter Mobile Number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="w-full outline-none"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg focus:outline-none focus:border-[#0A142F]"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-4 border rounded-lg focus:outline-none focus:border-[#0A142F]"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#ff002b] text-white py-4 rounded-lg hover:bg-red-700 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Contact
