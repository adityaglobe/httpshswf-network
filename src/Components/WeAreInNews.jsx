import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function WeAreInNews() {
  const newsData = [
    {
      logo: '/assets/images/news-1.png',
      text: 'The India Skills Report 2023 revealed that employable talent in India has increased from',
      link: '#',
    },
    {
      logo: '/assets/images/news-2.png',
      text: 'The India Skills Report 2023 revealed that employable talent in India has increased from',
      link: '#',
    },
    {
      logo: '/assets/images/news-3.png',
      text: 'The India Skills Report 2023 revealed that employable talent in India has increased from',
      link: '#',
    },
    {
      logo: '/assets/images/news-4.png',
      text: 'The India Skills Report 2023 revealed that employable talent in India has increased from',
      link: '#',
    },
    {
      logo: '/assets/images/news-5.png',
      text: 'The India Skills Report 2023 revealed that employable talent in India has increased from',
      link: '#',
    },
    {
      logo: '/assets/images/news-6.png',
      text: 'The India Skills Report 2023 revealed that employable talent in India has increased from',
      link: '#',
    },
    {
        logo: '/assets/images/news-5.png',
        text: 'The India Skills Report 2023 revealed that employable talent in India has increased from',
        link: '#',
    },
    {
        logo: '/assets/images/news-4.png',
        text: 'The India Skills Report 2023 revealed that employable talent in India has increased from',
        link: '#',
      }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-6xl mb-4">
            We are in <span className="font-bold">News</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Inspirational success stories from diverse individuals, unlocking potential across all walks of life.
          </p>
        </div>

        <div className="relative px-sm-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="news-slider"
          >
            {Array.from({ length: Math.ceil(newsData.length / 2) }).map((_, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="grid grid-rows-2 gap-3">
                  {newsData.slice(slideIndex * 2, slideIndex * 2 + 2).map((news, index) => (
                    <div key={index} className="bg-white border border-gray-100 shadow-sm p-6 rounded-lg">
                      <p className="text-gray-600 flex-grow text-sm mb-3">{news.text}</p>
                      <div className="flex justify-between items-center">
                        <img src={news.logo} alt="News Logo" className="h-5 object-contain" />
                        <a 
                          href={news.link} 
                          className="text-[#ff002b] whitespace-nowrap hover:text-[#cc0023] transition-colors text-sm flex items-center gap-1"
                        >
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform rotate-[-45deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="text-center mt-12"><a href="#" className="button-style2">View All News</a></div>
      </div>
    </section>
  );
}

export default WeAreInNews