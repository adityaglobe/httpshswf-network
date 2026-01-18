import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';

function Endurance() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname === '/network' ? 'network' : 'programs');
  const [activeNetwork, setActiveNetwork] = useState(1);
  const [activeSport, setActiveSport] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showSortOptions, setShowSortOptions] = useState(false);

  const sports = [
    { id: 'all', title: 'All Sports', icon: '/assets/images/all-sports.png' },
    { id: 'athletics', title: 'Athletics', icon: '/assets/images/athletics.png' },
    { id: 'badminton', title: 'Badminton', icon: '/assets/images/tennis.png' },
    { id: 'basketball', title: 'Basketball', icon: '/assets/images/basketball.png' },
    { id: 'boxing', title: 'Boxing', icon: '/assets/images/boxing.png' },
    { id: 'football', title: 'Football', icon: '/assets/images/football.png' },
    { id: 'hockey', title: 'Hockey', icon: '/assets/images/hockey.png' },
    { id: 'tennis', title: 'Tennis', icon: '/assets/images/tennis.png' },
    { id: 'volleyball', title: 'Volleyball', icon: '/assets/images/volleyball.png' }
  ].sort((a, b) => a.title.localeCompare(b.title));

  // Filter sports based on search term
  const filteredSports = sports.filter(sport => 
    sport.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sport.id === 'all' // Always include "All Sports" option
  );

  const handleSportClick = (sportId) => {
    setActiveSport(sportId);
    
    if (sportId === 'all') {
      setFilteredPrograms(programs);
    } else {
      const filtered = programs.filter(program => program.sportType === sportId);
      setFilteredPrograms(filtered);
    }
  };

  const networks = [
    { id: 1, title: 'All Networks', icon: '/assets/images/all.png' },
    { id: 2, title: 'International Bodies', icon: '/assets/images/internation-body.png' },
    { id: 3, title: 'National Bodies', icon: '/assets/images/national-bodies.png' },
    { id: 4, title: 'State Bodies', icon: '/assets/images/state-bodies.png' },
    { id: 5, title: 'Sports Clubs', icon: '/assets/images/sports-media.png' },
    { id: 6, title: 'NGO\'s', icon: '/assets/images/ngos.png' },
    { id: 7, title: 'Schools-univercities', icon: '/assets/images/schools-universities.png' },
    { id: 8, title: 'Media', icon: '/assets/images/sports-media.png' },
    { id: 9, title: 'Others', icon: '/assets/images/training-centers.png' },
    { id: 10, title: 'Training Centers', icon: '/assets/images/event-management.png' }
  ];

  const programs = [
    {
      id: 1,
      title: 'GT Assistant Coach',
      price: '40000',
      duration: '15 days',
      startDate: '15 May',
      city: 'Noida',
      image: '/assets/images/gt-assistant-coach.jpg',  // Add leading slash
      status: 'Offline',
      sportType: 'all' // Add sport type
    },
    {
      id: 2,
      title: 'GT Fitness Trainer',
      price: '35000',
      duration: '15 days',
      startDate: '06 Apr',
      city: 'Noida',
      image: '/assets/images/gt-fitness-trainer.jpg',  // Removed 'public' prefix
      status: 'Offline'
    },
    {
      id: 3,
      title: 'Sports Nutrition TP',
      price: '45000',
      duration: '20 days',
      startDate: '06 Apr',
      city: 'Noida',
      image: '/assets/images/sport-nutrition-gt.jpg',  // Removed 'public' prefix
      status: 'Offline'
    },
    {
      id: 4,
      title: 'GT Head Coach',
      price: '45000',
      duration: '30 days',
      startDate: '15 May',
      city: 'Noida',
      image: '/assets/images/gt-head-coach.jpg', // Remove 'public' prefix
      status: 'Offline'
    }
  ];

  // Add state for filtered programs
  const [filteredPrograms, setFilteredPrograms] = useState(programs);

  const handleNetworkClick = (networkId) => {
    setActiveNetwork(networkId);
    
    // Filter programs based on network type
    if (networkId === 1) {
      // Show all programs for "All Networks"
      setFilteredPrograms(programs);
    } else {
      // Filter programs based on network type
      // You can add network type property to programs and filter accordingly
      const filtered = programs.filter(program => {
        // Example filtering logic - modify based on your data structure
        switch(networkId) {
          case 2: // International Bodies
            return program.networkType === 'international';
          case 3: // National Bodies
            return program.networkType === 'national';
          case 4: // State Bodies
            return program.networkType === 'state';
          case 5: // Sports Clubs
            return program.networkType === 'sports_club';
          case 6: // NGO's
            return program.networkType === 'ngo';
          case 7: // Schools-universities
            return program.networkType === 'education';
          case 8: // Media
            return program.networkType === 'media';
          case 9: // Others
            return program.networkType === 'other';
          case 10: // Training Centers
            return program.networkType === 'training';
          default:
            return true;
        }
      });
      setFilteredPrograms(filtered);
    }
  };

  return (
    <section className="endurance bg-[#f8f8f8] py-20">
      <div className="container mx-auto">
          {/* Navigation Links */}
          <div className="flex gap-2 mb-6">
            <button 
              onClick={() => setActiveTab('network')}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeTab === 'network' 
                  ? 'bg-[#ff002b] text-white font-bold' 
                  : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              Network
            </button>
            <button 
              onClick={() => setActiveTab('programs')}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeTab === 'programs' 
                  ? 'bg-[#ff002b] text-white font-bold' 
                  : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              Programs
            </button>
          </div>

          {/* Title */}
          <h1 className="text-3xl text-sm-4xl font-bold mb-8">
            {activeTab === 'network' ? 'Endurance Network' : 'Endurance Programs'}
          </h1>

          {/* Show content based on active tab */}
          {activeTab === 'network' ? (
            <>
              
              {/* Network specific content */}
              <div className="mb-8">
                <div className="flex overflow-x-auto gap-4 pb-8">
                  {networks.map(network => (
                    <div 
                      key={network.id}
                      onClick={() => handleNetworkClick(network.id)}
                      className={`p-6 rounded-lg border-[1px] ${
                        network.id === activeNetwork ? 'border-[#ff002b] shadow-lg' : 'border-gray-200'
                      } bg-white flex flex-col items-center justify-center cursor-pointer transition-all h-[120px] sports-tabs hover:border-[#ff002b]`}
                    >
                      <img 
                        src={network.icon} 
                        alt={network.title} 
                        className={`w-8 h-8 mb-3 ${
                          network.id === activeNetwork
                            ? '[filter:brightness(0)_saturate(100%)_invert(15%)_sepia(96%)_saturate(3428%)_hue-rotate(340deg)_brightness(107%)_contrast(122%)]'
                            : ''
                        }`}
                      />
                      <p className={`text-sm text-center ${
                        network.id === activeNetwork ? 'text-[#ff002b]' : 'text-gray-600'
                      }`}>
                        {network.title}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Sports Tabs */}
              <div className="overflow-x-auto mb-8">
                <div className="flex gap-4 min-w-max">
                  {filteredSports.map(sport => (
                    <button
                      key={sport.id}
                      onClick={() => handleSportClick(sport.id)}
                      className={`px-6 py-2 rounded-full transition-colors flex items-center gap-2 ${
                        activeSport === sport.id
                          ? 'bg-[#ff002b] text-white'
                          : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <img 
                        src={sport.icon} 
                        alt={sport.title} 
                        className={`w-5 h-5 ${
                          activeSport === sport.id
                            ? '[filter:invert(100%)]'
                            : ''
                        }`}
                      />
                      {sport.title}
                    </button>
                  ))}
                </div>
              </div>

                {/* Search and Filter */}
                <div className="flex gap-4 mb-8 flex-wrap">
                  <input 
                    type="text" 
                    placeholder="Search sports network..." 
                    className="flex-1 p-3 border rounded-lg"
                  />
                  <input 
                    type="text" 
                    placeholder="Search City, state, Country or Location..." 
                    className="flex-1 p-3 border rounded-lg"
                  />
                  <div className="relative">
                    <button 
                      onClick={() => setShowSortOptions(!showSortOptions)}
                      className="px-6 py-3 border rounded-lg flex items-center gap-2"
                    >
                      Sort By
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {showSortOptions && (
                      <div className="absolute top-full right-0 mt-1 w-48 bg-white border rounded-lg shadow-lg z-10">
                        <button 
                          onClick={() => {
                            setSortBy('name');
                            setShowSortOptions(false);
                          }}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          Sort by Name
                        </button>
                        <button 
                          onClick={() => {
                            setSortBy('popular');
                            setShowSortOptions(false);
                          }}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          Sort by Popular
                        </button>
                        <button 
                          onClick={() => {
                            setSortBy('members');
                            setShowSortOptions(false);
                          }}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          Sort by Members
                        </button>
                        <button 
                          onClick={() => {
                            setSortBy('recent');
                            setShowSortOptions(false);
                          }}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          Most Recent
                        </button>
                      </div>
                    )}
                  </div>
                  <button className="px-6 py-2 border rounded-lg">Filter</button>
                </div>

                {/* Network Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[1,2,3,4].map((item) => (
                    <div key={item} className="bg-white rounded-lg overflow-hidden shadow-lg">
                      <div className="relative">
                        <img src="/assets/images/gt-assistant-coach.jpg" alt={`Network ${item}`} className="w-full h-48 object-cover" />
                        <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-md text-sm">
                          Active
                        </span>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-semibold">Network Item {item}</h3>
                        </div>
                        <div className="text-sm text-gray-600 mb-4">
                          <div className="bg-gray-50 flex justify-between p-3 rounded-lg mb-2">
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-gray-500">Location</span>
                            </div>
                            <span className="font-semibold text-gray-800">Noida, UP</span>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <button className="flex-1 py-2 text-center border border-gray-300 rounded-lg hover:bg-gray-50">
                            View Details
                          </button>
                          <button className="flex-1 py-2 text-center bg-[#ff002b] text-white rounded-lg hover:bg-red-600">
                            Connect
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            // Programs content
            <>
              {/* Network Types Slider */}
              <div className="mb-8">
                <div className="flex overflow-x-auto gap-4 pb-4">
                  {networks.map(network => (
                    <div 
                      key={network.id}
                      onClick={() => handleNetworkClick(network.id)}
                      className={`p-6 rounded-lg border-[1px] ${
                        network.id === activeNetwork ? 'border-[#ff002b] shadow-lg' : 'border-gray-200'
                      } bg-white flex flex-col items-center justify-center cursor-pointer transition-all h-[120px] sports-tabs hover:border-[#ff002b]`}
                    >
                      <img 
                        src={network.icon} 
                        alt={network.title} 
                        className={`w-8 h-8 mb-3 ${
                          network.id === activeNetwork
                            ? '[filter:brightness(0)_saturate(100%)_invert(15%)_sepia(96%)_saturate(3428%)_hue-rotate(340deg)_brightness(107%)_contrast(122%)]'
                            : ''
                        }`}
                      />
                      <p className={`text-sm text-center ${
                        network.id === activeNetwork ? 'text-[#ff002b]' : 'text-gray-600'
                      }`}>
                        {network.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sports Tabs */}
              <div className="overflow-x-auto mb-8">
                <div className="flex gap-4 min-w-max">
                  {filteredSports.map(sport => (
                    <button
                      key={sport.id}
                      onClick={() => handleSportClick(sport.id)}
                      className={`px-6 py-2 rounded-full transition-colors flex items-center gap-2 ${
                        activeSport === sport.id
                          ? 'bg-[#ff002b] text-white'
                          : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <img 
                        src={sport.icon} 
                        alt={sport.title} 
                        className={`w-5 h-5 ${
                          activeSport === sport.id
                            ? '[filter:invert(100%)]'
                            : ''
                        }`}
                      />
                      {sport.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search and Filter */}
              <div className="flex gap-4 mb-8 flex-wrap">
                <input 
                  type="text" 
                  placeholder="Search sports network..." 
                  className="flex-1 p-3 border rounded-lg"
                />
                <input 
                  type="text" 
                  placeholder="Search City, state, Country or Location..." 
                  className="flex-1 p-3 border rounded-lg"
                />
                <div className="relative">
                  <button 
                    onClick={() => setShowSortOptions(!showSortOptions)}
                    className="px-6 py-3 border rounded-lg flex items-center gap-2"
                  >
                    Sort By
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {showSortOptions && (
                    <div className="absolute top-full right-0 mt-1 w-48 bg-white border rounded-lg shadow-lg z-10">
                      <button 
                        onClick={() => {
                          setSortBy('name');
                          setShowSortOptions(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Sort by Name
                      </button>
                      <button 
                        onClick={() => {
                          setSortBy('popular');
                          setShowSortOptions(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Sort by Popular
                      </button>
                      <button 
                        onClick={() => {
                          setSortBy('price_low');
                          setShowSortOptions(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Price: Low to High
                      </button>
                      <button 
                        onClick={() => {
                          setSortBy('price_high');
                          setShowSortOptions(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Price: High to Low
                      </button>
                      <button 
                        onClick={() => {
                          setSortBy('duration');
                          setShowSortOptions(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Duration
                      </button>
                    </div>
                  )}
                </div>
                <button className="px-6 py-2 border rounded-lg">Filter</button>
              </div>

              {/* Programs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredPrograms.map(program => (
                  <div key={program.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="relative">
                      <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
                      <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-md text-sm">
                        {program.status}
                      </span>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">{program.title}</h3>
                        <span className="text-[#ff002b] font-bold">₹{program.price}</span>
                      </div>
                      <div className="text-sm text-gray-600 mb-4">
                        <div className="bg-gray-50 flex justify-between p-3 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-500">Duration</span>
                          </div>
                          <span className="font-semibold text-gray-800">{program.duration}</span>
                        </div>
                        <div className="bg-gray-50 flex justify-between p-3 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-gray-500">Start Date</span>
                          </div>
                          <span className="font-semibold text-gray-800">{program.startDate}</span>
                        </div>
                        <div className="bg-gray-50 flex justify-between p-3 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-gray-500">City</span>
                          </div>
                          <span className="font-semibold text-gray-800">{program.city}</span>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <button className="flex-1 py-2 text-center border border-gray-300 rounded-lg hover:bg-gray-50">
                          View Details
                        </button>
                        <button className="flex-1 py-2 text-center bg-[#ff002b] text-white rounded-lg hover:bg-red-600">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          <div className="text-center mt-10"><a href="#" className='button-style2 '>View All</a></div>
        </div>
    </section>
  );
}

export default Endurance;