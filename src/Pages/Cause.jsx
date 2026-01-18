import { useState } from "react";
import { Link } from "react-router-dom";
function Cause() {
  const [activeChallenge, setActiveChallenge] = useState(0);
  const challenges = [
    {
      title: "Lack of Infrastructure",
      content:
        "Limited access to quality sports facilities, equipment, and training grounds, particularly in rural areas.",
      image: "/assets/images/roots-1.png",
    },
    {
      title: "Financial Constraints",
      content:
        "High costs of training, equipment, and competition participation that create barriers for many aspiring athletes.",
      image: "/assets/images/roots-2.png",
    },
    {
      title: "Limited Access to Professional Training",
      content:
        "Shortage of qualified coaches and structured training programs, especially in smaller towns and villages.",
      image: "/assets/images/roots-3.png",
    },
    {
      title: "Gender Inequality",
      content:
        "Persistent gender-based discrimination in sports opportunities, resources, and recognition.",
      image: "/assets/images/roots-4.png",
    },
    {
      title: "Awareness and Support",
      content:
        "Lack of community awareness about sports opportunities and limited support systems for athletes.",
      image: "/assets/images/roots-5.png",
    },
  ];

  return (
    <div>
      <style jsx>{`
        header {
          background: #191b2a !important;
        }
      `}</style>
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2">
              <h4 className="text-[#4361ee] text-xl mb-4">Our Cause</h4>
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
                Empowering Lives Through <span className="text-black font-bold">Sports</span>
              </h1>
              <p className="text-gray-700 sm:text-lg">
                At the{" "}
                <span className="font-semibold">
                  Hardcore Sports Welfare Foundation (HSWF)
                </span>
                , we are driven by the belief that sports can transform lives,
                unite communities, and inspire dreams. Yet, at the grassroots
                level, countless barriers prevent talented individuals from
                reaching their potential. Our mission is to break these
                barriers, nurture talent, and create a thriving sports ecosystem
                that is accessible to all.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/assets/images/cause_main_banner.png"
                alt="Sports Activities Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f9f8f9] py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-6 text-[#0d123d]">
            Challenges At The{" "}
            <span className="font-bold">Grassroots Level</span>
          </h2>
          <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-12">
            <div className="lg:w-1/2">
              <p className="text-gray-700 mb-8">
                Despite the passion for sports across India, grassroots athletes
                and communities face significant challenges, including:
              </p>

              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className={`p-5 rounded-xl cursor-pointer transition-all bg-white shadow-lg duration-300 ${
                      activeChallenge === index
                        ? "border-l-4 border-red-500"
                        : ""
                    }`}
                    onClick={() => setActiveChallenge(index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">
                        {challenge.title}
                      </h3>
                      <span className="text-red-500 transition-transform duration-300 transform">
                        {activeChallenge === index ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        )}
                      </span>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeChallenge === index
                          ? "max-h-24 mt-2 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600">{challenge.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/supportCause" className="button-style1 inline-block mt-5">Support our Cause</Link>
            </div>
            <div className="lg:w-1/2">
              <img
                src={challenges[activeChallenge].image}
                alt={challenges[activeChallenge].title}
                className="w-full h-auto rounded-lg shadow-xl transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#191b2a] py-16">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-white">
                Our <span className="text-black font-bold">Commitment</span>
              </h1>
              <p className="text-white mb-8">
                At HSWF, we are addressing these challenges head-on by:
              </p>
              <ul className="space-y-4 text-white list-none">
                <li className="flex items-center gap-3">
                  <span className="text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>
                    Building Infrastructure: Developing accessible sports
                    facilities for underserved communities.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>
                    Providing Resources: Offering financial aid, equipment, and
                    travel support to grassroots athletes.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>
                    Empowering Coaches: Training and equipping local coaches to
                    guide young talent effectively.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>
                    Promoting Equality: Creating equal opportunities for female
                    athletes and breaking gender barriers.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>
                    Creating Awareness: Educating communities about the
                    importance of sports and career possibilities.
                  </span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/assets/images/our_cmntmnt_img.png"
                alt="Sports Activities Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('assets/images/map_bg.png')] py-16">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2">
              <img
                src="/assets/images/how_can_help_img.png"
                alt="Sports Activities Illustration"
                className="w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:ext-5xl lg:text-6xl mb-6 leading-tight text-[#081c36]">
              How You Can <span className="text-black font-bold">Help</span>
              </h1>
              <p className="mb-8">Together, we can overcome these challenges and empower athletes to reach their full potential:</p>
              <ul className="space-y-4 list-none">
                <li className="flex items-center gap-3">
                  <span className="text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>
                  Donate:Contribute to developing infrastructure, providing gear, and funding training.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>Sponsor a Player: Help an aspiring athlete access the resources they need.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>Spread Awareness:Advocate for grassroots sports development and inspire others to join the cause.</span>
                </li>
              </ul>
              <div className="mt-10">
                <Link to="/supportCause" className="button-style1">Support our Cause</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[url('assets/images/bg-image2.png')]">
            <div className="contianer mx-auto">
              <div className="text-center max-w-[700px] mx-auto">
                <h3 className="text-[#0d123d] font-bold text-3xl sm:text-4xl md:text-5xl">Transforming Lives, One Athlete at a Time</h3>
                <p className="text-[#081C36] mt-4">By addressing these challenges, HSWF is not just nurturing talent but also creating opportunities, fostering inclusivity, and strengthening communities. Every small effort contributes to a brighter future where no talent goes unnoticed.</p>
                <p className="text-[#081C36] mt-4 font-bold">Join us in transforming grassroots sports and empowering lives through the power of sports.</p>
                <div className="mt-10">
                <Link to="/supportCause" className="button-style1">Support our Cause</Link>
              </div>
              </div>
            </div>
      </section>
    </div>
  );
} 
export default Cause;
