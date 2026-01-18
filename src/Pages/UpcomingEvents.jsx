import PageBanner from '../Components/PageBanner'
import EventsList from '../Components/EventsList'
function UpcomingEvents() {
  const upcomingEvents = [
    {
      id: '1',
      title: 'National Sports Championship 2024',
      description: 'Join us for the biggest sports championship of the year featuring multiple disciplines and athletes from across the country.',
      date: 'March 15, 2024',
      location: 'New Delhi',
      category: 'Championship',
      image: './assets/images/event-banner1.png'
    },
    {
      id: '2',
      title: 'National Sports Championship 2024',
      description: 'Join us for the biggest sports championship of the year featuring multiple disciplines and athletes from across the country.',
      date: 'February 25, 2024',
      location: 'Punjab',
      category: 'Championship',
      image: '/assets/images/up2.png'
    },
  ]

  return (
    <div>
      <PageBanner 
        title="Upcoming Events" 
        description="Stay updated with our upcoming sports events and championships. Register now to participate or attend."
        bgImage="./assets/images/page-banners/events-banner.jpg"
      />
      <EventsList events={upcomingEvents} type="upcoming" />
    </div>
  )
}
export default UpcomingEvents