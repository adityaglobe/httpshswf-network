function ManagmentPart() {
  const managementData = {
    chiefPatrons: [
      {
        name: "Shri Shiv Singh",
        role: "Dronacharya Awardee Boxing",
        image: "/assets/images/shiv-singh.png"
      },
      {
        name: "Shri Gaurav Khanna",
        role: "Former Minister of Sports",
        image: "/assets/images/gaurav-khanna.webp"
      },
      {
        name: "Shri Gurbir Singh",
        role: "Minister of State",
        image: "/assets/images/gurbir-singh.jpg"
      },
      {
        name: "Shri Kuldeep Beniwal",
        role: "DG SAI",
        image: "/assets/images/kuldeep-beniwal.png"
      },
      {
        name: "Dr. Meenakshi",
        role: "ED SAI",
        image: "/assets/images/meenakshi.jpg"
      },
      {
        name: "Shri Rajesh Kumar",
        role: "Regional Director SAI",
        image: "/assets/images/rajesh-kumar.png"
      },
      {
        name: "Krishan Kumar Chhillar",
        role: "State Awardee Physical edu.",
        image: "/assets/images/kishan-kumar.png"
      },
      {
        name: "Virender Dalal",
        role: "State Awardee Physical edu. & Wrestling Coach",
        image: "/assets/images/virender-dalal.png"
      },
      {
        name: "Manjeet Malik",
        role: "Archery Coach",
        image: "/assets/images/manjeet-malik.png"
      },
      {
        name: "Pushpindeer Rana",
        role: "State Awardee Physical edu. & NCC Incharge Zone 17 Delhi",
        image: "/assets/images/Pushpindeer-Rana.png"
      },
      {
        name: "Bhupinder Makkar",
        role: "Businessman",
        image: "/assets/images/Bhupinder-Makkar.webp"
      }
    ],
    governingBody: [
      {
        name: "Daljeet Singh",
        role: "Chairperson",
        image: "/assets/images/Daljeet-Singh.jpg"
      },// Add governing body members data here
      {
        name: "V.S. Rawat",
        role: "President",
        image: "/assets/images/vs-ravat.jpg"
      },// Add governing body members data here
      {
        name: "Neeraj Dhiman",
        role: "Sr. Vice President",
        image: "/assets/images/Neeraj-Dhiman.jpg"
      },// Add governing body members data here
      // Follow the same structure as chiefPatrons
    ],
    executiveCommittee: [
      {
        name: "S. Satnam Singh",
        role: "President",
        image: "/assets/images/Neeraj-Dhiman.jpg"
      },
      {
        name: "S. Harjeet Singh",
        role: "Vice President",
        image: "/assets/images/harjeet-singh.jpg"
      },
      {
        name: "Hamam Kaur",
        role: "Vice Chairman",
        image: "/assets/images/harnam-preet.jpg"
      },
      {
        name: "S. Manpreet Singh",
        role: "Vice President",
        image: "/assets/images/manpreet-singh.jpg"
      },
      {
        name: "Simran Kaur",
        role: "General Secretary",
        image: "/assets/images/simran-kaur.jpg"
      },
      {
        name: "S. Amrit pal Singh",
        role: "Treasurer",
        image: "/assets/images/amrit-pal.jpg"
      },
      {
        name: "Rajbir Kaur",
        role: "Joint Secretary",
        image: "/assets/images/rajbir-kaur.jpg"
      },
      {
        name: "Harpreet Kaur Sethi",
        role: "Joint Secretary",
        image: "/assets/images/harpreet-kaur-sethi.jpg"
      },
      {
        name: "S. Jaspreet Singh",
        role: "Executive Member",
        image: "/assets/images/dummy-image.png"
      },
      {
        name: "S. Charanjeet Singh",
        role: "Executive Member",
        image: "/assets/images/charanjeet.jpg"
      },
    ],
    gameInCharges: [
      // Add game in-charges data here
    ],
    technicalCommittee: [
      // Add technical committee members data here
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h4 className='text-[#762899] text-2xl mb-5'>The Pillars of Our Success</h4>
          <h2 className="text-4xl md:text-6xl mb-4">
            HSWF <span className="font-bold">Management</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A HSWF team driven by the spirit of sportsmanship and excellence, united in building a stronger sports ecosystem.
          </p>
        </div>

        {/* Chief Patrons Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#7F3BE0]">Chief Patrons</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {managementData.chiefPatrons.map((patron, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={patron.image} 
                    alt={patron.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-1">{patron.name}</h4>
                <p className="text-[#0D123D]">{patron.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Governing Body Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-2 text-[#7F3BE0]">Governing Body</h3>
          <p className='text-center pb-8'>Leading the Organisation with passion and commitment.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {managementData.governingBody.map((patron, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={patron.image} 
                    alt={patron.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-1">{patron.name}</h4>
                <p className="text-[#0D123D]">{patron.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Game In-Charges Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#7F3BE0]">Game In-Charges</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Map through game in-charges */}
          </div>
        </div>

        {/* Executive Committee Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-2 text-[#7F3BE0]">Executive Committee</h3>
          <p className='text-center pb-8'>Driving excellence through dedicated leadership.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {managementData.executiveCommittee.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h4 className="font-semibold mb-1">{member.name}</h4>
                <p className="text-[#0D123D]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Committee Section */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-[#7F3BE0]">Technical Committee</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Map through technical committee members */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ManagmentPart