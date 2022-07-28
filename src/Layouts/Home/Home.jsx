import profileImg from '../../Assets/img/portfolio/Me.jpeg';
import Button from '../../Components/Button/Button';
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import { useState } from 'react';

export default function Home() {
  const [isMouseEnter, setMouseEnter] = useState(false);

  return (
    <>
      <main
        id="home"
        className=" bg-bodyColor dark:bg-D_bodyColor  pt-24 pb-6 px-6 md:px-2  md:pt-48">
        <section className="pt-2 pb-4">
          <div className="flex flex-wrap items-center space-around">
            {/* Social icon */}
            <div className="flex flex-col space-y-5 w-[30%] md:w-[10%] lg:translate-x-[-6rem]">
              <a
                href="https://in.linkedin.com/in/animesh-rawat-0b545552"
                target="_blank"
                className="text-firstColor text-xl hover:text-firstColorAlt"
                rel="noreferrer">
                <i className=" uil uil-linkedin-alt"></i>
              </a>
              <a
                href="https://github.com/rawatanimesh"
                target="_blank"
                className="text-firstColor text-xl hover:text-firstColorAlt"
                rel="noreferrer">
                <i className="uil uil-github-alt"></i>
              </a>
              <a
                href="https://t.me/rawatanimesh"
                target="_blank"
                className="text-firstColor text-xl hover:text-firstColorAlt"
                rel="noreferrer">
                <i className="uil uil-telegram-alt"></i>
              </a>
            </div>
            {/* Home Image */}
            {isMouseEnter && <Cursor isGelly={true} cursorSize={0} />}
            <div
              onMouseEnter={() => setMouseEnter(true)}
              onMouseLeave={() => setMouseEnter(false)}
              className="min-w-[70%] md:min-w-[30%] md:order-1  ">
              <img
                data-cursor-magnetic
                data-cursor-size="150px"
                data-cursor-color="rgba(110	87	224	,0.5	)"
                data-cursor-text="Hello : )"
                className="w-48 rounded-full   md:ml-auto md:mr-0  "
                src={profileImg}
                alt="Eduards"
              />
            </div>

            {/* Title */}
            <div className="md:w-[60%] md:order-0">
              <div className="flex flex-col space-y-2 font-cursive md:max-w-sm">
                <h1 className="dark:text-D_titleColor text-titleColor font-bold mt-8">
                  Hi, I am Eduard
                </h1>
                <h3 className="dark:text-D_textColor text-textColor font-bold">
                  Frontend Developer
                </h3>
                <p className="dark:text-D_textColor text-textColor">
                  An enthusiastic and a passionate coder with an eye for detail and a focus to
                  produce quality work.
                </p>
              </div>

              {/* Button */}

              <Button name="Contact Me" icon="uil uil-message button__icon" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
