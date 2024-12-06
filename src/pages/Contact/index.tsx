import Footer from '../../components/Footer';

const Contact = () => {
  const faq = [
    {
      question: 'What shipping options do you have?',
      answer:
        'For USA domestic orders we offer FedEx and USPS shipping. Contact us via email to learn more.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'Any method of payments acceptable by you. For example: We accept MasterCard, Visa.'
    },
    {
      question: 'How long does it take to ship my order?',
      answer: 'Orders are usually shipped within 1-2 business days after placing the order.'
    },
    {
      question: 'What shipping options do you have?',
      answer:
        'For USA domestic orders we offer FedEx and USPS shipping. Contact us via email to learn more.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'Any method of payments acceptable by you. For example: We accept MasterCard, Visa.'
    },
    {
      question: 'How long does it take to ship my order?',
      answer: 'Orders are usually shipped within 1-2 business days after placing the order.'
    }
  ];

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
          <h1 className="text-3xl text-primary-light font-bold text-center">Conference Schedule</h1>
        </div>
      </div>

      <section className="bg px-[10%] mb-10 py-10">
        <h1 className="text-4xl font-extrabold">Need More information? </h1>
        <p className="w-[45%] text-sm mt-3">
          Come and visit us in the iconic tourist city of Durban, where the weather is always
          summer! Beautiful beaches, close to game parks and cultural sites. Attendees are
          responsible for their own reservations for accommodation.
        </p>

        <div className="mt-10 flex justify-between items-center">
          <div className="flex items-start gap-8">
            <div>
              <img src="/email.svg" alt="" className="w-9" />

              <h1 className="text mt-3">Contact </h1>
              <p className="text my-1">Prof. Rajashree Paul</p>
              <p className="helvetica-regular text-sm">rajashree.paul@iem.edu.in</p>
            </div>

            <div>
              <img src="/phone.svg" alt="" className="w-9" />

              <h1 className="text mt-3">Phone </h1>
              <p className="helvetica-regular text-sm">+7-843-672-431</p>
            </div>
          </div>

          <div className="w-[40%] shadow-md rounded-md p-7">
            <div>
              <p className="text-sm text-primary-light font-medium mb-1">Email</p>
              <input
                type="email"
                className="text-sm outline-none w-full border helvetica-regular rounded-md px-3 py-2"
                placeholder="pat@shuffle.dev"
              />
            </div>
            <div className="my-3">
              <p className="text-sm text-primary-light font-medium mb-1">Phone Number</p>
              <input
                type="number"
                className="text-sm outline-none w-full border helvetica-regular rounded-md px-3 py-2"
                placeholder="+234(0) 701234567"
              />
            </div>
            <div>
              <p className="text-sm text-primary-light font-medium mb-1">Note</p>
              <textarea
                rows={6}
                className="text-sm outline-none w-full border helvetica-regular rounded-md px-3 py-2"
                placeholder="Leave a Message"
              />
            </div>

            <button
              type="button"
              className="bg-primary-light w-full text-center py-3 text-white text-sm rounded-md mt-3"
            >
              Send
            </button>
          </div>
        </div>

        <section className="flex items-start mt-10 h-[55vh]">
          <div className="bg-[#FFF0F0] p-10 flex flex-col justify-center items-start w-[30%] h-full">
            <img src="/venue.svg" alt="" className="w-9" />

            <h1 className="text mt-3">Venue </h1>
            <p className="text-primary-light text-sm my-1">The Capital Zimbali Hotel</p>
            <p className="text-primary-light text-sm">
              6 Zimbali Dr. Esstate, Ballito, 4399, South Africa
            </p>
          </div>

          <img src="/map.png" className="h-full" alt="" />
        </section>

        <section className="mt-10 px-10">
          <h2 className="text-4xl font-extrabold">Frequently Asked Questions</h2>
          <p className="w-[70%] mt-3">
            Flex is the only saas business platform that lets you run your business on one platform,
            seamlessly across all digital channels.
          </p>

          <div className="flex flex-wrap items-center justify-between mt-14 gap-y-3">
            {faq.map((data, i) => (
              <div key={i} className="w-[30%]">
                <img src="/faq.svg" alt="" className="w-10" />
                <p className="text-[#2A3342] text-sm my-3 font-bold w-[70%]">{data.question}</p>
                <p className="text-[#2A3342] leading-5 text-xs helvetica-light">{data.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      <div className="mt-5">
        <Footer showJoinBanner={false} />
      </div>
    </section>
  );
};

export default Contact;
