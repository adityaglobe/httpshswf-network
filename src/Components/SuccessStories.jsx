import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function SuccessStories() {
  const testimonials = [
    {
      id: 1,
      name: "Amit Verma",
      image: "/assets/images/user_1.png", // Using placeholder image
      subjects: "English, Economics, History, Political Science",
      quote: "HSWF's support transformed our small workshop into a statewide event with over 200 participants. Their marketing and design team made all the difference!"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      image: "/assets/images/user_1.png", // Using placeholder image
      subjects: "Sports Management, Event Planning",
      quote: "The design assistance and player engagement strategies provided by HSWF helped us create an unforgettable tournament experience."
    },
    {
      id: 3,
      name: "Michael Chen",
      image: "/assets/images/user_1.png",  // Using placeholder image
      subjects: "Community Sports, Youth Development",
      quote: "Working with HSWF allowed us to reach more young athletes than ever before. Their network and marketing support were invaluable."
    }
  ];

  return (
    <section className="py-20 bg-[#eeeeee6c] relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-16">
          Success <span className="font-bold">Stories</span>
        </h2>

        <div className="relative px-10">
          <button 
            className="absolute top-1/2 -left-2 z-10 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg prev-button cursor-pointer"
            type="button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute top-1/2 -right-2 z-10 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg next-button cursor-pointer"
            type="button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.prev-button',
              nextEl: '.next-button',
            }}
            className="success-stories-slider"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col items-center text-center py-8">
                  <div className="w-32 h-32 mb-6 relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                    <div className="absolute -inset-1 border-2 border-dashed border-yellow-400 rounded-full animate-spin-slow"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{testimonial.subjects}</p>
                  <div className="flex justify-center gap-2 mb-6">
                    <span className="text-yellow-400 text-4xl">★</span>
                    <span className="text-yellow-400 text-4xl">★</span>
                  </div>
                  <blockquote className="text-gray-700 max-w-2xl">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}

export default SuccessStories;