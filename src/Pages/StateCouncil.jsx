import { useParams } from 'react-router-dom'
import PageBanner from '../Components/PageBanner'
function StateCouncil() {
  const { stateId } = useParams()
  const stateCouncils = {
    punjab: {
      name: 'Punjab',
      councils: [
        {
          name: 'Punjab State Sports Council',
          president: 'Dr. Harpreet Singh',
          location: 'Chandigarh',
          contact: '+91 XXX XXX XXXX',
          email: 'info@punjabsports.org',
          image: '/assets/images/tricky-tema.jpg',
          description: 'Leading sports development and athlete support across Punjab.',
          achievements: [
            'Over 100 national medals in 2023',
            'State-of-the-art training facilities',
            'Grassroots development programs'
          ]
        },
        {
          name: 'Haryana State Sports Council',
          president: 'Manak Choudhary',
          location: 'Chandigarh',
          contact: '+91 XXX XXX XXXX',
          email: 'info@haryanasprorts.org',
          image: '/assets/images/tricky-tema.jpg',
          description: 'Leading sports development and athlete support across Haryana.',
          achievements: [
            'Over 100 national medals in 2023',
            'State-of-the-art training facilities',
            'Grassroots development programs'
          ]
        },
      ]
    },
    haryana: {
      name: 'Haryana',
      councils: [
        {
          name: 'Haryana State Sports Council',
          president: 'Dr. Harpreet Singh',
          location: 'Chandigarh',
          contact: '+91 XXX XXX XXXX',
          email: 'info@Haryanasports.org',
          image: '/assets/images/tricky-tema.jpg',
          description: 'Leading sports development and athlete support across Haryana.',
          achievements: [
            'Over 100 national medals in 2023',
            'State-of-the-art training facilities',
            'Grassroots development programs'
          ]
        },
      ]
    },
    // Add more states
  }

  const stateData = stateCouncils[stateId]

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner 
        title={`${stateData?.name} Sports Councils`}
        description={`Discover sports councils and their initiatives in ${stateData?.name}`}
        bgImage="/assets/images/page-banners/events-banner.jpg"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {stateData?.councils.map((council, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={council.image}
                      alt={council.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{council.name}</h3>
                    <p className="text-gray-600 mb-4">{council.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                        <p className="text-gray-600">President: {council.president}</p>
                        <p className="text-gray-600">Location: {council.location}</p>
                        <div className="mt-3 flex flex-col">
                          <a 
                            href={`tel:${council.contact}`}
                            className="inline-flex items-center text-red-600 hover:text-red-700"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2V3a2 2 0 00-2 2zm0 8h2v-2H3v2zm0 8h2v-2H3v2zM3 9h2V7H3v2zm12-6h-2v2h2V3zm0 14h-2v2h2v-2zm0-8h-2v2h2V9zm0 10h-2v2h2v-2zm0-6h-2v2h2v-2zM7 21h2v-2H7v2zM7 5h2V3H7v2zm8 16h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8h2v-2h-2v2zm0-12h2V7h-2v2zm0 10h2v-2h-2v2zm0-6h2v-2h-2v2zm-4 6h2v-2h-2v2zm0-16h2V3h-2v2zM3 17h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2v-2H3v2z" />
                            </svg>
                            {council.contact}
                          </a>
                          <a 
                            href={`mailto:${council.email}`}
                            className="inline-flex items-center text-red-600 hover:text-red-700"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {council.email}
                          </a>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Achievements</h4>
                        <ul className="space-y-2">
                          {council.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
export default StateCouncil