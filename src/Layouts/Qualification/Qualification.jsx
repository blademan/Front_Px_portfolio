import SectionTitle from '../../Components/UI/SectionTitle';

export default function Qualification() {
  return (
    <section className="px-6 pt-10 pb-6 ">
      <SectionTitle title="Qualification" subtitle="My personal journey" />

      <div className="pt-12 font-bold">
        <div className="flex justify-around pb-10">
          <div className="flex items-center space-x-2 text-lg text-firstColor">
            <i className="uil uil-briefcase-alt qualification__icon text-2xl"> </i>{' '}
            <span>Work</span>
          </div>

          <div className="flex items-center space-x-2 text-lg text-firstColor">
            <i className="uil uil-graduation-cap qualification__icon text-2xl"> </i>{' '}
            <span>Education</span>
          </div>
        </div>
        {/* <!-- component --> */}
        <div className=" dark:bg-D_bodyColor mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden h-full">
            <div className="border-2-2 absolute border-opacity-50 border-firstColor h-[82%] md:h-[84%] border left-[49.9%]"></div>

            {/* <!-- right timeline --> */}
            <div className="mb-8 flex justify-between  w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-firstColor shadow-xl w-4 h-4 rounded-full"></div>
              <div className="order-1  rounded-lg w-5/12  py-2">
                <h3 className=" font-bold dark:text-D_titleColor text-titleColor text-[16px]">
                  Software Development Technician
                </h3>
                <p className="text-sm leading-snug tracking-wide dark:text-D_textColor text-textColor opacity-100 mb-3">
                  LTPC
                </p>
                <div className="dark:text-D_textColor text-textColor text-xs">
                  <i className="uil uil-calendar-alt"></i> 2018-2019
                </div>
              </div>
            </div>

            {/* <!-- left timeline --> */}

            <div className="mb-8 flex justify-between flex-row-reverse  w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-firstColor shadow-xl w-4 h-4 rounded-full"></div>
              <div className="order-1  rounded-lg  w-5/12  py-2">
                <h3 className=" font-bold dark:text-D_titleColor text-titleColor text-[16px]">
                  Wordpress Developer
                </h3>
                <p className="text-sm leading-snug tracking-wide dark:text-D_textColor text-textColor opacity-100 mb-3">
                  UpWork
                </p>
                <div className="dark:text-D_textColor text-textColor text-xs">
                  <i className="uil uil-calendar-alt"></i> 2019-2020
                </div>
              </div>
            </div>

            {/* <!-- right timeline --> */}
            <div className="mb-8 flex justify-between  w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-firstColor shadow-xl w-4 h-4 rounded-full"></div>
              <div className="order-1  rounded-lg w-5/12  py-2">
                <h3 className=" font-bold dark:text-D_titleColor text-titleColor text-[16px]">
                  JavaScript Developer
                </h3>
                <p className="text-sm leading-snug tracking-wide dark:text-D_textColor text-textColor opacity-100 mb-3">
                  Online BootCamp
                </p>
                <div className="dark:text-D_textColor text-textColor text-xs">
                  <i className="uil uil-calendar-alt"></i> 2020
                </div>
              </div>
            </div>

            {/* <!-- left timeline --> */}

            <div className="mb-8 flex justify-between flex-row-reverse  w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-firstColor shadow-xl w-4 h-4 rounded-full"></div>
              <div className="order-1  rounded-lg  w-5/12  py-2">
                <h3 className=" font-bold dark:text-D_titleColor text-titleColor text-[16px]">
                  Front-End Developer
                </h3>
                <p className="text-sm leading-snug tracking-wide dark:text-D_textColor text-textColor opacity-100 mb-3">
                  DESIGN IN DC
                </p>
                <div className="dark:text-D_textColor text-textColor text-xs">
                  <i className="uil uil-calendar-alt"></i> 2020-2021
                </div>
              </div>
            </div>
            {/* <!-- right timeline --> */}
            <div className="mb-8 flex justify-between  w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-firstColor shadow-xl w-4 h-4 rounded-full"></div>
              <div className="order-1  rounded-lg w-5/12  py-2">
                <h3 className=" font-bold dark:text-D_titleColor text-titleColor text-[16px]">
                  React Developer
                </h3>
                <p className="text-sm leading-snug tracking-wide dark:text-D_textColor text-textColor opacity-100 mb-3">
                  Online BootCamp
                </p>
                <div className="dark:text-D_textColor text-textColor text-xs">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>
            </div>

            {/* <!-- left timeline --> */}

            <div className="mb-8 flex justify-between flex-row-reverse  w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-firstColor shadow-xl w-4 h-4 rounded-full"></div>
              <div className="order-1  rounded-lg  w-5/12  py-2">
                <h3 className=" font-bold dark:text-D_titleColor text-titleColor text-[16px]">
                  Website Maintenance Specialist
                </h3>
                <p className="text-sm leading-snug tracking-wide dark:text-D_textColor text-textColor opacity-100 mb-3">
                  UpWork
                </p>
                <div className="dark:text-D_textColor text-textColor text-xs">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
