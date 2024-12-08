import { useEffect, useState } from 'react';

import Hero from '../Hero';
import Footer from '../../components/Footer';
import VideoSlider from '../../components/VideoSwiper';

import { slider, days, dayOne, previewConferences, videoUrls } from '../../../data.ts';
import Sponsors from '../../components/Sponsors/index.tsx';
import Carousel from '../../components/Carousel/index.tsx';
import Committee from '../Committee/index.tsx';
import Speakers from '../Speakers/index.tsx';

const Home = () => {
  const [activeDate, setActiveDate] = useState('day one');

  const images = [
    '/new-images/image-1.jpeg',
    '/new-images/image-2.jpeg',
    '/new-images/image-3.jpeg',
    '/new-images/image-4.jpeg',
    '/new-images/image-5.jpeg'
  ];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Handle hash on initial load
    handleHashChange();

    // Listen for hash change events
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup event listener
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div>
      <Hero />

      {/* --- about section */}
      <section
        id="about"
        className="md:h-[70vh] py-8 md:py-0 bg-section bg-cover bg-center flex justify-center items-center"
      >
        <div className="flex flex-col gap-y-9 md:flex-row justify-between items-center w-[90%] mx-auto">
          {/* <img src="/ictas.png" alt="" className="w-full md:w-[40%]" /> */}
          <div className="w-full md:w-[40%]">
            <Carousel images={images} interval={5000} />
          </div>

          <div className="w-full md:w-[50%]">
            <h1 className="text-3xl font-medium text-secondary-light">About ICTAS</h1>
            <p className="helvetica-light mt-3 md:mt-5">
              The annual ICTAS conference, established in 2017, serves as a platform for researchers
              in academia and industry to share their latest contributions in Information and
              Communication Technology (ICT) and foster networking. Since its inception, each paper
              presented has been published on IEEE Xplore, with a growing h5-index, currently at 16.
              The conference encourages the exchange of ideas through keynotes, panel discussions,
              and industry exhibits that bridge academic and industry innovations. The 2025 IEEE
              ICTAS conference will showcase advancements in ICT, Engineering, and Digital Finance.
              Accepted papers which are physically presented at the conference will be submitted for
              publication on IEEE Xplore®. IEEE has granted technical sponsorship for ICTAS 2025
              (#64866).
            </p>
          </div>
        </div>
      </section>

      {/* --- call for paper */}
      <section className="px-[6%] py-10 bg-[#FAFDFF]">
        <div>
          <h1 className="text-3xl font-bold text-secondary-light">Call for Paper</h1>
        </div>
        <p className="helvetica-light text-sm w-full md:w-[70%] mt-5">
          We invite submissions of previously unpublished work on the following topics and technical
          areas of interest (but not limited to the following):
        </p>

        <div className="flex flex-col gap-y-5 md:flex-row justify-between items-center mt-5">
          {slider.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 px-5 py-7 w-full md:w-[30%] rounded-lg hover:scale-105 hover:bg-[#FFF0F0] duration-300 transition-all"
            >
              <h1 className="text-lg font-medium h-16">{item.title}</h1>

              <ul className="list-disc pl-4 mb-5">
                {item.nav.map((item, index) => (
                  <li key={index} className="text-sm helvetica-light leading-7">
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://edas.info/newPaper.php?c=32731"
                className="px-10 no-underline py-3 bg-primary-light text-white text-sm rounded-md"
              >
                Submit Paper
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="helvetica-light leading-8">
            <strong>PAPER SUBMISSION INSTRUCTIONS:</strong> Only original papers that have not been
            published or submitted for publications elsewhere will be considered for IEEE ICTAS
            2025. All submitted manuscript will be evaluated on their quality and relevance using
            double-blind peer review, which hides the authors’ identity from the reviewers. Only
            once your paper has been accepted, will you be required to add author details and
            finalize your submission by incorporating reviewer comments to improve your paper.
            Papers are reviewed on the basis that they do not contain plagiarised material and have
            not been accepted at any other conference at the same time (double submission). All
            papers will be checked using IEEE Crosscheck to ascertain the originality of its
            contents. When preparing your proposal, please take the following procedure as a
            minimum:
          </p>

          <ul className="my-2 list-disc pl-4">
            <li className="helvetica-light leading-8">
              Eliminate the authors’ names, addresses, emails and affiliations from the title page.
            </li>
            <li className="helvetica-light leading-8">
              Papers should not exceed 6 pages in length (including references)
            </li>
            <li className="helvetica-light leading-8">
              Receipts of identifying names and financial sources should not be there.{' '}
            </li>
            <li className="helvetica-light leading-8">
              Papers must be in Pdf-format, selected papers only will also be required in Word.
            </li>
            <li className="helvetica-light leading-8">
              Use Pdf-Express to ensure the correct format. Refer to Pdf-Express link.{' '}
            </li>
            <li className="helvetica-light leading-8">
              All papers must be uploaded on EDAS submission page{' '}
            </li>
            <li className="helvetica-light leading-8">
              It is required that the manuscript follows the standard IEEE camera-ready format (IEEE
              standard format, double column, 10-point font).
            </li>
          </ul>

          <p className="helvetica-light">
            Refer to IEEE Conference template. Follow these links below to learn more about IEEE
            Submission Guidelines: <br />
            <a
              className="text-primary-light"
              href="https://www.ieee.org/publications/rights/plagiarism/plagiarism.html"
            >
              IEEE Policy on Plagiarism
            </a>
            <br />
            <a
              className="text-primary-light"
              href="https://www.ieee.org/publications/rights/multi-sub-guidelines-intro.html"
            >
              IEEE Policy on Double Submission
            </a>
            <br />
            <a
              className="text-primary-light"
              href="https://events.ieee.org/planning-basics/technical-program-development-quality/peer-review-"
            >
              IEEE Paper Review Process
            </a>
            <br />
            <a
              className="text-primary-light"
              href="https://www.ieee.org/conferences/publishing/templates.html"
            >
              IEEE Paper Review Process
            </a>
          </p>
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

      <section className="">
        <img src="/page-breaker.svg" alt="" />
      </section>

      <Committee isComponent={true} />

      <section className="py-10">
        <img src="/page-breaker.svg" alt="" />
      </section>

      {/* --- keynote speakers */}
      {/* <section className="text-center my-5 py-10 bg-[#FAFDFF]">
        <h1 className="text-3xl font-bold text-secondary-light">Keynote Speakers</h1>
        <p className="mt-3 helvetica-regular">
          We are bringing the finest industry experts to speak
        </p>

        <div className="flex flex-col md:flex-row gap-y-8 items-center justify-between w-[70%] mx-auto mt-10">
          <img src="/speakers/speaker-1.png" alt="" className="w-full md:w-[27%]" />
          <img src="/speakers/speaker-2.png" alt="" className="w-full md:w-[27%]" />
          <img src="/speakers/speaker-3.png" alt="" className="w-full md:w-[27%]" />
        </div>
      </section> */}
      <Speakers isHome={true} />

      {/* --- past conferences */}
      <section className="text-left mt-20 py-10 px-[6%] bg-[#FAFDFF]">
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
