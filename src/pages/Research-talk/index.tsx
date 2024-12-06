import Footer from '../../components/Footer';
import Sponsors from '../../components/Sponsors';

const ResearchTalk = () => {
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
          <h1 className="text-3xl text-primary-light font-bold text-center">Research Talk</h1>
        </div>
      </div>

      <section className="bg px-[10%] mb-10 py-10">
        <img src="/public/speakers/speaker-1.png" alt="" className="mx-auto w-full md:w-[20%]" />

        <div className="flex items-start gap-2 mt-8">
          <img src="/avatar.png" alt="" className="w-10" />

          <div className="text-sm">
            <p>Philip Bradford</p>
            <p className="helvetica-regular">University of Connecticut, Stamford, USa</p>
          </div>
        </div>

        <p className="helvetica-regular mt-8">
          <strong>Bio:</strong> V John Mathews is a professor in the School of Electrical
          Engineering and Computer Science at the Oregon State University. He received his Ph.D. and
          M.S. degrees in electrical and computer engineering from the University of Iowa, Iowa
          City, Iowa in 1984 and 1981, respectively, and the B.E. (Hons.) degree in electronics and
          communication engineering from the Regional Engineering College (now National Institute of
          Technology), Tiruchirappalli, India in 1980. Prior to 2015, he was with the Department of
          Electrical & Computer Engineering at the University of Utah. He served as the chairman of
          the ECE department at Utah from 1999 to 2003, and as the head of the School of Electrical
          Engineering and Computer Science at Oregon State from 2015 to 2017. His current research
          interests are in nonlinear and adaptive signal processing and application of signal
          processing and machine learning techniques in neural engineering, biomedicine, and
          structural health management. Mathews is a Fellow of IEEE. He has served in many
          leadership positions of the IEEE Signal Processing Society. He is a recipient of the
          2008-09 Distinguished Alumni Award from the National Institute of Technology,
          Tiruchirappalli, India, IEEE Utah Section’s Engineer of the Year Award in 2010, and the
          Utah Engineers Council’s Engineer of the Year Award in 2011. He was a distinguished
          lecturer of the IEEE Signal Processing Society for 2013 and 2014 and is the recipient of
          the 2014 IEEE Signal Processing Society Meritorious Service Award.
        </p>
        <p className="helvetica-regular my-3">
          <strong>Title for Talk :</strong> Intuitive Control of Bionic Limbs for Amputees and
          People with Spinal Cord Injuries
        </p>
        <p className="helvetica-regular">
          <strong>Abstract:</strong> Recent technological innovations such as functional
          neuro-muscular stimulation (FNS) offer considerable benefits to paralyzed individuals. FNS
          can produce movement in paralyzed muscles by the application of electrical stimuli to the
          nerves innervating the muscles. The first part of this talk will describe how smooth
          muscle movements that track desired movements can be evoked using electrical stimulation
          via electrode arrays inserted into peripheral nerves. Animal experiments demonstrating the
          feasibility of the method will be described. The second part of this talk will describe
          efforts to interpret human motor intent from bioelectrical signals. Machine learning
          algorithms for accomplishing this objective will be presented. The decoded information can
          then be used to intuitively evoke desired movements of paralyzed muscles or control
          prosthetic devices in patients with limb loss, i.e., movements of the bionic limbs can be
          evoked by the users’ mind. Results of experiments involving human amputee subjects will be
          described and discussed.
        </p>
      </section>

      <Sponsors />

      <div className="mt-5">
        <Footer showJoinBanner={false} />
      </div>
    </section>
  );
};

export default ResearchTalk;
