import { Resources } from '../../../data';

const ResourceNavigation = () => {
  return (
    <div className="fixed z-[1000] top-0 md:top-28 left-0 w-full inset-0 bg-black bg-opacity-50 py-10 md:py-0">
      <div className="w-[90vw] mx-auto rounded-lg bg-white flex flex-col gap-5 justify-between p-5 overflow-hidden overflow-y-auto md:flex-row h-[90vh] md:h-auto">
        {Resources.map((data, i) => (
          <div key={i} className="w-full md:w-[22%]">
            <p className="text-xs text-primary-light mb-3">{data.title}</p>

            <ul className="flex flex-col gap-5">
              {data.navs.map((nav, i) => (
                <a
                  href={nav.url}
                  key={i}
                  className="flex gap-2 items-start rounded-md p-2 hover:bg-[#F8F8F8] hover:text-primary-light cursor-pointer duration-300 transition-all"
                >
                  <img src={`/${nav.image}.svg`} alt="" className="w-4 mt-1" />

                  <div>
                    <p className="text-sm m-0 font-bold">{nav.title}</p>
                    <p className="text-xs leading-4 mt-1">{nav.text}</p>
                  </div>
                </a>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceNavigation;
