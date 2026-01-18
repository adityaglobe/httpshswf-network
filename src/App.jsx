import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Join from './Pages/Join';
import Network from './Pages/Network';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Insights from './Pages/Insights';
import Cause from './Pages/Cause';
import Members from './Pages/Members';
import Coach from './Pages/Coach';
import Programs from './Pages/Programs';
import Player from './Pages/Player';
import Volunteer from './Pages/Volunteer';
import Events from './Pages/Events';
import UpcomingEvents from './Pages/UpcomingEvents';
import PastEvents from './Pages/PastEvents';
import Council from './Pages/Council';
import Academy from './Pages/Academy';
import Clubs from './Pages/Clubs';
import Associations from './Pages/Associations';
import Donate from './Pages/Donate';
import BecomeCoach from './Pages/BecomeCoach';
import BecomeVolunteer from './Pages/BecomeVolunteer';
import BecomePlayer from './Pages/BecomePlayer';
import BecomeMember from './Pages/BecomeMember';
import BecomeOrganisation from './Pages/BecomeOrganisation';
import SupportCause from './Pages/SupportCause';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import CookiePolicy from './Pages/CookiePolicy';
import TermsOfUse from './Pages/TermsOfUse';
import RefundPolicy from './Pages/RefundPolicy';
import CodeOfConduct from './Pages/CodeOfConduct';
import Players from './Pages/Players';
import StateCouncil from './Pages/StateCouncil';
import CountryCouncil from './Pages/CountryCouncil';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/network" element={<Network />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/cause" element={<Cause />} />
        <Route path="/members" element={<Members />} />
        <Route path="/coach" element={<Coach />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/player" element={<Player />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/events" element={<Events />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/past-events" element={<PastEvents />} />
        <Route path="/council" element={<Council />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/associations" element={<Associations />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/become-coach" element={<BecomeCoach />} />
        <Route path="/become-volunteer" element={<BecomeVolunteer />} />
        <Route path="/become-player" element={<BecomePlayer />} />
        <Route path="/become-member" element={<BecomeMember />} />
        <Route path="/become-organisation" element={<BecomeOrganisation />} />
        <Route path="/support-cause" element={<SupportCause />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
        <Route path="/players" element={<Players />} />
        <Route path="/council/state/:stateId" element={<StateCouncil />} />
        <Route path="/council/country/:countryId" element={<CountryCouncil />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
