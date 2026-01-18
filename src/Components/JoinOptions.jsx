import { Link } from 'react-router-dom';
function JoinOptions() {
  const joinOptions = [
    {
      title: "Sports Organization",
      description: "We focus on improving the well-being of underserved communities by providing healthcare access, health education, essential supplies, and preventive measures to address specific health challenges.",
      link: "/Become-organisation",
      buttonText: "Join HSWF Network",
      images: ['/assets/images/sports-organizations.jpg'],
      bgColor: 'bg-[#E8F5F0]'
    },
    {
      title: "Member",
      description: "Register as a member to access exclusive opportunities, resources, and a platform to showcase your talent or expertise. Whether you're an athlete, coach, or sports enthusiast, the HSWF Network welcomes you.",
      link: "/Become-member",
      buttonText: "Join as a Member",
      images: ['/assets/images/join-member.jpg'],
      bgColor: 'bg-[#F3F4F6]'
    },
    {
      title: "Player",
      description: "Showcase your skills, achievements, and journey as a player. Gain visibility, connect with coaches and sponsors, and unlock new opportunities to excel in your sport.",
      link: "/Become-player",
      buttonText: "Join as a Player",
      images: ['/assets/images/join-player.jpg'],
      bgColor: 'bg-[#FDF2F8]'
    },
    {
      title: "Volunteer",
      description: "Support our mission by contributing your time, skills, and passion. Help organize events, manage programs, and make a real difference in the lives of athletes and communities.",
      link: "/become-volunteer",
      buttonText: "Join as a Volunteer",
      images: ['/assets/images/join-colunteer.jpg'],
      bgColor: 'bg-[#ECFDF5]'
    },
    {
      title: "Partner with Us",
      description: "Collaborate with HSWF to amplify the impact of our initiatives. Whether you're a sponsor, donor, or corporate partner, your support can transform lives and uplift the sports community.",
      link: "/contact",
      buttonText: "Partner with Us",
      images: ['/assets/images/join-partner.jpg'],
      bgColor: 'bg-[#FDF2F8]'
    },
    {
      title: "Coach",
      description: "Join as a Coach Support our mission by sharing your expertise and enthusiasm. Help develop athletes, manage training programs, and make a significant impact in the sports community.",
      link: "/become-coach",
      buttonText: "Join as a Coach",
      images: ['/assets/images/join-coach.jpg'],
      bgColor: 'bg-[#F0F9FF]'
    }
  ];

  return (
    <div className="container mx-auto p-5 join-option bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {joinOptions.map((option, index) => (
          <div key={index} className={`${option.bgColor} rounded-lg relative overflow-hidden group`}>
             <div className="rounded-tr-lg overflow-hidden">
              <img 
                src={option.images[0]} 
                alt={option.title} 
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="relative z-10 p-6">
              <h3 className="text-2xl font-bold mb-4">
                Join as a <span className="text-[#ff002b]">{option.title}</span>
              </h3>
              <p className="text-gray-600 mb-6">{option.description}</p>
              <Link 
                to={option.link}
                className="inline-block bg-[#ff002b] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                {option.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default JoinOptions;