import Sponsors from '../../components/Sponsors';
import Footer from '../../components/Footer';
import { important, authorRegistration, attendeeRegistration } from '../../../data';
import Toggle from '../../components/Toggle';
import { useState } from 'react';

const Register = () => {
  // toggle is false = early bird
  const [isAuthorOn, setIsAuthorOn] = useState(false);
  const [isAttendeeOn, setIsAttendeeOn] = useState(false);

  return (
    <section className="md:mt-10">
      <div className="px-[3%] py-5 md:mb-10">
        <a href="/" className="flex flex-row text-sm gap-2 mb-10 text-primary-light">
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
          / Registration
        </a>
        <div>
          <h1 className="text-3xl text-primary-light font-bold text-center">Registration</h1>
        </div>
      </div>

      <section className="px-[10%] mb-10 py-10">
        <div className="flex flex-col-reverse md:flex-row gap-y-7 justify-between items-start">
          <div className="w-full md:w-[45%]">
            <h1 className="text-2xl font-bold mb-2">Registration Details</h1>
            <p className="helvetica-light text-sm mb-3 leading-7 text-[#474747]">
              *If you are a student and presenting a paper you MUST register in the Author
              category.*
            </p>
            <p className="helvetica-light text-sm mb-3 leading-7 text-[#474747]">
              **For a single author with multiple accepted papers, one full Author registration of
              $600 (for IEEE member) /$700(for Non-IEEE member)is valid for up to 2 papers. Accepted
              and presented papers will be sent to IEEE Xplore® for publication.**
            </p>
            <p className="helvetica-light text-sm mb-3 leading-7 text-[#474747]">
              ***For a single author with three accepted papers, registration fees will be $750.
            </p>
            <p className="helvetica-light text-sm mb-3 leading-7 text-[#474747]">
              ****Registration includes : Breakfast, Lunch; AM/PM Breaks; Access to all Keynotes;
              Plenary/Technical Sessions; Download of electronic proceedings
            </p>
          </div>

          <div className="flex flex-col shadow-md p-2 w-full md:w-[30%] px-5  h-fit rounded-md">
            <h2 className="font-bold my-4">Important Deadlines</h2>

            {important.map((item, i) => (
              <div
                key={i}
                className="text-[#1D2026] py-2 text-xs flex justify-between items-center"
              >
                <div className="flex items-center justify-between w-full">
                  <span> {item.text} </span>
                  <span className="text-xs helvetica-light">{item.date}</span>
                </div>
              </div>
            ))}

            <a href="" className="text-xs text-primary-light mx-auto my-3">
              Read more
            </a>
          </div>
        </div>

        <div className="my-10 text-center">
          <h2 className="text-2xl helvetica-bold text-secondary-light">Author Registration</h2>
          <p className="text-sm text-primary-light mt-4">
            All fees are in US Dollars and include all applicable taxes
          </p>

          <div className="flex gap-4 items-center text-sm justify-center mt-3">
            <span className={`${!isAuthorOn ? 'text-[#333F51]' : 'text-[#8896AB]'}`}>
              Early Bird
            </span>
            <Toggle isOn={isAuthorOn} setIsOn={setIsAuthorOn} />
            <span className={`${isAuthorOn ? 'text-[#333F51]' : 'text-[#8896AB]'}`}>Regular</span>
          </div>
        </div>

        {/* --- author registration */}
        <section className="flex flex-col md:flex-row gap-y-7 justify-between">
          {authorRegistration[isAuthorOn ? 1 : 0].sales.map((item, i) => (
            <div
              key={i}
              className="p-3 w-full md:w-[25%] border border-[#FFFFFF] rounded-md shadow-sm"
            >
              <p className="text-sm">{item.members}</p>

              <div className="flex justify-between items-end mt-2 py-3">
                <div className="flex justify-end w-[50%]  mr-2">
                  <sup className="mt-2 text-lg helvetica-bold">$</sup>
                  <h2 className="text-6xl text-secondary-light">{item.amount}</h2>
                </div>
                <sub className="text-sm w-[40%]">{item.expire}</sub>
              </div>

              <p className="text-sm text-[#8896AB] text-center mb-4">{item.caption}</p>
              <button type="button" className="py-3 text-sm text-primary-light bg-[#F7F8F9] w-full">
                Register
              </button>
              <ul className="mt-5">
                {item.moreFeatures.map((data, i) => (
                  <li key={i} className="flex items-center gap-3 leading-7 text-sm text-[#556987]">
                    <img src="/checkmark.svg" alt="" className="w-5" /> {data}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="py-16">
          <img src="/page-breaker.svg" alt="" />
        </section>

        {/* --- attendee registration */}
        <div className="my-10 text-center">
          <h2 className="text-2xl helvetica-bold text-secondary-light">Attendee Registration</h2>
          <p className="text-sm text-primary-light mt-4">
            All fees are in US Dollars and include all applicable taxes
          </p>

          <div className="flex gap-4 items-center text-sm justify-center mt-3">
            <span className={`${!isAttendeeOn ? 'text-[#333F51]' : 'text-[#8896AB]'}`}>
              Early Bird
            </span>
            <Toggle isOn={isAttendeeOn} setIsOn={setIsAttendeeOn} />
            <span className={`${isAttendeeOn ? 'text-[#333F51]' : 'text-[#8896AB]'}`}>Regular</span>
          </div>
        </div>

        <section className="flex flex-col md:flex-row gap-y-7 justify-between">
          {attendeeRegistration[isAttendeeOn ? 1 : 0].sales.map((item, i) => (
            <div
              key={i}
              className="p-3 w-full md:w-[25%] border border-[#FFFFFF] rounded-md shadow-sm"
            >
              <p className="text-sm">{item.members}</p>

              <div className="flex justify-between items-end mt-2 py-3">
                <div className="flex justify-end w-[50%]  mr-2">
                  <sup className="mt-2 text-lg helvetica-bold">$</sup>
                  <h2 className="text-6xl text-secondary-light">{item.amount}</h2>
                </div>
                <sub className="text-sm w-[40%]">{item.expire}</sub>
              </div>

              <p className="text-sm text-[#8896AB] text-center mb-4">{item.caption}</p>
              <button type="button" className="py-3 text-sm text-primary-light bg-[#F7F8F9] w-full">
                Register
              </button>
              <ul className="mt-5">
                {item.moreFeatures.map((data, i) => (
                  <li key={i} className="flex items-center gap-3 leading-7 text-sm text-[#556987]">
                    <img src="/checkmark.svg" alt="" className="w-5" /> {data}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <div className="my-10 text-center">
          <h2 className="text-2xl helvetica-bold text-secondary-light">
            Conference Policy And Sponsorship Notes
          </h2>
          <p className="text-sm text-primary-light mt-4">
            All fees are in US Dollars and include all applicable taxes
          </p>

          <div className="flex flex-col md:flex-row gap-y-7 justify-between mt-8">
            <a href="" className="w-full md:w-[30%]">
              <img src="/public/pay-1.png" alt="" />
            </a>
            <a href="" className="w-full md:w-[30%]">
              <img src="/public/pay-2.png" alt="" />
            </a>
            <a href="" className="w-full md:w-[30%]">
              <img src="/public/pay-3.png" alt="" />
            </a>
          </div>
        </div>
      </section>

      <Sponsors />

      <div className="mt-5">
        <Footer />
      </div>
    </section>
  );
};

export default Register;
