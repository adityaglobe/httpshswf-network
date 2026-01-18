import { images } from '../utils/images'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
function LatestInsights() {
  const insights = [
    {
      id: 1,
      title: 'Best Sports Supplements for Muscle Growth and Recovery',
      date: 'May 01, 2023',
      category: 'Health Tips',
      author: 'Super Admin',
      image: images.insights.insight1
    },
    {
      id: 2,
      title: 'Top Recovery Tips After Intense Workouts',
      date: 'Apr 28, 2023',
      category: 'Health Tips',
      author: 'Super Admin',
      image: images.insights.insight2
    },
    {
      id: 3,
      title: 'Top Cardio Workouts to Boost Your Endurance and Fitness',
      date: 'Apr 25, 2023',
      category: 'Exercise',
      author: 'Super Admin',
      image: images.insights.insight3
    },
    {
      id: 4,
      title: 'Build Muscle and Strength for Better Sports Performance',
      date: 'Apr 20, 2023',
      category: 'Health Tips',
      author: 'Super Admin',
      image: images.insights.insight4
    },
    {
      id: 3,
      title: 'Top Cardio Workouts to Boost Your Endurance and Fitness',
      date: 'Apr 25, 2023',
      category: 'Exercise',
      author: 'Super Admin',
      image: images.insights.insight3
    },
  ];

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-6xl text-[#191b2a] mb-4 md:mb-6">Latest <span className='font-bold'>Insights</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
            HSWF thrives through strategic alliances with prominent organizations such as WFMC, WSMAC, JTFI, and 
            MAA, amplifying our impact and shaping a brighter future for sports
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="!pb-12"
        >
          {insights.map(insight => (
            <SwiperSlide key={insight.id}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={insight.image} 
                    alt={insight.title} 
                    className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span className='text-xs'>{insight.date}</span>
                    <span className='text-xs'>•</span>
                    <span className='text-xs'>{insight.category}</span>
                    <span className='text-xs'>•</span>
                    <span className='text-xs'>By {insight.author}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#191b2a] group-hover:text-[#4361ee] transition-colors">
                    {insight.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default LatestInsights