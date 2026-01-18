import PageBanner from '../Components/PageBanner'
import { Link } from 'react-router-dom'

function Council() {
  const countries = [
    {
      id: 'india',
      name: 'India',
      flag: './assets/images/india-flag.png',
      description: 'Discover sports councils across Indian states'
    },
    // Add more countries
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner 
        title="Council" 
        description="Meet our dedicated council members who provide leadership and guidance"
        bgImage="./assets/images/page-banners/events-banner.jpg"
      />

      {/* Countries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country) => (
              <Link 
                key={country.id}
                to={`/council/country/${country.id}`}
                className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={country.flag} 
                    alt={`${country.name} flag`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">{country.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-[18px]">{country.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Council