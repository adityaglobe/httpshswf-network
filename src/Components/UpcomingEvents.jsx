import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { upcomingEvents } from '../data/upcomingEvents';
import { Link } from 'react-router-dom';

function UpcomingEvents() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00'
  });

  useEffect(() => {
    const eventDate = new Date('2025-01-16T00:00:00');
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = eventDate - now;
      
      if (difference > 0) {
        const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0');
        const hours = String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        
        setTimeLeft({ days, hours, minutes });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="upcoming-events py-10 overflow-hidden">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left side slider */}
                <div className="w-full md:w-1/2 md:block hidden">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        className="h-[520px]"
                    >
                        {upcomingEvents.map((event, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative bg-black rounded-lg overflow-hidden">
                                    <div className="absolute top-4 z-20 left-4 rounded bg-[#ff002b] text-white px-3 py-1 text-sm font-bold">
                                        {event.status || 'Upcoming'}
                                    </div>
                                    <div className="absolute top-4 z-10 right-4 text-white">
                                        <div className="flex items-center gap-1">
                                            <div className="text-center">
                                                <span className="text-3xl font-bold">{timeLeft.days}</span>
                                                <span className="text-xs block">days</span>
                                            </div>
                                            <div className="text-center">
                                                <span className="text-3xl font-bold">{timeLeft.hours}</span>
                                                <span className="text-xs block">hours</span>
                                            </div>
                                            <div className="text-center">
                                                <span className="text-3xl font-bold">{timeLeft.minutes}</span>
                                                <span className="text-xs block">minutes</span>
                                            </div>
                                        </div>
                                    </div>
                                    <img 
                                        src={event.image} 
                                        alt={event.title || 'Event Image'} 
                                        className="w-full h-full object-cover opacity-80" 
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Right side content */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl lg:text-7xl md:text-start text-center text-[#191b2a] uppercase font-bold mb-8">
                        <span className="text-[#ff002b]">HSWF</span> UPCOMING EVENTS
                    </h2>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1} // Reduce slidesPerView for mobile
                        loop={upcomingEvents.length > 3} // Only enable loop if enough slides
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 15
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            }
                        }}
                        className=""
                    >
                        {upcomingEvents.map((event, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-lg shadow-md overflow-hidden h-md-48 h-full">
                                    <img src={event.image} alt={event.title} className="w-full h-md-full object-cover" />
                                    <div className="absolute top-2 left-2 bg-[#ff002b] text-white px-2 py-1 text-sm rounded">
                                        {event.date}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="text-center mt-8">
                <Link to="#" className='button-style1'>Host Your Event</Link>
            </div>
        </div>
    </section>
  );
}

export default UpcomingEvents;

