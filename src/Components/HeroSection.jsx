function HeroSection() {
  return (
    <section className="hero-section" style={{
      backgroundImage: "url('/assets/images/hero-banner.png')", 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '786px',      
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      position: 'relative',
      top: '-109px',
      zIndex: '2',
    }}>
      <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-5 text-white relative z-10">Raising the Bar for Sports Mastery</h4>
      <h5 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl max-w-[800px] mb-5 font-bold font-[Gilroy-Bold] leading-tight text-white relative z-10">FUELING DREAMS FORGING CHAMPIONS</h5>
      <button className="button-style1 relative z-10">Join Us</button>
    </section>
  )
}
export default HeroSection