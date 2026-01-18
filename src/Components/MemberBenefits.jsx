const defaultBenefits = [
  {
    title: 'Marketing Support',
    description: 'Boost your event visibility with customised campaigns across social media, newsletters, and digital platforms.',
    bgColor: 'bg-[#f8e9e0]',
    image: '/assets/images/showcase_talent.png'
  },
  {
    title: 'Design Assistance',
    description: 'Engage your audience with stunning visuals, including banners, posters, and social media creatives.',
    bgColor: 'bg-[#d9eeec]',
    image: '/assets/images/access_resource.png'
  },
  {
    title: 'Player Engagement',
    description: 'Reach athletes and teams through our vast network to ensure strong participation.',
    bgColor: 'bg-[#e9ecf0]',
    image: '/assets/images/be_recognized.png'
  }
];

function MemberBenefits({ title = "Member Benefits", benefits = defaultBenefits, buttonText = "Join As Member" }) {
  return (
    <section className="py-16 bg-[#f8f8f8]">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-12">
          {title.split(' ').map((word, i, arr) => 
            i === arr.length - 1 ? 
            <span key={i} className="text-black font-bold">{word}</span> : 
            word + ' '
          )}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`${benefit.bgColor} rounded-xl p-6 transition-transform duration-300 hover:-translate-y-2`}>
              <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-6">{benefit.description}</p>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="button-style1">{buttonText}</button>
        </div>
      </div>
    </section>
  )
}

export default MemberBenefits