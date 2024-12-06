import { useState } from 'react';
import Footer from '../../components/Footer';

import { gallery, videoUrls } from '../../../data';
import VideoSlider from '../../components/VideoSwiper';

interface Gallery {
  id: number;
  title: string;
  size: string;
  pictures: string[];
}

const Gallery = () => {
  const [activeGallery, setActiveGallery] = useState<Gallery>(gallery[0]);

  return (
    <section className="mt-10">
      <div className="px-[3%] py-5 mb-10">
        <a href="/">
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
        </a>
        <div>
          <h1 className="text-3xl text-primary-light font-bold text-center">Gallery</h1>
        </div>
      </div>

      <section className="bg-schedule px-[6%] py-20 bg-cover bg-center bg-[#FAFDFF]">
        <h1 className="text-2xl font-bold">Gallery</h1>

        <div className="flex justify-between mt-5">
          <div className="flex flex-col shadow-md p-2 w-[20%] h-fit">
            {gallery.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveGallery(item)}
                className="text-[#1D2026] px-5 py-3 text-sm flex justify-between items-center hover:bg-[#F5F7FA] "
                type="button"
              >
                <div className="flex flex-col items-start">
                  <span> {item.title} </span>
                  <span className="text-xs helvetica-light">{item.size}</span>
                </div>

                <span className="w-3">
                  <svg viewBox="0 0 12 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.1569 13.3676L4.49994 19.0246L3.08594 17.6106L8.03594 12.6606L3.08594 7.71063L4.49994 6.29663L10.1569 11.9536C10.3444 12.1412 10.4497 12.3955 10.4497 12.6606C10.4497 12.9258 10.3444 13.1801 10.1569 13.3676Z"
                      fill="#474747"
                    />
                  </svg>
                </span>
              </button>
            ))}
          </div>

          <div className="w-[75%] flex flex-wrap justify-between gap-y-3">
            {activeGallery.pictures.map((item, i) => (
              <img key={i} src={item} alt="" className="w-[32%]" />
            ))}
          </div>
        </div>

        <section className="text-left mt-20 py-10 mb-5 px-[6%] bg-[#FAFDFF]">
          <h1 className="text-3xl font-bold text-secondary-light">Videos</h1>
          <p className="mt-3 helvetica-regular w-[80%]">
            Watch and experience past editions of our conference
          </p>

          <VideoSlider videos={videoUrls} />
        </section>
      </section>

      <div className="mt-5">
        <Footer />
      </div>
    </section>
  );
};

export default Gallery;
