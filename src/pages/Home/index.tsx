import { useState } from 'react';

import Hero from '../Hero';
import Footer from '../../components/Footer';
import VideoSlider from '../../components/VideoSwiper';

const Home = () => {
  const [activeDate, setActiveDate] = useState('day one');

  const slider = [
    {
      title: 'Information technology/Information System Track',
      nav: [
        'Computer Networks and Engineering',
        'Cybersecurity',
        'Data Science and Big Data',
        'Digital Transformation',
        'Edge and Cloud Computing',
        'ICT4D',
        'Image Processing',
        'Information Systems',
        'Internet of Things (IoT)',
        'Machine Learning and Artificial Intelligence',
        'Semantic Web'
      ]
    },
    {
      title: 'Digital finance Track',
      nav: [
        'Cryptocurrency and Blockchain',
        'Digital Banking',
        'Financial Inclusion',
        'Cybersecurity in Finance',
        'Regulatory Technology (RegTech)',
        'Mobile Payments',
        'Web2 Partnerships and Web3 Users',
        'Real-World Assets (RWAs)',
        'Tokenization'
      ]
    },
    {
      title: 'Engineering Track',
      nav: [
        'Engineering Education',
        'Renewable Energy Systems',
        'Energy Sustainability',
        'Smart Grids and Microgrids',
        'Cybersecurity and Risk Analysis',
        'Energy Storage'
      ]
    }
  ];

  const days = [
    {
      day: 'day one',
      date: '1st Jan, 2022'
    },
    {
      day: 'day two',
      date: '2nd Jan, 2022'
    },
    {
      day: 'day three',
      date: '3rs Jan, 2022'
    }
  ];

  const dayOne = [
    {
      time: '8:00-9:00',
      text: 'Registration'
    },
    {
      time: '8:00-9:00',
      text: 'Registration',
      content:
        'A conference held in multiple international cities, DLD connects business, thought leaders, and influencers for cross-over discussion.',
      location: 'Square Tower, Oven Center'
    },
    {
      time: '8:00-9:00',
      text: 'Welcome Address/Speed Networking',
      location: 'Square Tower, Oven Center'
    },
    {
      time: '8:00-9:00',
      text: 'Keynot Address 1',
      location: 'Square Tower, Oven Center'
    }
  ];

  const previewConferences = [
    {
      text: 'ICTAS 2022',
      image: '/preview/preview-1.png',
      link: '/past-conferences/ictas-2022'
    },
    {
      text: 'ICTAS 2023',
      image: '/preview/preview-2.png',
      link: '/past-conferences/ictas-2023'
    },
    {
      text: 'ICTAS 2024',
      image: '/preview/preview-3.png',
      link: '/past-conferences/ictas-2024'
    }
  ];

  const videoUrls = ['https://www.w3schools.com/html/mov_bbb.mp4'];

  return (
    <div>
      <Hero />

      <section className="h-[70vh] bg-section bg-cover bg-center flex justify-center items-center">
        <div className="flex justify-between items-center w-[90%] mx-auto">
          <img src="/ictas.png" alt="" className="w-[40%]" />

          <div className="w-[50%]">
            <h1 className="text-3xl font-medium text-secondary-light">About ICTAS</h1>
            <p className="helvetica-light mt-5">
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

      <section className="px-[6%] py-10 bg-[#FAFDFF]">
        <div>
          <h1 className="text-3xl font-bold text-secondary-light">Call for Papers</h1>
        </div>
        <p className="helvetica-light text-sm w-[70%] mt-5">
          ALL papers presented at the ICTAS conferences have been published in IEEE Xplore,
          confirming that the ICTAS conferences are stable and attract DHET subsidy. Use the links
          above to view previous conferences
        </p>

        <div className="flex justify-between items-center mt-5">
          {slider.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 px-5 py-7 w-[30%] rounded-lg hover:scale-105 hover:bg-[#FFF0F0] duration-300 transition-all"
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

      {/* schedule section --- */}
      <section className="bg-schedule h-[100vh] bg-cover bg-center bg-[#FAFDFF] px-[6%] mb-10 py-10">
        <h1 className="text-3xl font-bold text-secondary-light">Conference Shcedule</h1>
        <p className="mt-5 helvetia-light">
          Schedules planned out for the Event. The detailed list of event for the conference 2024
        </p>

        <div className="w-[80%] mx-auto bg-blue-50/45 shadow-md rounded-md my-16 p-2 flex gap-5 justify-center items-center">
          {days.map((data, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveDate(data.day)}
              className={`${
                activeDate === data.day
                  ? 'bg-primary-light text-white'
                  : 'text-gray-400 bg-white/45'
              } hover:scale-95 duration-300 transition-all text-xs pl-6 w-[13%] rounded-md py-2 flex flex-col items-start`}
            >
              <span className="uppercase">{data.day}</span>
              <span>{data.date}</span>
            </button>
          ))}
        </div>

        <div className="w-[48%] mx-auto border-l-4 border-dashed">
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

      <section className="text-center my-5 py-10 bg-[#FAFDFF]">
        <h1 className="text-3xl font-bold text-secondary-light">Keynote Speakers</h1>
        <p className="mt-3 helvetica-regular">
          We are bringing the finest industry experts to speak
        </p>

        <div className="flex items-center justify-between w-[70%] mx-auto mt-10">
          <img src="/speakers/speaker-1.png" alt="" className="w-[27%]" />
          <img src="/speakers/speaker-2.png" alt="" className="w-[27%]" />
          <img src="/speakers/speaker-3.png" alt="" className="w-[27%]" />
        </div>
      </section>

      <section className="text-left mt-20 py-10 mb-5 px-[6%] bg-[#FAFDFF]">
        <h1 className="text-3xl font-bold text-secondary-light">ICTAS Previous Conferences</h1>
        <p className="mt-3 helvetica-regular w-[80%]">
          ALL papers presented at the ICTAS conferences have been published in IEEE Xplore,
          confirming that the ICTAS conferences are stable and attract DHET subsidy. Use the links
          above to view previous conferences
        </p>

        <div className="flex items-center justify-between mt-14">
          {previewConferences.map((data, i) => (
            <div key={i} className="w-[30%] text-center">
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

      <section className="bg-sponsor bg-cover bg-center bg-[#FAFDFF] px-[6%] mb-10 py-10 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-secondary-light">Conference Sponsors</h1>
        <p className="mt-3 helvetica-regular text-[#556987]">
          Backbone for our responsible events become successful event
        </p>
        <div className="flex items-center text-sm mt-3">
          <span className="px-4 py-2 border text-primary-light helvetica-regular rounded-tl-md rounded-bl-md bg-#F7F8F9]">
            Golden Sponsors
          </span>
          <span className="px-4 py-2 border text-primary-light helvetica-regular bg-[#FFF0F0]">
            Platinum Sponsor
          </span>
          <span className="px-4 py-2 border text-primary-light helvetica-regular rounded-tr-md rounded-br-md bg-[#F7F8F9]">
            Silver Sponsors
          </span>
        </div>
        <span className="text-[#BBC3CF] text-xs my-7">
          Trusted by the top companies in this industry
        </span>
        <div className="">
          <img src="/sponsors.png" alt="" className="w-[80%] mx-auto" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
