
function WhyJoin() {
  const benefits = [
    {
      title: "Visibility",
      description: "Showcase your profile or organization to a wide audience.",
    },
    {
      title: "Opportunities",
      description: "Access training, events, and connections to grow in your sports journey.",
    },
    {
      title: "Impact",
      description: "Contribute to building a thriving sports ecosystem.",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Image with vertical text */}
          <div className="relative">
            <img 
              src="/assets/images/why-join.png" 
              alt="Team Celebration" 
              className="w-full h-lg-[500px] object-cover rounded-lg lg:ml-12"
            />
          </div>

          {/* Right side - Content */}
          <div className="lg:pl-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Join <span className="text-[#0A142F]">HSWF</span>?
            </h2>
            <p className="text-gray-600">
              Together, we can overcome these challenges and empower athletes to reach their full potential:
            </p>

            {/* Benefits list */}
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-[#ff002b] text-xl">{benefit.icon}</span>
                  <div >
                    <ul className='check'>
                    <li className="text-gray-600 mb-1"><span className='font-bold text-black'>{benefit.title}:</span> {benefit.description}</li>
                    </ul>
                  </div>
                </div>
              ))}

            {/* Call to action */}
            <div className="mt-10">
              <p className="text-xl font-semibold mb-4">
                Join the movement. <span className="text-[#0A142F]">Be a part of HSWF today!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyJoin