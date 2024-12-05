import { useContext } from 'react';
import { Link, useLocation } from 'react-router';
import { AppContext } from '../../context/AppContext';

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { setShowDropdown, showDropdown } = useContext(AppContext);

  const navs = [
    {
      title: 'Past Conferences',
      isDropDown: false,
      path: '/past-conferences'
    },
    {
      title: 'Donate',
      isDropDown: false,
      path: '/donate'
    },
    {
      title: 'Contact Us',
      isDropDown: false,
      path: '/contact'
    },
    {
      title: 'Register',
      isDropDown: false,
      path: '/register'
    }
  ];

  return (
    <div className="bg-hero h-auto bg-cover bg-top py-5">
      <div className="flex justify-between items-center w-[95vw] px-10 mx-auto py-3 bg-white rounded-md">
        <Link to={`/`}>
          <img src="/logo.svg" alt="" />
        </Link>

        <nav className="md:flex items-center gap-7 hidden">
          <button
            type="button"
            onClick={() => setShowDropdown(!showDropdown)}
            className={`text-sm flex items-center gap-4 ${
              showDropdown ? 'font-bold text-primary-light' : ''
            }`}
          >
            Resources
            <span className="w-3">
              <svg viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.9344 0.554688H6.7044H1.0944C0.134397 0.554688 -0.345603 1.71469 0.334397 2.39469L5.5144 7.57469C6.3444 8.40469 7.6944 8.40469 8.5244 7.57469L10.4944 5.60469L13.7044 2.39469C14.3744 1.71469 13.8944 0.554688 12.9344 0.554688Z"
                  fill={`${showDropdown ? '#4B6BA4' : '#000'}`}
                />
              </svg>
            </span>
          </button>

          <ul className="flex items-center gap-7">
            {navs.map((nav) => (
              <Link
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
          className="hidden md:block bg-primary-light text-sm p-4 text-white rounded-md hover:scale-95 duration-300 transition-all"
        >
          Submission of Papers
        </button>

        <button type="button" className="w-5 block md:hidden">
          <svg viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.29855 11.5806H19.2986M1.29855 6.58057H19.2986M1.29855 1.58057H19.2986"
              stroke="#474747"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
