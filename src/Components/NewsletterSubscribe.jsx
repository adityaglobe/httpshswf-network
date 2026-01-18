import { useState } from 'react';

function NewsletterSubscribe() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
      <div className="container rounded-xl mb-10 py-20 bg-[#191b2a] relative mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl text-white mb-2">
            Reframe <span className="font-normal">your inbox</span>
          </h2>
          <p className="text-gray-300">Subscribe to our newsletter and never miss a story</p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="flex-1 px-6 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff002b]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="flex-1 px-6 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff002b]"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[#ff002b] text-white rounded-lg hover:bg-[#cc0023] transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
  );
}

export default NewsletterSubscribe;