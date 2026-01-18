import { Link } from 'react-router-dom';
import logo from '/assets/images/logo.jpg';
function Footer() {
  const mainMenuLinks = [
    { name: 'JOIN', path: '/join' },
    { name: 'NETWORK', path: '/network' },
    { name: 'PLAYERS', path: '/player' },
    { name: 'COACHES', path: '/coach' },
    { name: 'MEMBERS', path: '/members' },
    { name: 'VOLUNTEERS', path: '/volunteer' },
  ];

  const secondaryMenuLinks = [
    { name: 'EVENTS', path: '/events' },
    { name: 'DONATE', path: '/support-cause' },
    { name: 'CAUSE', path: '/cause' },
    { name: 'RESEARCH', path: '/research' },
    { name: 'INSIGHTS', path: '/insights' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'CAREERS', path: '/careers' },
    { name: 'PARTNERSHIPS', path: '/partnerships' },
    { name: 'FAQ', path: '/faq' },
    { name: 'TESTIMONIALS', path: '/testimonials' },
    { name: 'RESOURCES', path: '/resources' }
  ];

  return (
    <footer className="bg-[#1B1D2A] text-white py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Logo and Info Section */}
          <div className="space-y-4">
            <img src={logo} alt="Logo" className="h-32 rounded-full" />
            <div className="text-sm space-y-2">
              <p>Section 12A & 80G -</p>
              <p>AAGCH5442G20221</p>
              <p>CIN - U92400DL2022NPL406386</p>
              <p>NITI Aayog -DL/2022/0332632</p>
              <p>PAN - AAGCH5442Q</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/assets/images/phone_icon.svg" alt="phone" className="w-5 h-5" />
              <a href="tel:+919810617498">+91 9810617498</a>
            </div>
            <div className="flex items-center gap-2">
              <img src="/assets/images/mail_icon.svg" alt="email" className="w-5 h-5" />
              <a href="mailto:satnamsingh@gmail.com">satnamsingh@gmail.com</a>
            </div>
            <div className="flex items-start gap-2">
              <img src="/assets/images/location.svg" alt="location" className="w-5 h-5 mt-1" />
              <p>Network<br />601,Magnus Tower, Sector 73 Noida,<br />Uttar Pradesh, India 201307</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/facebook.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/twitter.svg" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="https://threads.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/threads-fill.svg" alt="Threads" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Join Now Section */}
          <div className="space-y-4 text-center">
            <p className="text-sm">Be a part of the Network and contribute to empowering the sports ecosystem.</p>
            <Link to="/join" className="bg-[#ff002b] text-white px-6 py-2 inline-block rounded-lg hover:bg-red-700 transition-colors">
              Join Now
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-10 border-t border-gray-700 pt-6">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {mainMenuLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-sm hover:text-[#ff002b] transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {secondaryMenuLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-sm hover:text-[#ff002b] transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-1 justify-center text-center md:text-left">
              <span>©2025 <Link to="https://sikhgamesfederationofindia.in/">Sikhgamesfederationofindia</Link> | Made for Sports by</span>
              <a href="#" className="text-white hover:text-[#ff002b]">Network</a>
              <span>Initiative of</span>
              <a href="#" className="text-white hover:text-[#ff002b]">Alpherie</a>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
              <Link to="/terms-of-use" className="hover:text-white">Terms of Use</Link>
              <Link to="/refund-policy" className="hover:text-white">Refund Policy</Link>
              <Link to="/code-of-conduct" className="hover:text-white">Code of Conduct</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;