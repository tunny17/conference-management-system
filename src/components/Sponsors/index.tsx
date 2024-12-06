const Sponsors = () => {
  return (
    <section className="bg-sponsor bg-cover bg-center bg-[#FAFDFF] px-[6%] mb-10 py-10 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-secondary-light">Conference Sponsors</h1>
      <p className="mt-3 helvetica-regular text-[#556987]">
        Backbone for our responsible events become successful event
      </p>
      <div className="flex items-center text-sm mt-3">
        <span className="px-4 py-2 border text-primary-light helvetica-regular rounded-tl-md rounded-bl-md bg-#F7F8F9]">
          Golden Sponsors
        </span>
        <span className="px-4 py-2 border text-primary-light helvetica-regular bg-[#FFF0F0]">
          Platinum Sponsor
        </span>
        <span className="px-4 py-2 border text-primary-light helvetica-regular rounded-tr-md rounded-br-md bg-[#F7F8F9]">
          Silver Sponsors
        </span>
      </div>
      <span className="text-[#BBC3CF] text-xs my-7">
        Trusted by the top companies in this industry
      </span>
      <div className="">
        <img src="/sponsors.png" alt="" className="w-[80%] mx-auto" />
      </div>
    </section>
  );
};

export default Sponsors;
