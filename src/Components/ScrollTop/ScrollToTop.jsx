import { animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';
export default function ScrollToTop() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      {visible && (
        <button
          className="fixed px-2 py-1 bg-firstColor text-white  text-xl  shadow-md hover:bg-firstColorAlt hover:shadow-lg  rounded-md right-5 bottom-20 z-999 active:rounded-md outline-none"
          onClick={scrollToTop}>
          <i className="uil uil-arrow-up scrollup__icon"></i>
        </button>
      )}
    </>
  );
}
