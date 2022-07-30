import ThemeButton from '../../Components/Button/ThemeButton';
import { Link } from 'react-scroll';
import { useState } from 'react';
import useScrollPrevent from '../../Hooks/useScrollPrevent';

const navigation = [
  { name: 'home', href: '#home', icon: 'uil uil-estate nav__icon text-2xl' },
  { name: 'about', href: '#about', icon: 'uil uil-user nav__icon text-2xl' },
  { name: 'skills', href: '#', icon: 'uil uil-file-alt nav__icon text-2xl' },
  { name: 'services', href: '#', icon: 'uil uil-briefcase-alt nav__icon text-2xl' },
  { name: 'portfolio', href: '#', icon: 'uil uil-scenery nav__icon text-2xl' },
  { name: 'contact', href: '#', icon: 'uil uil-message nav__icon text-2xl' },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenu] = useState(false);
  const [blockScroll, allowScroll] = useScrollPrevent(null);

  const showMenu = () => {
    setMobileMenu(!isMobileMenuOpen);
    !isMobileMenuOpen ? blockScroll() : allowScroll();
  };

  return (
    <>
      <nav
        className=" dark:bg-D_bodyColor  bg-bodyColor fixed right-0 left-0 bottom-0 md:sticky md:top-0 z-50 md:mb-[-5rem]
      
        shadow-gray-800 dark:shadow-firstColor shadow-2xl md:shadow-gray-200 dark:md:shadow-none
      ">
        <div className="container">
          <div className="max-w-6xl mx-auto px-4 ">
            <div className="flex justify-between relative">
              <div className="flex space-x-7">
                <a href="/" className="flex items-center py-3 md:py-6 px-2 z-10">
                  <span className=" dark:text-gray-500 text-xl">
                    Front<span className="text-firstColor">PX</span>
                  </span>
                </a>

                <div className="hidden md:flex items-center space-x-1">
                  {navigation.map((item) => (
                    <Link
                      offset={-100}
                      activeClass="active"
                      smooth
                      spy
                      to={item.name}
                      key={item.name}
                      href="!"
                      className="font-bold capitalize py-4 px-2 text-gray-500    border-b-4 border-firstColor hover:border-gray-400">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-3 ">
                <ThemeButton />
              </div>

              {!isMobileMenuOpen && (
                <div className="md:hidden flex items-center space-x-4 ">
                  <ThemeButton />
                  <button
                    onClick={showMenu}
                    className="text-xl dark:text-white pt-1 hover:text-firstColor">
                    <i className="uil uil-apps"></i>
                  </button>
                </div>
              )}
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="flex justify-center w-full  dark:bg-D_bodyColor text-center">
              <div className="nav__menu show-menu w-full">
                <ul className="grid grid-cols-3 gap-8 pb-8">
                  {navigation.map((item) => (
                    <Link
                      onClick={showMenu}
                      activeClass="active"
                      smooth
                      spy
                      to={item.name}
                      key={item.name}
                      className="text-gray-500 hover:text-firstColor font-bold">
                      <li href={item.href} className="flex flex-col  capitalize ">
                        <i className={item.icon}></i>
                        {item.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {isMobileMenuOpen && (
            <div className="flex justify-end items-center space-x-4 text-right pr-4 pb-[12px]">
              <ThemeButton />
              <button
                onClick={showMenu}
                className="text-xl dark:text-white pt-1 hover:text-firstColor">
                <i className="uil uil-times nav__close noSelect" id="nav-close"></i>
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
