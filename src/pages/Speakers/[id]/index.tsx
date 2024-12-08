import { useParams } from 'react-router';
import { speaker } from '../../../../data';
import Footer from '../../../components/Footer';
import Sponsors from '../../../components/Sponsors';

const Speaker = () => {
  const { id } = useParams();
  const speakerDetails = speaker.find((s) => s.id === parseInt(id ?? ''));

  return (
    <section className="md:mt-10">
      <div className="px-[3%] py-5">
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
          / Keynote Speaker
        </a>
        <div>
          <h1 className="text-3xl text-primary-light font-bold text-center">Keynote Speaker</h1>
        </div>
      </div>

      <section className="md:px-[10%] px-10 bg-cover bg-center bg-[#FAFDFF]">
        <img src={speakerDetails?.src} alt="" className="mx-auto" />

        <div className="md:flex items-center gap-2 hidden">
          <img src={speakerDetails?.src2} alt="" className="rounded-full w-10" />

          <div className="flex flex-col">
            <span>{speakerDetails?.name}</span>
            <span className="text-sm text-primary-light helvetica-bold leading-7">
              {speakerDetails?.jon}
            </span>
          </div>
        </div>

        <p className="md:pl-12 my-10 md:mt-0">
          <strong>Bio:</strong> {speakerDetails?.bio}
        </p>

        <Sponsors />
      </section>

      <div className="mt-5">
        <Footer />
      </div>
    </section>
  );
};

export default Speaker;
