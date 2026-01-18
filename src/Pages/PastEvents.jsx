import PageBanner from '../Components/PageBanner'
import EventsList from '../Components/EventsList'
function PastEvents() {
  const pastEvents = [
    {
      id: 'Delhi-Sikh-Games',
      title: 'Delhi Sikh Games (National sikh (First)games December 2018)',
      description: 'A celebration of winter sports featuring competitions in skiing, ice skating, and more.',
      date: 'April 10, 2018',
      location: 'Shimla',
      category: 'Festival',
      image: './assets/images/events/Delhi-Sikh-Games.jpeg'
    },
    {
      id: 'Gurmat-Painda-Run',
      title: 'Gurmat Painda Run December 2019)',
      description: 'A celebration of winter sports featuring competitions in skiing, ice skating, and more.',
      date: 'January 10, 2019',
      location: 'Punjab',
      category: 'Sports',
      image: '/assets/images/events/Gurmat-Painda-Run.jpeg'
    },
    {
      id: 'National-sikh-Games',
      title: 'National sikh (Third)games 2021)',
      description: 'A celebration of winter sports featuring competitions in skiing, ice skating, and more.',
      date: 'March 12, 2011',
      location: 'Punjab',
      category: 'Sports',
      image: '/assets/images/event-banner1.png'
    },
    {
      id: 'Asian-sikh-Games',
      title: 'Asian sikh games decemeber2021)',
      description: 'A celebration of winter sports featuring competitions in skiing, ice skating, and more.',
      date: 'February 12, 2021',
      location: 'Punjab',
      category: 'Sports',
      image: '/assets/images/event-banner1.png'
    },
    {
      id: 'National-sikh-Games',
      title: 'National sikh (forth)games 2022)',
      description: 'A celebration of winter sports featuring competitions in skiing, ice skating, and more.',
      date: 'February 12, 2022',
      location: 'Punjab',
      category: 'Sports',
      image: '/assets/images/event-banner1.png'
    },
    {
      id: 'National-sikh-Games',
      title: 'National sikh (fifth)games 2023)',
      description: 'A celebration of winter sports featuring competitions in skiing, ice skating, and more.',
      date: 'February 12, 2023',
      location: 'Punjab',
      category: 'Sports',
      image: '/assets/images/events/National-sikh-Games.jpeg'
    },
    {
      id: 'National-sikh-Games-2024',
      title: 'National sikh (Sixth)games 2024)',
      description: 'A celebration of winter sports featuring competitions in skiing, ice skating, and more.',
      date: 'February 12, 2024',
      location: 'Punjab',
      category: 'Sports',
       image: '/assets/images/events/National-sikh-Games.jpeg'
    },
    {
      id: 'Cross-Country-Run',
      title: 'Cross Country Run',
      description: 'A celebration of winter sports featuring competitions in skiing, ice skating, and more.',
      date: 'February 12, 2024',
      location: 'Punjab',
      category: 'Sports',
       image: '/assets/images/events/Cross-Country-Run.jpeg'
    },
  ]

  return (
    <div>
      <PageBanner 
        title="Past Events" 
        description="Explore our successfully conducted events and championships. Relive the moments of excellence."
        bgImage="./assets/images/page-banners/events-banner.jpg"
      />
      <EventsList events={pastEvents} type="past" />
    </div>
  )
}
export default PastEvents