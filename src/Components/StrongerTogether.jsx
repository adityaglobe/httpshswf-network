import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function StrongerTogether() {
  const partners = [
    {
      logo: '/assets/images/partner1.png',
      name: 'MAWW'
    },
    {
      logo: '/assets/images/partner2.png',
      name: 'Fitvio'
    },
    {
      logo: '/assets/images/partner3.png',
      name: 'Big Bingo'
    },
    {
      logo: '/assets/images/partner4.png',
      name: 'Ekrocx'
    },
    {
      logo: '/assets/images/partner5.png',
      name: 'AimAI'
    },
    {
      logo: '/assets/images/partner6.png',
      name: 'Alpheric'
    },
    {
      logo: '/assets/images/partner7.png',
      name: 'Aimshala'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#7F3BE0] font-medium mb-4">Partnerships</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
            Stronger <span className="font-bold">Together</span>
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto">
            HSWF thrives through strategic alliances with prominent organizations such as AimAI, Alpheric, Aimshala, MAWW, Fitvio, Big Bingo, Ekrocx amplifying our impact and shaping a brighter future for sports
          </p>
        </div>

        <div className="relative px-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={2}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            navigation={{
              nextEl: ".partner-swiper-button-next",
              prevEl: ".partner-swiper-button-prev"
            }}
            breakpoints={{
              380: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 }
            }}
            className="partners-slider"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border border-gray-100 rounded-lg p-6 h-24 flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain hover:scale-125"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default StrongerTogether