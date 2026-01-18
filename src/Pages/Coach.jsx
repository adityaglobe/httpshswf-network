import PageBanner from "../Components/PageBanner";
import { Link } from 'react-router-dom';
function Coach() {
  const featuredCoaches = [
    {
      name: "World Aquatics",
      image: "/assets/images/avt-7.png",
    },
    {
      name: "Akansha",
      image: "/assets/images/avt-7.png",
    },
    {
      name: "Muskan",
      image: "/assets/images/avt-7.png",
    },
    {
      name: "Mohit Kumar",
      image: "/assets/images/mohti-kumar.jpg",
    },
    {
      name: "Arham jain",
      image: "/assets/images/avt-2.png",
    },
    {
      name: "Atul pal",
      image: "/assets/images/avt-2.png",
    },
    {
      name: "seema",
      image: "/assets/images/avt-7.png",
    },
    {
      name: "Suraj Singh",
      image: "/assets/images/avt-2.png",
    },
    {
      name: "Arun Singh",
      image: "/assets/images/avt-2.png",
    },
    {
      name: "Arun Singh",
      image: "/assets/images/avt-2.png",
    },
    {
      name: "Sunil Kumar",
      image: "/assets/images/sunil-kumar.jpg",
    },
    {
      name: "Pardeepchoudhary",
      image: "/assets/images/pardeepchoudary.jpg",
    },
    {
      name: "Emmadi Sanjeev Kumar",
      image: "/assets/images/Emmadi-Sanjeev-Kumar.jpg",
    },
    {
      name: "Mohtashim Ibrahim",
      image: "/assets/images/avt-2.png",
    },
  ];

  return (
    <div>
      <PageBanner
        title="Join the HSWF Coaches Network"
        description="Empower your journey in sports. Connect, grow, and make an impact with the HSWF Network."
      />
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="w-full lg:w-1/2 relative">
              <img
                src="/assets/images/member-2.png"
                alt="Become a player illustration"
                className="w-full h-auto"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h4 className="text-[#4361ee] text-base md:text-lg mb-2">
                How to
              </h4>
              <h2 className="text-4xl md:text-5xl text-[#191b2a] mb-8 md:mb-12">
                Become A <span className="font-bold">Coach</span>
              </h2>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex items-start gap-2 relative">
                  <span className="text-4xl font-bold text-[#191b2a] min-w-[48px] absolute left-[-10px] top-8 z-10">
                    01
                  </span>
                  <div className="border border-gray-200 rounded-lg p-6 ps-14 w-full relative before:absolute before:w-[48px] before:h-full before:bg-white before:-left-[54px] before:top-0">
                    <h3 className="font-semibold text-lg mb-1">
                      Fill Out the Form:
                    </h3>
                    <p className="text-gray-600">
                      Share your details, skills, and areas of interest.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-2 relative">
                  <span className="text-4xl font-bold text-[#191b2a] min-w-[48px] absolute left-[-10px] top-8 z-10">
                    02
                  </span>
                  <div className="border border-gray-200 rounded-lg p-6 ps-14 w-full relative before:absolute before:w-[48px] before:h-full before:bg-white before:-left-[54px] before:top-0">
                    <h3 className="font-semibold text-lg mb-1">
                      Submit Your Application:
                    </h3>
                    <p className="text-gray-600">
                      Provide a brief introduction and let us know how you'd
                      like to contribute.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-2 relative">
                  <span className="text-4xl font-bold text-[#191b2a] min-w-[48px] absolute left-[-10px] top-8 z-10">
                    03
                  </span>
                  <div className="border border-gray-200 rounded-lg p-6 ps-14 w-full relative before:absolute before:w-[48px] before:h-full before:bg-white before:-left-[54px] before:top-0">
                    <h3 className="font-semibold text-lg mb-1">
                      Get Approved:
                    </h3>
                    <p className="text-gray-600">
                      Once reviewed and approved, you'll receive confirmation
                      and be connected to relevant programs.
                    </p>
                  </div>
                </div>

                <Link  to="/becomeCoach" 
                  className="bg-[#ff002b] text-white px-8 py-4 rounded-lg hover:bg-red-600 transition-colors text-lg"
                >
                  Join As Coach
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Coaches Section */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center text-[#081c36] mb-4">
            Featured <span className="font-bold">Coaches</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Browse through profiles of coaches who have joined the HSWF Network.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {featuredCoaches.map((coach, index) => (
              <div key={index} className="text-center">
                <div className="relative group">
                  <div className="w-full aspect-square rounded-full bg-pink-50 overflow-hidden mb-2">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-medium mt-4">
                    <span className="relative">
                      {coach.name}
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ff002b]"></span>
                    </span>
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 md:mt-5">
            <Link to="/becomeCoach" className="bg-[#ff002b] text-white px-8 py-4 rounded-lg hover:bg-red-600 transition-colors text-lg inline-block">Join as Coach</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Coach;
