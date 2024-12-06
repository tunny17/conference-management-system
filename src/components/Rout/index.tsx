import { Routes, Route } from 'react-router';
import Home from '../../pages/Home';
import PastConferences from '../../pages/Past-Conferences';
import Donate from '../../pages/Donate';
import Contact from '../../pages/Contact';
import Register from '../../pages/Register';
import Schedule from '../Schedule';
import Workshop from '../../pages/Workshop';
import Gallery from '../../pages/Gallery';
import Speakers from '../../pages/Speakers';
import Committee from '../../pages/Committee';
import CallForPapers from '../../pages/Call-for-papers';
import ResearchTalk from '../../pages/Research-talk';

const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/past-conferences" element={<PastConferences />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/workshop" element={<Workshop />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/keynote-speakers" element={<Speakers />} />
      <Route path="/committee" element={<Committee />} />
      <Route path="/call-for-papers" element={<CallForPapers />} />
      <Route path="/research-talk" element={<ResearchTalk />} />
    </Routes>
  );
};

export default Rout;
