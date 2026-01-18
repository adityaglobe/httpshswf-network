import { useState } from 'react'
import PageBanner from '../Components/PageBanner'
import NewsletterSubscribe from '../Components/NewsletterSubscribe'
function Insights() {
  const [activeCategory, setActiveCategory] = useState('All');

  const insights = [
    {
      id: 1,
      title: '6 Biggest Legal Cases & Controversies in Sports History',
      date: 'Mar 06, 2025',
      category: 'Legal Cases And Controversies',
      author: 'Super Admin',
      type: 'International',
      image: '/assets/images/blog1.jpg'
    },
    {
      id: 2,
      title: '5 Key Aspects of Athlete Wellness for Peak Performance',
      date: 'Mar 06, 2025',
      category: 'Athlete Wellness',
      author: 'Super Admin',
      image: '/assets/images/blog2.jpg'
    },
    {
      id: 3,
      title: '5 Essential Health Tips for Athletes to Boost Performance',
      date: 'Mar 06, 2025',
      category: 'Health Tips',
      author: 'Super Admin',
      image: '/assets/images/blog3.jpg'
    }
  ];

  const categories = ['All', 'Legal Cases And Controversies', 'Athlete Wellness', 'Health Tips', 'Facts', 'Athlete Stories'];

  const filteredInsights = activeCategory === 'All' 
    ? insights 
    : insights.filter(insight => insight.category === activeCategory);

  return (
    <div>
      <PageBanner
        title="Latest Blogs"
        description="Have questions or ready to book your dream event? Contact us today, and our expert team will make your event vision a reality. We're just a click away!"
      />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? 'bg-[#ff002b] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((insight) => (
              <div key={insight.id} className="bg-white rounded-lg overflow-hidden shadow-md group cursor-pointer">
                <div className="relative">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {insight.type && (
                    <span className="absolute top-4 left-4 bg-[#ff002b] text-white px-3 py-1 text-sm rounded">
                      {insight.type}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <span>{insight.date}</span>
                    <span>•</span>
                    <span>{insight.category}</span>
                    <span>•</span>
                    <span>By {insight.author}</span>
                  </div>
                  <Link to={`/insights/${insight.id}`} className="text-xl font-semibold text-[#191b2a] group-hover:text-[#ff002b] transition-colors">
                    {insight.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <NewsletterSubscribe />
    </div>
  )
}
export default Insights