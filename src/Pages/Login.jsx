import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Login() {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/assets/images/login_bg.png')] bg-cover bg-center relative overflow-hidden">
        <style jsx>{`
            header {
                display: none;
            }
        `}</style>
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10">
          <img src="/assets/images/player-pattern-left.png" alt="" className="w-48 md:w-72" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10">
          <img src="/assets/images/player-pattern-right.png" alt="" className="w-48 md:w-72" />
        </div>
      </div>

      {/* Login Container */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl w-full mx-4 my-8 relative z-10">
        <div className="grid md:grid-cols-2 items-center">
          {/* Left Side - Image with Quote */}
          <div className="relative">
            <div className="relative h-[300px] md:h-[600px]">
              <img 
                src="/assets/images/log_in_img_1.png" 
                alt="Cricket Player" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="text-lg md:text-xl mb-4 max-w-md">
                  Sports teaches you character, it teaches you to play by the rules, it teaches you to know what it feels like to win and lose—it teaches you about life.
                </p>
                <div>
                  <p className="font-bold">Mahendra Singh Dhoni</p>
                  <p className="text-sm opacity-80">Cricket Legend</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <img src="/assets/images/logo.jpg" alt="HSWF Logo" className="h-14 mb-8" />
              <h1 className="text-2xl md:text-4xl mb-2">
                Get started with <span className="font-bold">HSWF</span>
              </h1>
              <p className="text-gray-600">Continue with your mobile number</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center border rounded-lg p-4 focus-within:border-[#7F3BE0]">
                  <img src="/assets/images/india-flag.png" alt="India" className="w-6 h-4 mr-2" />
                  <input
                    type="tel"
                    placeholder="Enter Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-full outline-none"
                    maxLength="10"
                  />
                </label>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#ff002b] text-white py-4 rounded-lg hover:bg-[#cc0023] transition-colors"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login