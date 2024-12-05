import { Routes, Route } from 'react-router';
import Home from '../../pages/Home';
import PastConferences from '../../pages/Past-Conferences';
import Donate from '../../pages/Donate';
import Contact from '../../pages/Contact';
import Register from '../../pages/Register';

const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/past-conferences" element={<PastConferences />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Rout;
