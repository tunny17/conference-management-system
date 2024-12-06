import { useEffect, useState } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-12-31T23:59:59').getTime(); // Set your target date here
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { days, hours, minutes, seconds };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <div className="h-[80vh] bg-hero bg-cover bg-center pt-20 text-white flex flex-col justify-start items-center text-center md:text-left">
      <h3>2025 Conference on Information Communications Technology and Society, ICTAS</h3>
      <h3 className="my-5">Theme:</h3>
      <h1 className="text-2xl md:text-5xl w-[80%] text-center">
        2025 Conference on Information Communications Technology and Society, ICTAS
      </h1>

      <div className="flex flex-col md:flex-row gap-y-3 justify-between items-start md:items-center md:w-[45%] my-7 text-sm">
        <span className="flex items-center gap-2">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.03071 11.5472C4.43606 12.0737 5.01927 12.381 5.63062 12.4537V14.4975C5.63062 15.3705 6.10175 16.1066 6.78407 16.5106H5.20154C4.37311 16.5106 3.70154 15.839 3.70154 15.0106V10.9645C3.7805 11.1679 3.88984 11.3642 4.03071 11.5472ZM12.7699 16.5106H9.21475C9.89707 16.1066 10.3682 15.3705 10.3682 14.4975V11.9149C10.7287 12.2183 11.1649 12.4 11.6164 12.4537V14.4975C11.6164 15.3705 12.0876 16.1066 12.7699 16.5106ZM10.4939 8.23603C10.4457 8.27129 10.3991 8.30806 10.3543 8.34621C10.3297 8.12173 10.273 7.90569 10.1883 7.70322L11.2232 7.70322L10.4939 8.23603ZM3.70154 6.80015C4.08031 7.27858 4.64075 7.60273 5.26434 7.68351L4.50811 8.23603C4.13029 8.51208 3.85817 8.87998 3.70154 9.28679V6.80015ZM15.9781 7.33246C16.267 7.14951 16.5151 6.90575 16.7015 6.61691L16.7015 15.0106C16.7015 15.839 16.03 16.5106 15.2015 16.5106H15.2006C15.8829 16.1066 16.354 15.3705 16.354 14.4975V8.60084C16.354 8.13765 16.2174 7.70086 15.9781 7.33246Z"
              stroke="#4B6BA4"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          23rd - 25th July, 2025
        </span>
        <span className="flex items-center gap-2">
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.92841 0.343994C5.10571 0.346144 3.35827 1.07116 2.06943 2.36001C0.780579 3.64886 0.0555604 5.39629 0.0534101 7.21899C0.0517342 8.70843 0.538227 10.1574 1.43841 11.344C1.43841 11.344 1.62591 11.5909 1.65654 11.6265L6.92841 17.844L12.2028 11.6234C12.2303 11.5902 12.4184 11.344 12.4184 11.344L12.419 11.3421C13.3186 10.1559 13.8049 8.70771 13.8034 7.21899C13.8013 5.39629 13.0762 3.64886 11.7874 2.36001C10.4985 1.07116 8.75111 0.346144 6.92841 0.343994ZM6.92841 9.71899C6.43396 9.71899 5.95061 9.57237 5.53948 9.29767C5.12836 9.02296 4.80793 8.63252 4.61871 8.1757C4.42949 7.71889 4.37998 7.21622 4.47645 6.73127C4.57291 6.24632 4.81101 5.80086 5.16064 5.45123C5.51027 5.1016 5.95573 4.86349 6.44068 4.76703C6.92564 4.67057 7.4283 4.72008 7.88512 4.9093C8.34193 5.09851 8.73238 5.41895 9.00708 5.83007C9.28179 6.24119 9.42841 6.72454 9.42841 7.21899C9.42758 7.88178 9.16393 8.51719 8.69526 8.98585C8.2266 9.45451 7.5912 9.71817 6.92841 9.71899Z"
              fill="#4B6BA4"
            />
          </svg>
          Capital Zimbali Estate, Ballito, 4399, South Africa
        </span>
      </div>

      <div className="flex gap-5 items-center w-full justify-between md:justify-normal px-5 md:px-0 md:w-[30%]">
        <button
          type="button"
          className="w-[48%] bg-primary-light text-sm p-3 md:p-4 text-white rounded-md hover:scale-95 duration-300 transition-all"
        >
          Submission of Papers
        </button>
        <button
          type="button"
          className="w-[48%] text-primary-light text-sm p-3 md:p-4 bg-white rounded-md hover:scale-95 duration-300 transition-all"
        >
          Register
        </button>
      </div>

      <div className="mt-20 flex justify-between items-center w-[90%] mx-auto px-5 md:w-[60%] text-4xl bg-white bg-opacity-15 py-5 md:px-14 rounded-lg">
        <div>
          <h1 className="mb-2">{timeLeft.days}</h1>
          <h1 className="text-base helvetica">Days</h1>
        </div>

        <div>
          <h1 className="mb-2">{timeLeft.hours}</h1>
          <h1 className="text-base helvetica">Hours</h1>
        </div>

        <div>
          <h1 className="mb-2">{timeLeft.minutes}</h1>
          <h1 className="text-base helvetica">Minutes</h1>
        </div>

        <div>
          <h1 className="mb-2">{timeLeft.seconds}</h1>
          <h1 className="text-base helvetica">Seconds</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
