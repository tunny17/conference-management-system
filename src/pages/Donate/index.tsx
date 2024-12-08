import { donationAmount, type, payment } from '../../../data';
import Sponsors from '../../components/Sponsors';
import Footer from '../../components/Footer';
import Range from '../../components/Range';
import { useState } from 'react';

const Donate = () => {
  const [amount, setAmount] = useState('$10');
  const [donationType, setDonationType] = useState('Online Donation');
  const [paymentType, setPaymentType] = useState('PayPal');

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
          / Donate
        </a>
        <div>
          <h1 className="text-3xl text-primary-light font-bold text-center">Donate</h1>
        </div>
      </div>

      <section className="px-[10%] mb-10 py-10 flex flex-col md:flex-row gap-y-12 items-center justify-between">
        <div className="w-full md:w-[45%]">
          <h1 className="text-3xl mb-4">Donations</h1>
          <p className="helvetica-regular leading-6 text-sm">
            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
            literature from BC, making it over into 2000 years old. Richard McClintock a Latin
            professor at Hampdeni Sydney College in Virginia "Lorem ipsum dolor sit amet.
          </p>

          <p className="text-xs mt-5">#7658</p>
          <Range max={100} current={20} />
        </div>

        <div className="p-4 bg-[#F7F8F9] rounded-md">
          <h2 className="text-base">Donation Amount</h2>

          <div className="flex gap-5 items-center mt-2">
            {donationAmount.map((data, i) => (
              <button
                className={`text-xs px-3 py-1 rounded-lg ${
                  amount === data ? 'bg-primary-light text-white' : 'bg-white'
                }`}
                key={i}
                onClick={() => setAmount(data)}
              >
                {data}
              </button>
            ))}
          </div>

          <input
            type="text"
            className="px-3 py-2 rounded-md placeholder:text-black border border-black my-5 text-xs outline-none w-full"
            placeholder="Other Amount (usd)"
          />

          <div className="flex gap-3 items-center justify-between">
            {type.map((data, i) => (
              <button
                key={i}
                onClick={() => setDonationType(data)}
                type="button"
                className={`text-sm w-2/4 py-4 border rounded-md text-primary-light ${
                  donationType === data ? 'bg-[#FFF0F0]' : 'bg-transparent'
                }`}
              >
                {data}
              </button>
            ))}
          </div>

          <p className="text-primary-light text-xs my-5">Payment Method</p>

          <div className="flex gap-3 items-center justify-between">
            {payment.map((data, i) => (
              <button
                key={i}
                onClick={() => setPaymentType(data.name)}
                type="button"
                className={`text-sm w-[30%] h-7 flex justify-center items-center px-3 rounded-md ${
                  paymentType === data.name ? 'border border-black' : ''
                }`}
              >
                <img src={data.img} alt="" />
              </button>
            ))}
          </div>

          <button
            type="button"
            className="px-5 py-3 text-sm bg-primary-light text-white mt-5 rounded-md"
          >
            Donate Now
          </button>
        </div>
      </section>

      <Sponsors />

      <div className="mt-5">
        <Footer />
      </div>
    </section>
  );
};

export default Donate;
