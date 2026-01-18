function Help() {
  return (
    <section className='py-10 md:py-20' style={{background: "url('/assets/images/map_bg.png')",  backgroundSize: 'cover',backgroundPosition: 'center',}}>
         <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse lg:flex-row gap-8">
                    <div className='w-full lg:w-1/2'>
                        <h3 className='text-4xl md:text-6xl text-[#081c36]'>How You Can <span className='font-bold'>Help</span></h3>
                        <p className='mt-4 md:mt-6'>Together, we can overcome these challenges and empower athletes to reach their full potential:</p>
                        <ul className='check space-y-3'>
                            <li><b>Donate: </b>Contribute to developing infrastructure, providing gear, and funding training.</li>
                            <li><b>Sponsor a Player: </b>Help an aspiring athlete access the resources they need.</li>
                            <li><b>Spread Awareness: </b>Advocate for grassroots sports development and inspire others to join the cause.</li>
                        </ul>
                        <div className='mt-6'>
                            <a href="#" className='button-style1 inline-block'>Support our Cause</a>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <img src="assets/images/how_can_help_img.png" className="w-lg-full h-auto" alt="How you can help illustration" />
                    </div>
                </div>
         </div>
    </section>
  )
}
export default Help