import PageBanner from '../Components/PageBanner'
import JoinOptions from '../Components/JoinOptions'
import WhyJoin from '../Components/WhyJoin'
function Join() {
  return (
    <div>
      <PageBanner   
          title='Join Us' 
          description="Be a part of the HSWF Network and contribute to empowering the sports ecosystem. Choose how you'd like to join and make a lasting impact in the world of sports."
        />
        <JoinOptions />
        <WhyJoin />
    </div>
  )
}
export default Join