import './index.css';
import Navigation from './components/Navigation';
import Rout from './components/Rout';
import ResourceNavigation from './components/ResourcesNavigation';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import MobileNavigation from './components/MobileNavigation';

const App = () => {
  const { showDropdown, showNav } = useContext(AppContext);

  return (
    <main>
      <Navigation />
      {showNav && <MobileNavigation />}
      {showDropdown && <ResourceNavigation />}
      <div>
        <Rout />
      </div>
    </main>
  );
};

export default App;
