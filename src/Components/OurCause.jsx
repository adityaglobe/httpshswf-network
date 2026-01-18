function OurCause() {
  return (
    <section className='py-10 md:py-20 bg-[#f8f8f8]'>
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <img 
                    src="assets/images/about-text.png" 
                    className='w-full lg:w-[500px] object-contain' 
                    alt="About HSWF" 
                />
                <div className="content-area">
                    <h5 className='text-xl md:text-2xl text-[#0900d5]'>Our Cause</h5>
                    <h2 className='text-4xl md:text-5xl xl:text-6xl mt-3 text-[#081c36]'>
                        <span className="font-bold">Together</span> for Sports
                    </h2>
                    <p className='text-[#333333] leading-snug text-sm-lg md:text-xl lg:text-2xl mt-4'>
                        At the Hardcore Sports Welfare Foundation (HSWF), we are driven by the belief that sports can transform lives, unite communities, and inspire dreams. Yet, at the grassroots level, countless barriers prevent talented individuals from reaching their potential. Our mission is to break these barriers, nurture talent, and create a thriving sports ecosystem that is accessible to all.
                    </p>
                    <div className='mt-8'>
                        <a href="#" className='button-style1 inline-block'>Join HSWF Network</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurCause