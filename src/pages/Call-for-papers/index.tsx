import Footer from '../../components/Footer';
import Sponsors from '../../components/Sponsors';
import { important, categories } from '../../../data';

const CallForPapers = () => {
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
          / Call for papers
        </a>
        <div>
          <h1 className="text-3xl text-primary-light font-bold text-center">Call for papers</h1>
        </div>
      </div>

      <section className="px-[6%] py-20 bg-cover bg-center">
        <div className="flex flex-col-reverse md:flex-row gap-y-10 justify-between items-start">
          <div className="w-full md:w-[60%]">
            <h1 className="text-2xl font-bold mb-2">
              Details can also be found in the call for Papers PDF file:
            </h1>
            <h3 className="text-base font-extrabold mb-3">
              PAPER SUBMISSION INSTRUCTIONS FOR REVIEW MANUSCRIPT
            </h3>
            <p className="helvetica-light text-sm mb-3 leading-6">
              All submitted articles will be evaluated on their quality and relevance using
              double-blind peer review, which hides the authors’ identity from the reviewers. All
              review manuscripts should fulfill the double-blind submission guidelines for review
              purpose. When preparing your proposal, please take the following procedure as a
              minimum:
            </p>

            <ul className="list-disc pl-3 leading-6">
              <li className="helvetica-regular font-light text-sm leading-7">
                Eliminate the authors’ names and affiliations from the title page.
              </li>
              <li className="helvetica-regular font-light text-sm leading-7">
                Receipts of identifying names and financial sources should not be there.
              </li>
              <li className="helvetica-regular font-light text-sm leading-7">
                Papers should follow the IEEE preprint policy.
              </li>
            </ul>

            <div className="mt-3">
              <h3 className="text-base font-extrabold mb-3">
                PAPER SUBMISSION INSTRUCTIONS FOR FINAL MANUSCRIPT
              </h3>
              <p className="helvetica-light text-sm mb-5">
                Please comply with the following guidelines.
              </p>

              <ul className="helvetica-light text-sm list-disc pl-3 leading-6">
                <li className="helvetica-regular font-light text-sm leading-7">
                  Prospective authors are invited to submit manuscripts reporting original
                  unpublished research and recent developments in the topics related to the
                  conference.
                </li>
                <li className="helvetica-regular font-light text-sm leading-7">
                  It is required that the manuscript follows the standard IEEE camera-ready format
                  (IEEE standard format, double column, 10-point font). Review Submissions must
                  include only title, abstract, keywords but exclude the author and affiliation with
                  an email address. Papers should be according to the Double blind review format.
                  Please double-check the paper size in your page setup to make sure you are using
                  the letter-size paper layout (8.5 inch X 11 inch). The paper should not contain
                  page numbers or any special headers or footers.
                </li>
                <li className="helvetica-regular font-light text-sm leading-7">
                  In order to achieve the same appearance for all manuscripts, AIIoT requires the
                  usage of the IEEE templates in Microsoft Word (US Letter) and LaTeX format can be
                  found at IEEE Manuscript Templates for Conference Proceedings.
                </li>
                <li className="helvetica-regular font-light text-sm leading-7">
                  AIIoT conducts a plagiarism check on all submitted papers. Plagiarism and
                  self-plagiarism apply to all works.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col shadow-md p-2 w-full md:w-[30%] px-5  h-fit rounded-md">
            <h2 className="font-bold my-4">Important Deadlines</h2>

            {important.map((item, i) => (
              <div
                key={i}
                className="text-[#1D2026] py-2 text-xs flex justify-between items-center"
              >
                <div className="flex items-center justify-between w-full">
                  <span> {item.text} </span>
                  <span className="text-xs helvetica-light">{item.date}</span>
                </div>
              </div>
            ))}

            <a href="" className="text-xs text-primary-light mx-auto my-3">
              Read more
            </a>
          </div>
        </div>

        <div className="md:px-10 py-10 mt-10 md:bg-[#FAFDFF]">
          <h1 className="text-2xl md:text-base font-extrabold mb-3">Paper Categories</h1>
          <p className="helvetica-light text-base md:text-sm leading-6 mb-5">
            Regular Paper – 7 pages maximum (3 additional pages allowed but at an extra charge){' '}
            <br /> • Short Paper (Work-in-Progress) – 6 pages maximum (2 additional pages allowed
            but at an extra charge)
          </p>
          <p className="helvetica-light text-base md:text-sm mb-5">
            Regular papers should present novel perspectives within the general scope of the
            conference. Short papers (Work-in-Progress) are an opportunity to present preliminary or
            interim results.
          </p>

          <ul className="helvetica-light text-base md:text-sm list-disc px-5 md:px-16 leading-6 flex flex-col md:flex-wrap md:h-[55vh]">
            {categories.map((item, i) => (
              <li key={i} className="helvetica-regular font-light text-sm leading-7">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <h1 className="text-base font-medium mb-3">Submission Instructions</h1>
          <p className="helvetica-light text-sm leading-6 mb-5">
            Submission of papers will be handled electronically via EDAS.
          </p>
        </div>

        <div>
          <h1 className="text-base font-medium mb-3">Conference Policy</h1>
          <p className="helvetica-light text-base md:text-sm leading-6 mb-5">
            Kindly read it from{' '}
            <a
              className="helvetica-regular underline"
              href="https://worldaiiotcongress.org/wp-content/uploads/2024/03/Conference_Policies_rev3.pdf"
            >
              HERE
            </a>{' '}
          </p>
          <p className="helvetica-light text-base md:text-sm leading-6 mb-5">
            PAPER SUBMISSION INSTRUCTION [ONLY FOR REVIEW MANUSCRIPT]
          </p>
          <p className="helvetica-light text-base md:text-sm leading-6 mb-5">
            All submitted articles will be evaluated on their quality and relevance using
            double-blind peer review, which hides the authors’ identity from the reviewers. All
            review manuscripts should fulfill the double-blind submission guidelines for review
            purpose. When preparing your proposal, please take the following procedure as a minimum:
          </p>
          <ul className="helvetica-light text-base md:text-sm list-disc px-3 leading-6">
            <li className="helvetica-regular font-light text-base md:text-sm leading-7">
              Eliminate the authors’ names and affiliations from the title page.
            </li>
            <li className="helvetica-regular font-light text-base md:text-sm leading-7">
              Receipts of identifying names and financial sources should not be there.
            </li>
            <li className="helvetica-regular font-light text-base md:text-sm leading-7">
              Papers should follow the{' '}
              <a
                className="helvetica-regular underline"
                href="https://cis.ieee.org/images/files/Publications/IEEE_Preprint_Policy.pdf"
              >
                IEEE preprint policy.
              </a>{' '}
            </li>
          </ul>

          <p className="helvetica-light text-sm leading-6 mb-5">Important Documents:</p>
          <ul className="helvetica-light text-sm list-disc px-3 leading-6">
            <li className="helvetica-regular font-light text-sm leading-7">
              IEEE PDF eXpress:{' '}
              <a
                className="helvetica-regular underline"
                href="https://worldaiiotcongress.org/wp-content/uploads/2024/04/61789X.PDF.pdf"
              >
                LINK
              </a>{' '}
            </li>
            <li className="helvetica-regular font-light text-sm leading-7">
              Receipts of identifying names and financial sources should not be there.
            </li>
            <li className="helvetica-regular font-light text-sm leading-7">
              Copyright notice for final paper:{' '}
              <a
                className="helvetica-regular underline"
                href="https://worldaiiotcongress.org/wp-content/uploads/2024/04/COPYRIGHT-INFORMATION.pdf"
              >
                LINK
              </a>{' '}
            </li>
          </ul>
        </div>
      </section>

      <Sponsors />

      <div className="mt-5">
        <Footer />
      </div>
    </section>
  );
};

export default CallForPapers;
