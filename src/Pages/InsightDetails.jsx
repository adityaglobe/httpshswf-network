import { useParams } from 'react-router-dom'
import PageBanner from '../Components/PageBanner'

function InsightDetails() {
  const { id } = useParams();

  // This would typically come from an API or database
  // Using static data for demonstration
  const insight = {
    id: 1,
    title: '6 Biggest Legal Cases & Controversies in Sports History',
    date: 'Mar 06, 2025',
    category: 'Legal Cases And Controversies',
    author: 'Super Admin',
    type: 'International',
    image: '/assets/images/blog1.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Sports history is filled with landmark legal cases and controversies that have shaped the industry. From antitrust disputes to player rights, these cases have had lasting impacts on how sports are governed and managed today.'
      },
      {
        type: 'heading',
        text: '1. The Bosman Ruling (1995)'
      },
      {
        type: 'paragraph',
        text: 'This landmark case in European football revolutionized player transfers, allowing players to move freely between clubs at the end of their contracts. The ruling had a profound impact on player mobility and club finances.'
      },
      {
        type: 'heading',
        text: '2. Deflategate (2015)'
      },
      {
        type: 'paragraph',
        text: 'The controversy surrounding the New England Patriots and allegations of deliberately deflating footballs led to significant debates about fair play and equipment regulations in professional sports.'
      }
    ],
    tags: ['Sports Law', 'Legal Cases', 'Sports History', 'Controversies']
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner 
        title={insight.title}
        description={`${insight.category} | ${insight.date}`}
      />
      
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <div className="mb-12">
              <img 
                src={insight.image} 
                alt={insight.title}
                className="w-full h-[400px] object-cover rounded-xl mb-8"
              />
              
              <div className="flex items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{insight.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{insight.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <span>{insight.category}</span>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {insight.content.map((block, index) => (
                block.type === 'heading' ? (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {block.text}
                  </h2>
                ) : (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6">
                    {block.text}
                  </p>
                )
              ))}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {insight.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Share this article</h3>
              <div className="flex gap-4">
                <button className="p-2 text-[#ff002b] hover:bg-red-50 rounded-full transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                  </svg>
                </button>
                <button className="p-2 text-[#ff002b] hover:bg-red-50 rounded-full transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/>
                  </svg>
                </button>
                <button className="p-2 text-[#ff002b] hover:bg-red-50 rounded-full transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default InsightDetails