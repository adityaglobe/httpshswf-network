import StrongerTogether from '../Components/StrongerTogether'
import PageBanner from '../Components/PageBanner'
import JoinUsSection from '../Components/JoinUsSection'
import OurMission from '../Components/OurMission'
import CoreValues from '../Components/CoreValues'
import ManagmentPart from '../Components/ManagmentPart'
function About() {
  return (
    <div>
        <PageBanner
            title="About"
            description="Connect and grow with our extensive network of partners and professionals"
        />
        <OurMission />
        <CoreValues />
        <ManagmentPart />
        <JoinUsSection />
        <StrongerTogether />
    </div>
  )
}
export default About