import Footer from '../../components/Footer';

const Workshop = () => {
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
          <h1 className="text-3xl text-primary-light font-bold text-center">Workshop</h1>
        </div>
      </div>

      <section className="px-[10%] mb-28 bg-schedule bg-cover bg-center bg-[#FAFDFF]">
        <img src="/workshop-hero.jpg" alt="" className="mb-20 mx-auto w-full md:w-[30%]" />

        <h1 className="text-xl md:text-4xl mb-3 md:mb-7">
          The AIIoT 2024 IoT Workshop will be presented by Dr. Phillip Bradford (University of
          Connecticut, Stamford, USA)
        </h1>
        <p>Friday 31st May 2024*****9.30 AM -11.30 AM</p>

        <div className="flex items-start gap-2 mt-5">
          <img src="/avatar.png" alt="" className="w-10" />

          <div className="text-sm">
            <p>Philip Bradford</p>
            <p className="helvetica-regular">University of Connecticut, Stamford, USa</p>
          </div>
        </div>

        <main className="text-sm helvetica-regular mt-8 text-[#474747] leading-5">
          <p>
            Bio: Dr. Phillip G. Bradford is on the faculty at the University of Connecticut. He is
            the director of the computer science program at the University of Connecticut in
            Stamford.
          </p>

          <p className="mt-2">
            He is a computer scientist with extensive experience in academia and industry. Phil was
            a post-doctoral fellow at the Max-Planck-Institut für Informatik, he earned his PhD at
            Indiana University, an MS form the University of Kansas, and a BA from Rutgers
            University. He was on the faculty at Rutgers Business School and the University of
            Alabama’s Engineering School. He worked for BlackRock, Reuters Analytics, founded a
            startup and worked with a number of early stage firms. He was a Principal Architect for
            General Electric.
          </p>

          <p className="mt-2">
            Phil has a deep belief in bringing real research to practice. This is the root of his
            entrepreneurial perspective. Phil has a handful of best-in-class results. His Erdős
            Number is 2. He has given over 70 talks in 10 countries and he is the author or
            co-author of over 70 articles.
          </p>
        </main>

        <div className="mt-5">
          <h2 className="text-xl font-bold">Workshop Registration Pricing</h2>
          <p className="text-sm helvetica-regular mt-4">
            All fees are in US Dollars and include all applicable taxes. <br /> ## The first 50 IEEE
            Student Members that register will be able to do so at NO CHARGE as an IEEE Student
            Member benefit provided by a grant from IEEE Region-1 and the SMART Society, USA. ##
          </p>
        </div>

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
      </section>

      <div className="mt-5">
        <Footer />
      </div>
    </section>
  );
};

export default Workshop;
