function CoreValues() {
  return (
    <section className="py-20 bg-[#191b2a] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Core <span className="text-[#ff002b]">Values</span></h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white rounded-lg p-5 sm:7 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <img 
                src="/assets/images/rocket-1.png" 
                alt="Mission Icon" 
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-3xl text-[#191b2a] font-bold">Our Mission</h3>
            </div>
            <p className='text-black'>
              To empower athletes, coaches, and sports enthusiasts by providing resources, 
              opportunities, and an inclusive platform to excel and thrive in the world of sports.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-lg p-5 sm:7 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <img 
                src="/assets/images/rocket-2.png" 
                alt="Vision Icon" 
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-3xl text-[#191b2a] font-bold">Our Vision</h3>
            </div>
            <p className='text-black'>
              To create a vibrant and accessible sports network that nurtures talent, 
              builds communities, and inspires success through the power of sports.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreValues