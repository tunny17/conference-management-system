import { useContext } from 'react';
import { Link, useLocation } from 'react-router';
import { AppContext } from '../../context/AppContext';

const MobileNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { setShowNav } = useContext(AppContext);
  // const { setShowDropdown, showDropdown, setShowNav } = useContext(AppContext);

  const navs = [
    {
      title: 'ICTAS 2025',
      isDropDown: false,
      path: '/',
      isAbout: false
    },
    {
      title: 'About ICTAS',
      isDropDown: false,
      path: '/#about',
      isAbout: true
    },
    {
      title: 'Past Conferences',
      isDropDown: false,
      path: '/past-conferences',
      isAbout: false
    },
    {
      title: 'Committee',
      isDropDown: false,
      path: '/committee',
      isAbout: false
    },
    // {
    //   title: 'Program',
    //   isDropDown: false,
    //   path: '/schedule',
    //   isAbout: false
    // },
    // {
    //   title: 'Donate',
    //   isDropDown: false,
    //   path: '/donate',
    //   isAbout: false
    // },
    {
      title: 'Contact Us',
      isDropDown: false,
      path: '/contact',
      isAbout: false
    },
    {
      title: 'Register',
      isDropDown: false,
      path: '/',
      isAbout: false
    }
  ];

  return (
    <div className="h-auto bg-black z-[2000] fixed top-0 left-0 bg-opacity-50 inset-0 py-5">
      <div className="flex flex-col items-start w-[95vw] px-5 md:px-10 mx-auto py-3 bg-white h-[70vh] rounded-md">
        <div className="flex justify-between items-center w-full">
          <Link to={`/`} onClick={() => setShowNav(false)}>
            <img src="/logo.svg" alt="" className="w-24 md:w-auto" />
          </Link>

          <button type="button" onClick={() => setShowNav(false)} className="w-5 block md:hidden">
            <img src="/close.svg" alt="" />
          </button>
        </div>

        <nav className="flex flex-col mt-10 items-center gap-8 md:hidden">
          {/* <button
            type="button"
            onClick={() => {
              setShowDropdown(!showDropdown);
              setShowNav(false);
            }}
            className={`text-sm flex -ml-5 items-center justify-start gap-4 ${
              showDropdown ? 'font-bold text-primary-light' : ''
            }`}
          >
            ICTAS 2025
            <span className="w-3">
              <svg viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.9344 0.554688H6.7044H1.0944C0.134397 0.554688 -0.345603 1.71469 0.334397 2.39469L5.5144 7.57469C6.3444 8.40469 7.6944 8.40469 8.5244 7.57469L10.4944 5.60469L13.7044 2.39469C14.3744 1.71469 13.8944 0.554688 12.9344 0.554688Z"
                  fill={`${showDropdown ? '#4B6BA4' : '#000'}`}
                />
              </svg>
            </span>
          </button> */}

          <ul className="flex flex-col items-start gap-8">
            {navs.map((nav) => (
              <Link
                onClick={() => setShowNav(false)}
                to={`${nav.path}`}
                className={`text-sm flex items-center gap-4 ${
                  currentPath === nav.path ? 'font-bold text-primary-light' : ''
                }`}
              >
                {nav.title}
              </Link>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => {
            setShowNav(false);
            window.open('/papers');
          }}
          className="md:hidden mt-5 block bg-primary-light text-sm p-3 w-full text-white rounded-md hover:scale-95 duration-300 transition-all"
        >
          Call for Paper
        </button>
      </div>
    </div>
  );
};

export default MobileNavigation;
