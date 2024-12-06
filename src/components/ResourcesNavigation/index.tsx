const ResourceNavigation = () => {
  const Resources = [
    {
      title: 'Conference Pages',
      navs: [
        {
          title: 'Schedule',
          text: 'See your daily schedules ahead of the Conference',
          image: 'schedule-1',
          url: '/schedule'
        },
        {
          title: 'Workshop',
          text: 'Demo Description - t non deserunt ullamco est sit aliqua amet sint.',
          image: 'schedule-2',
          url: '/workshop'
        },
        {
          title: 'Gallery',
          text: 'Demo Description - t non deserunt ullamco est sit aliqua amet sint. ',
          image: 'schedule-3',
          url: '/gallery'
        }
      ]
    },
    {
      title: 'Other Pages',
      navs: [
        {
          title: 'Committees',
          text: 'Demo Description - t non deserunt ullamco est sit aliqua amet sint. ',
          image: 'schedule-1',
          url: '/committee'
        },
        {
          title: 'Keynote Speaker',
          text: 'Demo Description - t non deserunt ullamco est sit aliqua amet sint. ',
          image: 'schedule-2',
          url: '/keynote-speaker'
        },
        {
          title: 'Projects',
          text: 'Demo Description - t non deserunt ullamco est sit aliqua amet sint. ',
          image: 'schedule-2'
        }
      ]
    },
    {
      title: 'Keynote Speakers',
      navs: [
        {
          title: 'Speakers',
          text: 'See your daily schedules ahead of the Conference',
          image: 'keynote-1',
          url: '/speakers'
        },
        {
          title: 'Research Talk',
          text: 'Demo Description - t non deserunt ullamco est sit aliqua amet sint. ',
          image: 'keynote-3',
          url: '/research-talk'
        }
      ]
    },
    {
      title: 'Submission of Papers',
      navs: [
        {
          title: 'Call for Papers',
          text: 'See your daily schedules ahead of the Conference',
          image: 'submission',
          url: 'call-for-papers'
        }
      ]
    }
  ];

  return (
    <div className="fixed z-[1000] top-28 left-0 w-full inset-0 bg-black bg-opacity-50">
      <div className="w-[90vw] mx-auto rounded-lg bg-white flex justify-between p-5">
        {Resources.map((data, i) => (
          <div key={i} className="w-[22%]">
            <p className="text-xs text-primary-light mb-3">{data.title}</p>

            <ul className="flex flex-col gap-5">
              {data.navs.map((nav, i) => (
                <a
                  href={nav.url}
                  key={i}
                  className="flex gap-2 items-start rounded-md p-2 hover:bg-[#F8F8F8] hover:text-primary-light cursor-pointer duration-300 transition-all"
                >
                  <img src={`/${nav.image}.svg`} alt="" className="w-4 mt-1" />

                  <div>
                    <p className="text-sm m-0 font-bold">{nav.title}</p>
                    <p className="text-xs leading-4 mt-1">{nav.text}</p>
                  </div>
                </a>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceNavigation;
