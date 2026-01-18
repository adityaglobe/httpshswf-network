import { Link } from 'react-router-dom';
function JoinUsSection() {
  const joinOptions = [
    {
      type: 'Athlete or Coach',
      description: 'Showcase your talent and connect with support programs.',
      link: '/join'
    },
    {
      type: 'Organization',
      description: 'Collaborate with us to promote sports and nurture talent.',
      link: '/join'
    },
    {
      type: 'Sponsor',
      description: 'Partner with us to invest in the future of sports.',
      link: '/join'
    },
    {
      type: 'Volunteer',
      description: 'Contribute your time and skills to make a difference.',
      link: '/join'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-md-center">
          <div className="relative lg:order-2 lg:flex-1">
            <img 
              src="/assets/images/how-join-us.png" 
              alt="Team huddle" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6 lg:order-1 lg:flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              How To <span className="text-[#0A142F]">Join Us?</span>
            </h2>
            <div className="space-y-4">
              {joinOptions.map((option, index) => (
                <div key={index} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#ff002b] mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-bold">As an {option.type}:</p>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/join" className="button-style1 inline-block">
              Join HSWF Network
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default JoinUsSection;