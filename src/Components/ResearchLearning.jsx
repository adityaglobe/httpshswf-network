import { useState, useMemo } from 'react'

function ResearchLearning() {
  const [activeTab, setActiveTab] = useState('all');

  const researchData = [
    {
      type: 'research',
      title: 'Obesity: Are We Overlooking the Real Health Crisis?',
      description: "Obesity isn't just weight gain—it's a growing health crisis linked to heart disease, diabetes, and more, requiring urgent lifestyle changes.",
      image: '/assets/images/gt-assistant-coach.jpg',
      icon: '/assets/images/pdf-icon.png'
    },
    {
      type: 'learning',
      title: 'Digital footprint in Sports',
      description: "A digital footprint in sports shapes an athlete's reputation, influencing careers, endorsements, and fan engagement—making online presence as crucial as on-field performance.",
      image: '/assets/images/gt-fitness-trainer.jpg',
      icon: '/assets/images/pdf-icon.png'
    },
    {
      type: 'learning',
      title: 'Career in Sports',
      description: 'A career in sports goes beyond playing—offering opportunities in coaching, management, sports science, and media, where passion meets strategy for success.',
      image: '/assets/images/gt-head-coach.jpg',
      icon: '/assets/images/pdf-icon.png'
    }
  ];

  const filteredData = useMemo(() => 
    activeTab === 'all' 
      ? researchData 
      : researchData.filter(item => item.type.toLowerCase() === activeTab.toLowerCase()),
    [activeTab]
  );

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/dummy.pdf';
    link.download = 'dummy.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const TabButton = ({ type, label }) => (
    <button 
      onClick={() => setActiveTab(type)}
      className={`px-6 py-2 rounded-full border-2 transition-all ${
        activeTab === type 
          ? 'bg-[#ff002b] text-white border-[#ff002b]' 
          : 'border-gray-300 text-gray-600 hover:border-[#ff002b] hover:text-[#ff002b]'
      }`}
    >
      {label}
    </button>
  );

  const ResearchCard = ({ item }) => (
    <div className="relative group">
      <div className="relative h-[400px] bg-gray-200 rounded-lg overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute top-4 left-4">
          <img src={item.icon} alt="PDF icon" className="w-8 h-8" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-md-xl font-bold mb-2">{item.title}</h3>
          <p className="text-sm opacity-90">{item.description}</p>
        </div>
      </div>
      <button 
        onClick={handleDownload}
        className="absolute bottom-6 right-6 bg-[#ff002b] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Download"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </button>
    </div>
  );

  return (
    <section className='py-20 bg-[#f8f8f8]'>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl tex-sm:4xl md:text-5xl mb-4">
            Research & <span className="font-bold">Learning</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Dive into studies, strategies, and resources empowering athletes and coaches to shape the future of sports.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <TabButton type="all" label="All" />
          <TabButton type="research" label="Research" />
          <TabButton type="learning" label="Learning" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item, index) => (
            <ResearchCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResearchLearning