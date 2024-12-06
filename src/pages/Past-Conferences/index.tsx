import { previewConferences } from '../../../data';
import Footer from '../../components/Footer';

const PastConferences = () => {
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
          <h1 className="text-3xl text-primary-light font-bold text-center">Past Conference</h1>
        </div>
      </div>

      <section className="bg-schedule px-[6%] py-20 bg-cover bg-center bg-[#FAFDFF]">
        <h1 className="text-3xl font-bold text-secondary-light">ICTAS Previous Conferences</h1>
        <p className="mt-3 helvetica-regular w-full md:w-[80%]">
          ALL papers presented at the ICTAS conferences have been published in IEEE Xplore,
          confirming that the ICTAS conferences are stable and attract DHET subsidy. Use the links
          above to view previous conferences
        </p>

        <div className="flex flex-col md:flex-row flex-wrap gap-y-7 items-center justify-between mt-14">
          {previewConferences.map((data, i) => (
            <div key={i} className="w-full md:w-[32%] text-center">
              <img src={data.image} alt="" className="" />
              <h1 className=" text-primary-light mt-5">{data.text}</h1>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-5">
        <Footer />
      </div>
    </section>
  );
};

export default PastConferences;
