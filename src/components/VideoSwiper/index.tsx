/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const VideoSlider = ({ videos }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction: any) => {
    if (direction === 'left') {
      goToNext();
    } else if (direction === 'right') {
      goToPrev();
    }
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    trackTouch: true
  });

  return (
    <div className="relative overflow-hidden w-full mx-auto mt-10 px-5 bg-white">
      {/* Videos */}
      <div
        {...handlers}
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {videos.map((video: any, index: any) => (
          <div key={index} className="min-w-full flex justify-center items-center">
            <video src={video} controls className="w-full h-auto max-h-[60vh]" />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-md cursor-pointer p-1 w-7 h-7 flex justify-center items-center z-10"
      >
        <svg className="w-full" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.6176 1.32565L1.02648 11.7332L11.4341 22.3243M1.02648 11.7332L25.025 11.9429L1.02648 11.7332Z"
            stroke="#C4C4C4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-md cursor-pointer p-1 w-7 h-7 flex justify-center items-center z-10"
      >
        <svg className="w-full" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.7067 22.5469L25.2064 12.0471L14.7067 1.54741M25.2064 12.0471L1.20703 12.0471L25.2064 12.0471Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default VideoSlider;
