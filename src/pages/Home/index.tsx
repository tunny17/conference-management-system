import { useState } from 'react';

import Hero from '../Hero';
import Footer from '../../components/Footer';
import VideoSlider from '../../components/VideoSwiper';

import { slider, days, dayOne, previewConferences, videoUrls } from '../../../data.ts';
import Sponsors from '../../components/Sponsors/index.tsx';

const Home = () => {
  const [activeDate, setActiveDate] = useState('day one');

  return (
    <div>
      <Hero />

      {/* --- about section */}
      <section className="md:h-[70vh] py-8 md:py-0 bg-section bg-cover bg-center flex justify-center items-center">
        <div className="flex flex-col gap-y-9 md:flex-row justify-between items-center w-[90%] mx-auto">
          <img src="/ictas.png" alt="" className="w-full md:w-[40%]" />

          <div className="w-full md:w-[50%]">
            <h1 className="text-3xl font-medium text-secondary-light">About ICTAS</h1>
            <p className="helvetica-light mt-3 md:mt-5">
              Continuing from the outstanding success of IEEE AIIoT 2023, we are very proud to
              present IEEE World AI IoT Congress 2024 which will provide an opportunity for
              researchers, educators and students to discuss and exchange ideas on issues, trends,
              and developments in the related fields of AI and IoT. The conference aims to bring
              together scholars from different disciplinary backgrounds to emphasize the
              dissemination of ongoing research in the fields of AI and IoT. Research papers are
              invited describing original work in the above-mentioned fields and related
              technologies. The conference will include a peer-reviewed program of technical
              sessions. This year we will be hosting the conference physically.
            </p>
          </div>
        </div>
      </section>

      {/* --- call for papers */}
      <section className="px-[6%] py-10 bg-[#FAFDFF]">
        <div>
          <h1 className="text-3xl font-bold text-secondary-light">Call for Papers</h1>
        </div>
        <p className="helvetica-light text-sm w-full md:w-[70%] mt-5">
          ALL papers presented at the ICTAS conferences have been published in IEEE Xplore,
          confirming that the ICTAS conferences are stable and attract DHET subsidy. Use the links
          above to view previous conferences
        </p>

        <div className="flex flex-col gap-y-5 md:flex-row justify-between items-center mt-5">
          {slider.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 px-5 py-7 w-full md:w-[30%] rounded-lg hover:scale-105 hover:bg-[#FFF0F0] duration-300 transition-all"
            >
              <h1 className="text-lg font-medium h-16">{item.title}</h1>

              <ul className="list-disc pl-4">
                {item.nav.map((item, index) => (
                  <li key={index} className="text-sm helvetica-light leading-7">
                    {item}
                  </li>
                ))}
              </ul>

              <button className="px-7 py-3 bg-primary-light text-white text-sm mt-5 rounded-md">
                Submit Paper
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10">
        <img src="/page-breaker.svg" alt="" />
      </section>

      {/* conference schedule --- */}
      <section className="bg-schedule h-[100vh] bg-cover bg-center bg-[#FAFDFF] px-[6%] mb-10 py-10">
        <h1 className="text-3xl font-bold text-secondary-light">Conference Schedule</h1>
        <p className="mt-5 helvetia-light">
          Schedules planned out for the Event. The detailed list of event for the conference 2024
        </p>

        <div className="w-full md:w-[80%] mx-auto bg-blue-50/45 shadow-md rounded-md my-16 p-2 flex gap-5 justify-center items-center">
          {days.map((data, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveDate(data.day)}
              className={`${
                activeDate === data.day
                  ? 'bg-primary-light text-white'
                  : 'text-gray-400 bg-white/45'
              } hover:scale-95 duration-300 transition-all text-xs pl-3 md:pl-6 w-full md:w-[13%] rounded-md py-2 flex flex-col items-start`}
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

      <section className="py-10">
        <img src="/page-breaker.svg" alt="" />
      </section>

      {/* --- keynote speakers */}
      <section className="text-center my-5 py-10 bg-[#FAFDFF]">
        <h1 className="text-3xl font-bold text-secondary-light">Keynote Speakers</h1>
        <p className="mt-3 helvetica-regular">
          We are bringing the finest industry experts to speak
        </p>

        <div className="flex flex-col md:flex-row gap-y-8 items-center justify-between w-[70%] mx-auto mt-10">
          <img src="/speakers/speaker-1.png" alt="" className="w-full md:w-[27%]" />
          <img src="/speakers/speaker-2.png" alt="" className="w-full md:w-[27%]" />
          <img src="/speakers/speaker-3.png" alt="" className="w-full md:w-[27%]" />
        </div>
      </section>

      {/* --- past conferences */}
      <section className="text-left mt-20 py-10 mb-5 px-[6%] bg-[#FAFDFF]">
        <h1 className="text-3xl font-bold text-secondary-light">ICTAS Previous Conferences</h1>
        <p className="mt-3 helvetica-regular w-full md:w-[80%]">
          ALL papers presented at the ICTAS conferences have been published in IEEE Xplore,
          confirming that the ICTAS conferences are stable and attract DHET subsidy. Use the links
          above to view previous conferences
        </p>

        <div className="flex flex-col md:flex-row gap-y-7 items-center justify-between mt-14">
          {previewConferences.slice(3, 6).map((data, i) => (
            <div key={i} className="w-full md:w-[30%] text-center">
              <img src={data.image} alt="" className="" />
              <h1 className=" text-primary-light mt-5">{data.text}</h1>
            </div>
          ))}
        </div>
      </section>

      <section className="text-left mt-20 py-10 mb-5 px-[6%] bg-[#FAFDFF]">
        <h1 className="text-3xl font-bold text-secondary-light">Videos</h1>
        <p className="mt-3 helvetica-regular w-[80%]">
          Watch and experience past editions of our conference
        </p>

        <VideoSlider videos={videoUrls} />
      </section>

      <Sponsors />

      <Footer />
    </div>
  );
};

export default Home;
