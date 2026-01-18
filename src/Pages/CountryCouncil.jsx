import { useParams, Link } from 'react-router-dom'
import PageBanner from '../Components/PageBanner'
function CountryCouncil() {
  const { countryId } = useParams()
  const countryData = {
    india: {
      name: 'India',
      flag: './assets/images/india-flag.png',
      states: [
        {
          id: 'punjab',
          name: 'Punjab',
          image: '/assets/images/punjab.jpeg',
          councilCount: 3,
          description: 'Home to multiple sports academies and training centers'
        },
        {
          id: 'haryana',
          name: 'Haryana',
          image: '/assets/images/haryana.jpeg',
          councilCount: 4,
          description: 'Leading state in sports infrastructure and athlete development'
        },
        // Add more states
      ]
    }
    // Add more countries
  }

  const country = countryData[countryId]

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner 
        title={`${country?.name} Sports Councils`}
        description={`Explore sports councils across different states in ${country?.name}`}
        bgImage="/assets/images/page-banners/events-banner.jpg"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {country?.states.map((state) => (
              <Link
                key={state.id}
                to={`/council/state/${state.id}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={state.image} 
                    alt={state.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex flex-col items-center justify-end p-6">
                    <h3 className="text-white text-2xl font-bold mb-2">{state.name}</h3>
                    <span className="text-white/80 text-sm">{state.councilCount} Councils</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{state.description}</p>
                  <div className="mt-4 flex justify-end">
                    <span className="text-red-600 font-semibold inline-flex items-center">
                      View Councils
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
export default CountryCouncil