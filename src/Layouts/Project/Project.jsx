import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

import Coffee from '../../Components/Project/Coffee';
export default function Project() {
  return (
    <section className="text-center flex flex-col items-center px-6 pt-16 pb-16 dark:bg-D_firstColorSecond bg-firstColorSecond rounded-xl md:pt-24">
      <div className="flex justify-center items-center flex-col text-white ">
        <h2 className="">You have a new project</h2>
        <p className="text-white pt-2">Let's connect and create awesome products together.</p>
      </div>

      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        href="#contact"
        className=" flex space-x-2 mt-8 w-48 px-6 py-4 font-medium
        rounded-md
        text-firstColor hover:text-D_firstColorSecond bg-white hover:bg-white
    
    ">
        <span> Contact Me</span>
        <i className="uil uil-message button__icon"></i>
      </Link>

      <AnimatePresence>
        <Coffee />
      </AnimatePresence>
    </section>
  );
}
