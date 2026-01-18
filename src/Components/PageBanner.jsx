import PropTypes from 'prop-types'
function PageBanner({ title, description, bgImage, button }) {
  const backgroundStyle = {
    backgroundImage: `url(${bgImage || '/assets/images/hswf-bg.png'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return (
    <section className='hswf_banner py-10 h-[400px] h-sm-[500px] relative'
      style={backgroundStyle}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto h-full relative z-10">
            <div className="hswf_banner_content flex h-full flex-col justify-center mx-auto text-center max-w-[800px]">
                <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold mb-4 text-white ">{title}</h1>
                {description && <p className="text-white">{description}</p>}
                {button && (
                    <button className="mt-6 px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                        {button}
                    </button>
                )}
            </div>
        </div>
    </section>
  )
}
PageBanner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  bgImage: PropTypes.string,
  button: PropTypes.string
}
export default PageBanner