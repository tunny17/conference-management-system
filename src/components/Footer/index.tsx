const Footer = ({ showJoinBanner = true }) => {
  return (
    <section>
      {/* {showJoinBanner && (
        <section className="bg-footer bg-cover bg-center bg-[#FAFDFF] px-[6%] w-[95%] md:w-[88%] h-[40vh] mx-auto mb-10 py-10 rounded-md flex flex-col md:flex-row gap-y-7 justify-center items-center">
          <div>
            <h3 className="text-xl md:text-4xl font-bold text-[#474747] w-[70%]">
              To be a reviewer or contribute to IEEE ICTAS 2025, use this link
            </h3>
            <p className="helvetica-regular text-xs mt-5">
              Build opportunities for future opportunities for products, startups.
            </p>
          </div>
          <div className="flex gap-5">
            <button
              type="button"
              onClick={() =>
                window.open(
                  'https://forms.office.com/pages/responsepage.aspx?id=0TAZS_QStUC0jL2GEXQp2Jy36bzDqrlDilYlUzWeQJhUQzNJMkcwMkNHTDgzTjEyMFJPNkJSTUJaWS4u&route=shorturl',
                  '_blank'
                )
              }
              className="px-7 py-2 bg-primary-light text-sm text-white rounded-md"
            >
              Join ICTAS Comunity
            </button>
            <button
              type="button"
              className="px-3 py-2 text-sm rounded-md border-[#474747] text-secondary-light border "
            >
              Donate
            </button>
          </div>
        </section>
      )} */}

      <div>
        <img src="/footer.png" alt="" />
      </div>

      {/* <section className="bg-primary-light text-white px-[6%] py-10 flex flex-col md:flex-row gap-y-7 items-start justify-between">
        <div className="w-full md:w-[25%]">
          <img src="/logo.svg" alt="" />
          <p className="text-xs helvetica-regular my-5">
            Continuing from the outstanding success of IEEE AIIoT 2023, we are very proud to present
            IEEE World AI IoT Congress 2024 which will provide an opportunity for researchers,
            educators.
          </p>
          <div className="flex items-center gap-5">
            <a href="/facebook">
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_14_1362)">
                  <path
                    d="M18.2351 36.5361C28.1762 36.5361 36.2351 28.4773 36.2351 18.5361C36.2351 8.59501 28.1762 0.536133 18.2351 0.536133C8.29398 0.536133 0.235107 8.59501 0.235107 18.5361C0.235107 28.4773 8.29398 36.5361 18.2351 36.5361Z"
                    fill="#3B5998"
                  />
                  <path
                    d="M22.7602 19.2406H19.5484V31.0075H14.6821V19.2406H12.3677V15.1053H14.6821V12.4293C14.6821 10.5156 15.5911 7.51904 19.5917 7.51904L23.1963 7.53412V11.5482H20.5809C20.1519 11.5482 19.5487 11.7625 19.5487 12.6754V15.1092H23.1854L22.7602 19.2406Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_14_1362">
                    <rect
                      width="36"
                      height="36"
                      fill="white"
                      transform="translate(0.235107 0.536133)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="/twitter">
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_14_1366)">
                  <path
                    d="M18.2353 36.5358C28.1763 36.5358 36.2351 28.477 36.2351 18.536C36.2351 8.59494 28.1763 0.536133 18.2353 0.536133C8.29428 0.536133 0.235474 8.59494 0.235474 18.536C0.235474 28.477 8.29428 36.5358 18.2353 36.5358Z"
                    fill="#55ACEE"
                  />
                  <path
                    d="M29.2607 13.4722C28.4894 13.8142 27.6596 14.0456 26.7894 14.1489C27.6779 13.6166 28.3597 12.7743 28.6816 11.769C27.8502 12.2622 26.929 12.62 25.9494 12.8128C25.1646 11.977 24.0464 11.4546 22.8081 11.4546C20.4325 11.4546 18.5057 13.3814 18.5057 15.7571C18.5057 16.0943 18.5439 16.4225 18.6177 16.7376C15.0419 16.5583 11.8715 14.8455 9.74928 12.2417C9.37901 12.877 9.16659 13.6166 9.16659 14.4049C9.16659 15.8973 9.92672 17.2147 11.0805 17.9861C10.3756 17.964 9.71174 17.7705 9.13194 17.4474C9.13162 17.4657 9.13162 17.4839 9.13162 17.5019C9.13162 19.5866 10.6153 21.3253 12.5832 21.7203C12.2225 21.8191 11.8416 21.8714 11.4499 21.8714C11.172 21.8714 10.9028 21.8448 10.6403 21.7948C11.1877 23.5037 12.7763 24.7477 14.6595 24.7826C13.1867 25.9368 11.3318 26.6244 9.31548 26.6244C8.96894 26.6244 8.62562 26.6042 8.28967 26.5641C10.1927 27.7853 12.4548 28.4973 14.8844 28.4973C22.7982 28.4973 27.126 21.9414 27.126 16.2554C27.126 16.0689 27.1218 15.8832 27.1135 15.699C27.9548 15.0925 28.6841 14.335 29.2607 13.4722Z"
                    fill="#F1F2F2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_14_1366">
                    <rect
                      width="36"
                      height="36"
                      fill="white"
                      transform="translate(0.235107 0.536133)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="/linkedin">
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_14_1371)">
                  <path
                    d="M18.2351 36.5359C28.1762 36.5359 36.2351 28.477 36.2351 18.5359C36.2351 8.59476 28.1762 0.535889 18.2351 0.535889C8.29398 0.535889 0.235107 8.59476 0.235107 18.5359C0.235107 28.477 8.29398 36.5359 18.2351 36.5359Z"
                    fill="#007AB9"
                  />
                  <path
                    d="M28.9899 19.9843V27.4053H24.6874V20.4816C24.6874 18.7431 24.0662 17.5559 22.5084 17.5559C21.3196 17.5559 20.6133 18.3552 20.3014 19.1292C20.1882 19.4057 20.159 19.7898 20.159 20.1777V27.405H15.8562C15.8562 27.405 15.9139 15.6785 15.8562 14.4647H20.1593V16.2985C20.1506 16.3129 20.1384 16.327 20.1307 16.3408H20.1593V16.2985C20.7311 15.4186 21.7508 14.1608 24.037 14.1608C26.8677 14.1608 28.9899 16.0103 28.9899 19.9843ZM11.355 8.22705C9.88321 8.22705 8.92029 9.19318 8.92029 10.4625C8.92029 11.7049 9.85529 12.699 11.2986 12.699H11.3265C12.8272 12.699 13.7602 11.7049 13.7602 10.4625C13.7317 9.19318 12.8272 8.22705 11.355 8.22705ZM9.17602 27.4053H13.4772V14.4647H9.17602V27.4053Z"
                    fill="#F1F2F2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_14_1371">
                    <rect
                      width="36"
                      height="36"
                      fill="white"
                      transform="translate(0.235107 0.536133)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full md:w-[8%]">
          <h3>ICTAS Event</h3>

          <ul className="mt-5 text-sm helvetica-regular leading-6">
            <li>Contact Us</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>

        <div className="w-full md:w-[28%]">
          <h3>Stay in the loop</h3>
          <p className="text-xs mt-5">
            Join our mailing list to stay in the loop with our newest for Event and concert
          </p>

          <div className="bg-white mt-3 w-fit flex items-center gap-3 p-2 rounded-md">
            <input
              type="email"
              placeholder="Enter your email address.."
              className="text-xs px-3 py-2 outline-none text-primary-light w-[50%]"
            />
            <button type="button" className="bg-[#800001] rounded-md px-5 py-2 text-white text-sm">
              Subscribe Now
            </button>
          </div>
        </div>
      </section> */}
    </section>
  );
};

export default Footer;
