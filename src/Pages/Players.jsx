import { useState } from 'react'
import PageBanner from '../Components/PageBanner'
function Players() {
  const [activeCategory, setActiveCategory] = useState('all')
  const categories = [
    { id: 'all', name: 'All Sports' },
    { id: 'boxing', name: 'Boxing' },
    { id: 'wrestling', name: 'Wrestling' },
    { id: 'athletics', name: 'Athletics' },
    { id: 'hockey', name: 'Hockey' },
    { id: 'football', name: 'Football' }
  ]

  const players = [
    {
      id: 1,
      name: 'Harpreet Singh',
      sport: 'boxing',
      achievements: 'National Gold Medalist',
      image: './assets/images/dummy-image.png',
      location: 'Punjab'
    },
    {
      id: 2,
      name: 'Simran Kaur',
      sport: 'athletics',
      achievements: 'State Champion',
      image: './assets/images/dummy-image.png',
      location: 'Delhi'
    },
    {
      id: 3,
      name: 'Anjali Singh',
      sport: 'wrestling',
      achievements: 'State Champion',
      image: './assets/images/dummy-image.png',
      location: 'Delhi'
    },
    {
      id: 4,
      name: 'Harpreet Singh',
      sport: 'hockey',
      achievements: 'State Champion',
      image: './assets/images/dummy-image.png',
      location: 'Delhi'
    },
    {
      id: 5,
      name: 'Abhishek Singh',
      sport: 'football',
      achievements: 'State Champion',
      image: './assets/images/dummy-image.png',
      location: 'Delhi'
    },
  ]

  const filteredPlayers = activeCategory === 'all' 
    ? players 
    : players.filter(player => player.sport === activeCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner 
        title="Players" 
        description="Meet our talented roster of players who represent HSWF Network" 
        bgImage="./assets/images/page-banners/events-banner.jpg"
      />

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105
                ${activeCategory === category.id 
                  ? 'bg-red-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-red-50 border border-gray-200'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredPlayers.map(player => (
            <div 
              key={player.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative pb-[100%] overflow-hidden">
                <img 
                  src={player.image} 
                  alt={player.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{player.name}</h3>
                <p className="text-red-600 font-semibold mb-2 capitalize">{player.sport}</p>
                <p className="text-gray-600 text-sm mb-2">{player.achievements}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {player.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Players