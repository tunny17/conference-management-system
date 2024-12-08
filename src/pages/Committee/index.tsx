import Footer from '../../components/Footer';
import Sponsors from '../../components/Sponsors';
import { useState } from 'react';
import { sections } from '../../../data';

const Committee = ({ isComponent = false }) => {
  const [active, setActive] = useState(0);

  return (
    <section className="md:mt-10">
      {!isComponent && (
        <div className="px-[3%]">
          <a href="/" className="flex flex-row text-sm gap-2 mb-10 text-primary-light">
            {/* Navigation Icon */}
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.48014 6.15777C2.25504 6.31 2.12134 6.55643 2.12134 6.81912V13.8393C2.12134 14.5116 2.69441 15.0566 3.40134 15.0566H5.52108C6.07336 15.0566 6.52108 14.6089 6.52108 14.0566V10.1876C6.52108 9.73939 6.90313 9.37606 7.37441 9.37606H9.66774C10.139 9.37606 10.5211 9.73939 10.5211 10.1876V14.0566C10.5211 14.6089 10.9688 15.0566 11.5211 15.0566H13.6413C14.3483 15.0566 14.9213 14.5116 14.9213 13.8393V6.81912C14.9213 6.55643 14.7876 6.31 14.5625 6.15777L9.01586 2.40676C8.71979 2.20654 8.32288 2.20654 8.02681 2.40676L2.48014 6.15777Z"
                fill="#4B6BA4"
              />
            </svg>
            / Organising Committee
          </a>
          <h1 className="text-3xl text-primary-light font-bold text-center">
            Organising Committee
          </h1>
        </div>
      )}

      <section className="px-[6%] py-5 bg-[#FAFDFF]">
        {isComponent && (
          <div className="py-5 px-5 flex justify-center items-center">
            <h1 className="text-xl md:text-3xl font-bold text-secondary-light">
              Organising Committee
            </h1>
          </div>
        )}

        {/* Buttons for sections */}
        <div className="flex flex-col md:flex-row items-start md:items-center text-xs mt-5 mx-auto w-fit">
          {sections.map((section, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              className={`${
                active === index ? 'bg-primary-light text-white' : 'text-primary-light'
              } px-4 py-2 border helvetica-regular rounded-md w-full md:w-auto`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Display active section content */}
        <div className="w-[82%] flex flex-col md:flex-row flex-wrap gap-4 mx-auto mt-5">
          {sections[active].src.map((speaker, index) => (
            <img key={index} src={speaker} className="w-full md:w-[23%]" alt="" />
          ))}
        </div>

        {!isComponent && <Sponsors />}
      </section>

      {!isComponent && <Footer />}
    </section>
  );
};

export default Committee;
