import profileImg from '../../Assets/img/portfolio/me_lake.jpeg';

import SectionTitle from '../../Components/UI/SectionTitle';

export default function About() {
  return (
    <section id="about" className=" px-6 pt-10 pb-16">
      <SectionTitle title="About Me" subtitle="My Introduction" />

      <div className="flex flex-col justify-center pt-12 items-center ">
        <img src={profileImg} alt="Lake" className="" />
        <p className="dark:text-D_textColor text-textColor pt-6 pb-10">
          A web developer with extensive knowledge and years of experience. Extensive knowledge of
          web technologies, modern libraries and frameworks.
        </p>
        <div className="flex justify-between space-x-12 px-8">
          <div className="flex flex-col text-center  dark:text-D_titleColor text-titleColor">
            <span className="text-xl font-bold pb-[0.1rem] ">2.5+</span>
            <span className="text-xs  dark:text-D_textColor text-textColor">
              Years <br /> experience
            </span>
          </div>
          <div className="flex flex-col text-center  dark:text-D_titleColor text-titleColor">
            <span className="text-xl font-bold pb-[0.1rem]">20+</span>
            <span className="text-xs  dark:text-D_textColor text-textColor">
              Years <br /> experience
            </span>
          </div>
          <div className="flex flex-col text-center  dark:text-D_titleColor text-titleColor">
            <span className="text-xl font-bold pb-[0.1rem]">02+</span>
            <span className="text-xs  dark:text-D_textColor text-textColor">
              Years <br /> experience
            </span>
          </div>
        </div>

        <button
          className=" flex space-x-2 mt-8 w-48 px-6 py-4 font-medium
        rounded-md
        text-white hover:bg-firstColorAlt bg-firstColor 
    
    ">
          <span>Download CV</span>
          <i className="uil uil-download-alt"></i>
        </button>
      </div>
    </section>
  );
}
