import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 py-2 transition-all duration-300 ${
          scrolled ? "bg-[#191b2a] shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img
                src="/assets/images/logo.jpg"
                className={`transition-all rounded-full duration-300 ${
                  scrolled ? "max-h-[80px]" : "max-h-[100px]"
                }`}
                alt="Logo"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-between w-full">
              <ul className="flex menu gap-6 mx-auto">
                <li>
                  <Link
                    to="/"
                    className="text-white hover:text-[#ff002b] transition-colors uppercase"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-white hover:text-[#ff002b] transition-colors uppercase"
                  >
                    About
                  </Link>
                </li>
                <li className="relative group">
                  <Link
                    to="/events"
                    className="text-white hover:text-[#ff002b] transition-colors uppercase"
                  >
                    EVENTS
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                  <ul className="absolute transform scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300 ease-in-out bg-white shadow-md mt-2 py-2 w-48 rounded-md z-50">
                    <li>
                      <Link
                        to="/upcoming-events"
                        className="block px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50"
                      >
                        Upcoming Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/past-events"
                        className="block px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50"
                      >
                        Past Events
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="relative group">
                  <Link
                    to="/council"
                    className="text-white hover:text-[#ff002b] transition-colors uppercase flex items-center"
                  >
                    Council
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                  <ul className="absolute transform scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300 ease-in-out bg-white shadow-md mt-2 py-2 w-48 rounded-md z-50">
                    <li className="relative group/nested">
                      <div className="flex items-center justify-between px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50 cursor-pointer group-hover/nested:bg-gray-50">
                        <Link 
                          to="council/country/india"
                          className="text-gray-800 hover:text-[#ff002b]"
                        >
                          India
                        </Link>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <ul className="absolute left-full top-0 transform scale-x-0 origin-left group-hover/nested:scale-x-100 transition-transform duration-300 ease-in-out bg-white shadow-md w-48 rounded-md z-50">
                        <li>
                          <Link to="council/state/punjab" className="block px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50" >
                            Punjab </Link>
                        </li>
                        <li>
                          <Link to="council/state/haryana" className="block px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50" >
                            Haryana </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="relative group">
                  <Link
                    to="/academy"
                    className="text-white hover:text-[#ff002b] transition-colors uppercase flex items-center"
                  >
                    Academy
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                  <ul className="absolute transform scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300 ease-in-out bg-white shadow-md mt-2 py-2 w-48 rounded-md z-50">
                    <li className="relative group/nested">
                      <div className="flex items-center justify-between px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50 cursor-pointer">
                        India
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <ul className="absolute left-full top-0 transform scale-x-0 origin-left group-hover/nested:scale-x-100 transition-transform duration-300 ease-in-out bg-white shadow-md w-48 rounded-md z-50">
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50"
                          >
                            Delhi
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50"
                          >
                            Punjab
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50"
                          >
                            Uttarpradesh
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50"
                      >
                        Bangladesh
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="relative group">
                  <Link
                    to="/clubs"
                    className="text-white hover:text-[#ff002b] transition-colors uppercase flex items-center"
                  >
                    Clubs
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                  <ul className="absolute transform scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300 ease-in-out bg-white shadow-md mt-2 py-2 w-48 rounded-md z-50">
                    <li className="relative group/nested">
                      <div className="flex items-center justify-between px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50 cursor-pointer">
                        India
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <ul className="absolute left-full top-0 transform scale-x-0 origin-left group-hover/nested:scale-x-100 transition-transform duration-300 ease-in-out bg-white shadow-md w-48 rounded-md z-50">
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50"
                          >
                            Delhi
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50"
                          >
                            Punjab
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50"
                          >
                            Uttarpradesh
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50"
                      >
                        Bangladesh
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="relative group">
                  <Link
                    to="/associations"
                    className="text-white hover:text-[#ff002b] transition-colors uppercase flex items-center"
                  >
                    Associations
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                  <ul className="absolute transform scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300 ease-in-out bg-white shadow-md mt-2 py-2 w-48 rounded-md z-50">
                    <li className="relative group/nested">
                      <div className="flex items-center justify-between px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50 cursor-pointer">
                        India
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <ul className="absolute left-full top-0 transform scale-x-0 origin-left group-hover/nested:scale-x-100 transition-transform duration-300 ease-in-out bg-white shadow-md w-48 rounded-md z-50">
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50"
                          >
                            Delhi
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50"
                          >
                            Punjab
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50"
                          >
                            Uttarpradesh
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50"
                      >
                        Bhutan
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="/players"
                    className="text-white hover:text-[#ff002b] transition-colors uppercase"
                  >
                    Players
                  </Link>
                </li>
                <li className="relative group">
                  <Link
                    to="#"
                    className="text-white hover:text-[#ff002b] transition-colors flex items-center"
                  >
                    MORE
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                  <ul className="absolute transform scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300 ease-in-out bg-white shadow-md mt-2 py-2 w-48 rounded-md z-50">
                    <li>
                      <Link
                        to="/about"
                        className="block px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="block px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50"
                      >
                        Contact-us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        className="block px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50"
                      >
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cause"
                        className="block px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50"
                      >
                        Cause
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/research"
                        className="block px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50"
                      >
                        Research
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/insights"
                        className="block px-4 py-2 text-gray-800 hover:text-[#ff002b] hover:bg-gray-50"
                      >
                        Insights
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="header-buttons ml-4">
                <Link to="/Join" className="button-style2 mr-3">
                  Join
                </Link>
                <Link to="/donate" className="button-style1">
                  Donate
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Navigation */}
      <div
        className={`fixed top-0 left-0 h-full w-full z-50 lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMenuOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Sidebar */}
        <div
          className={`absolute top-0 left-0 h-full w-[280px] bg-[#191b2a] transform transition-transform duration-300 ease-in-out overflow-y-auto ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <img
                  src="/assets/images/logo.jpg"
                  className="max-h-[40px]"
                  alt="Logo"
                />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white hover:text-[#ff002b] transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/network"
                className="text-white hover:text-[#ff002b] transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Network
              </Link>
              <Link
                to="/programs"
                className="text-white hover:text-[#ff002b] transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </Link>
              <Link
                to="/players"
                className="text-white hover:text-[#ff002b] transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Players
              </Link>
              <Link
                to="/events"
                className="text-white hover:text-[#ff002b] transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                to="/donate"
                className="text-white hover:text-[#ff002b] transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate
              </Link>

              {/* HSWF Dropdown Items */}
              <div className="pt-4 border-t border-gray-700">
                <h3 className="text-gray-400 text-sm mb-3">More</h3>
                <div className="flex flex-col space-y-3">
                  <Link
                    to="/about"
                    className="text-white hover:text-[#ff002b] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/contact"
                    className="text-white hover:text-[#ff002b] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact-us
                  </Link>
                  <Link
                    to="/cause"
                    className="text-white hover:text-[#ff002b] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cause
                  </Link>
                  <Link
                    to="/research"
                    className="text-white hover:text-[#ff002b] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Research
                  </Link>
                  <Link
                    to="/insights"
                    className="text-white hover:text-[#ff002b] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Insights
                  </Link>
                </div>
              </div>

              <div className="pt-4 flex flex-col space-y-3">
                <Link
                  to="/join"
                  className="bg-[#ff002b] text-white py-2 px-4 rounded-lg text-center hover:bg-red-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Now
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
