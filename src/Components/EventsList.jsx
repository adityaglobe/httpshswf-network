import PropTypes from 'prop-types'
function EventsList({ events, type = 'upcoming' }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-12">
          {type === 'upcoming' ? 'Upcoming' : 'Past'} <span className="font-bold">Events</span>
        </h2>
        <div className="grid md:grid-cols-2 xxl:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-[200px] md:h-[400px] object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#ff002b] text-white px-3 py-1 rounded-full text-sm">
                  {event.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

EventsList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired,
  type: PropTypes.oneOf(['upcoming', 'past'])
}

export default EventsList