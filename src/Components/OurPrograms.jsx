import { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function OurPrograms() {
  const [swiper, setSwiper] = useState(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  const programs = [
    {
      image: 'gt-assistant-coach.jpg',
      title: 'GT Assistant Coach',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod.'
    },
    {
      image: 'gt-fitness-trainer.jpg',
      title: 'GT Fitness Trainer',
      description: 'This program provides a comprehensive yet concise training experience in self-defense and basic yoga. Participants will gain practical skills in self-defense techniques that help build strength, agility, and confidence.'
    },
    {
      image: 'sport-nutrition-gt.jpg',
      title: 'Sport Nutrition GT',
      description: 'This program is ideal for those who want to enhance their fitness expertise and learn self-defense and yoga fundamentals. It covers essential topics like breathing techniques, strength training, program design, and exercise science.'
    },
    {
      image: 'gt-head-coach.jpg',
      title: 'GT Head Coach',
      description: 'This program provides a comprehensive understanding of sports nutrition, including macronutrients, micronutrients, hydration, meal planning, and recovery strategies.'
    },
    {
      image: 'sport-nutrition-gt.jpg',
      title: 'Sport Nutrition GT',
      description: 'This program is ideal for those who want to enhance their fitness expertise and learn self-defense and yoga fundamentals. It covers essential topics like breathing techniques, strength training, program design, and exercise science.'
    },
  ];

  return (
    <section className="our-programs pb-10 md:pb-20 bg-[#191b2a] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">Our <span className="font-normal">Programs</span></h2>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-sm md:text-base lg:text-lg">Discover our comprehensive range of fitness and coaching programs designed to help you achieve your goals.</p>
          </div>
        </div>

        <div className="relative">
          <button
            ref={navigationPrevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#ff002b] hover:bg-white hover:text-[#ff002b] text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            onSwiper={setSwiper}
            autoplay={{ 
              delay: 3000,
              disableOnInteraction: false 
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}
            className="programs-slider px-4 md:px-8"
          >
            {programs.map((program, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[400px] bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: `url('/assets/images/${program.image}')` }}>
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                  <div className="relative z-10 flex flex-col items-start justify-end h-full text-left px-6 pb-8">
                    <h2 className="text-xl font-bold mb-4">{program.title}</h2>
                    <p className="text-[13px]">{program.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={navigationNextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#ff002b] hover:bg-white hover:text-[#ff002b] text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default OurPrograms