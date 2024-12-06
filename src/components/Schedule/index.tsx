import { useState } from 'react';
import { dayOne, days } from '../../../data';
import Footer from '../Footer';

const Schedule = () => {
  const [activeDate, setActiveDate] = useState('day one');

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
          / Conference Schedule
        </a>
        <div>
          <h1 className="text-3xl text-primary-light font-bold text-center">Conference Schedule</h1>
        </div>
      </div>

      <section className="bg-schedule h-[100vh] bg-cover bg-center bg-[#FAFDFF] px-[6%] mb-10 py-10">
        <h1 className="text-3xl font-bold text-secondary-light">Conference Schedule</h1>
        <p className="mt-5 helvetia-light">
          Schedules planned out for the Event. The detailed list of event for the conference 2024
        </p>

        <div className="md:w-[80%] mx-auto bg-blue-50/45 shadow-md rounded-md my-16 p-2 flex gap-5 justify-center items-center">
          {days.map((data, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveDate(data.day)}
              className={`${
                activeDate === data.day
                  ? 'bg-primary-light text-white'
                  : 'text-gray-400 bg-white/45'
              } hover:scale-95 duration-300 transition-all text-xs pl-2 md:pl-6 w-full md:w-[13%] rounded-md py-2 flex flex-col items-start`}
            >
              <span className="uppercase">{data.day}</span>
              <span>{data.date}</span>
            </button>
          ))}
        </div>

        <div className="w-full md:w-[48%] mx-auto border-l-4 border-dashed">
          {dayOne.map((data, i) => (
            <div key={i} className="px-5 my-10 text-sm relative">
              <img src="/blue-dot.svg" alt="" className="absolute top-0 -left-4" />
              <p className="helvetica-regular">{data.time}</p>
              <p className="mt-1 mb-2 text-sm">{data.text}</p>
              {data.content && <p className="mt-3 text-xs helvetica-light mb-2">{data.content}</p>}
              {data.location && (
                <p className="mt-1 text-xs helvetica-light flex items-center gap-2">
                  <img src="/location.svg" alt="" className="w-4" /> {data.location}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center items-center">
          <button
            type="button"
            className="w-fit mx-auto px-4 py-2 rounded-md border border-primary-light bg-white text-primary-light text-sm"
          >
            View More
          </button>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default Schedule;
