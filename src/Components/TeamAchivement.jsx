import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function TeamAchivement() {
  const achievements = [
    {
      id: 1,
      title: 'HSWF Tricity Championship',
      description: 'Honored to welcome Dronacharya Awardee Mr. Shiv Singh at the Chandigarh HSWF Tricity Kickboxing Championship!',
      image: '/assets/images/tricky-championship.jpg'
    },
    {
      id: 2,
      title: 'HSWF Tricity Team',
      description: 'HSWF Tricity Team',
      image: '/assets/images/tricky-tema.jpg'
    },
    {
      id: 3,
      title: 'Honoring Steel Man',
      description: 'Welcoming Mr. Amardeep Singh, the Steel Man of India, after his triumphant return with two Guinness World Records!',
      image: '/assets/images/honering-steel-man.jpg'
    },
    {
      id: 4,
      title: 'HSWF Salute India',
      description: 'HSWF proudly acknowledges Army Chief Mr. Bipin Rawat, celebrating exemplary sportsmanship!',
      image: '/assets/images/salute-india.jpg'
    },
    {
      id: 3,
      title: 'Honoring Steel Man',
      description: 'Welcoming Mr. Amardeep Singh, the Steel Man of India, after his triumphant return with two Guinness World Records!',
      image: '/assets/images/honering-steel-man.jpg'
    },
  ];

  return (
    <section className="py-10 md:py-20 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h4 className="text-[#4361ee] text-base md:text-lg mb-2">Celebrating Our Collective Triumphs</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-[#191b2a] mb-4 md:mb-6">Team Achievements</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
            Introducing Hardcore Sports Welfare Foundation: Elevating the standard of sports mastery, we envision a 
            world unified through the power and grace of sports. As a beacon of health, peace, and empowerment, 
            HSWF is dedicated to nurturing talent and fostering global excellence.
          </p>
        </div>

        <div className="relative px-10">
          {/* Add navigation buttons */}
          <button className="absolute top-1/2 -left-2 z-10 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg prev-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="absolute top-1/2 -right-2 z-10 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg next-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.prev-button',
              nextEl: '.next-button',
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1100: {
                slidesPerView: 4,
              },
            }}
            className="achievements-slider"
          >
            {achievements.map(achievement => (
              <SwiperSlide key={achievement.id}>
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title} 
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-white/80 text-sm">{achievement.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .achievements-slider .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .prev-button,
        .next-button {
          transition: all 0.3s ease;
        }
        
        .prev-button:hover,
        .next-button:hover {
          background-color: #f3f4f6;
        }
      `}</style>
    </section>
  )
}

export default TeamAchivement