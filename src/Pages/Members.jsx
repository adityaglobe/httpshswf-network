import PageBanner from '../Components/PageBanner'
import BecomePlayer from '../Components/BecomePlayer'
import MemberBenefits from '../Components/MemberBenefits'
function Members() {
  return (
    <div>
      <PageBanner 
        title="Join the HSWF Network" 
        description="Be part of a thriving community dedicated to empowering athletes, coaches, and sports enthusiasts. As a member, you'll gain access to exclusive opportunities, resources, and a platform to showcase your talent." 
      />
      <BecomePlayer />
      <MemberBenefits />
    </div>
  )
}
export default Members