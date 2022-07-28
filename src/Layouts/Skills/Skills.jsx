import SectionTitle from '../../Components/UI/SectionTitle';
import js from '../../Assets/img/skills/javascript.svg';
import react from '../../Assets/img/skills/react.svg';
import typescript from '../../Assets/img/skills/typescript.svg';
import git from '../../Assets/img/skills/Git_icon.svg';
import webpack from '../../Assets/img/skills/webpack-icon-logo-vector.svg';
import firebase from '../../Assets/img/skills/firebase.svg';
import figma from '../../Assets/img/skills/figma-seeklogo.com.svg';
import sass from '../../Assets/img/skills/sass.svg';
import html from '../../Assets/img/skills/html.svg';
import css from '../../Assets/img/skills/css.svg';
import bootstrap from '../../Assets/img/skills/bootstrap-logo-vector.svg';
import tailwind from '../../Assets/img/skills/Tailwind_CSS_Logo.svg';

export default function Skills() {
  return (
    <section id="skills" className="px-6 pt-10 pb-16">
      <SectionTitle title="Skills" subtitle="My tech stack" />

      <div className="grid grid-cols-3 gap-6 pt-12">
        <div className="flex flex-col items-center hover:animate-pulse cursor-pointer ">
          <img src={js} alt="Js" className="w-10 h-10" />
          <span className="dark:text-D_textColor text-textColor text-center pt-[3px] text-xs ">
            JavaScript
          </span>
        </div>
        <div className="flex flex-col items-center hover:animate-pulse cursor-pointer">
          <img src={react} alt="Js" className="w-10 h-10" />
          <span className="dark:text-D_textColor text-textColor text-center pt-[3px] text-xs">
            React
          </span>
        </div>{' '}
        <div className="flex flex-col items-center cursor-pointer hover:animate-pulse">
          <img src={typescript} alt="Js" className="w-10 h-10" />
          <span className="dark:text-D_textColor text-textColor text-center pt-[3px] text-xs">
            TypeScript
          </span>
        </div>{' '}
        <div className="flex flex-col items-center cursor-pointer hover:animate-pulse">
          <img src={git} alt="Js" className="w-10 h-10" />
          <span className="dark:text-D_textColor text-textColor text-center pt-[3px] text-xs">
            Git
          </span>
        </div>{' '}
        <div className="flex flex-col items-center cursor-pointer hover:animate-pulse">
          <img src={webpack} alt="Js" className="w-10 h-10" />
          <span className="dark:text-D_textColor text-textColor text-center pt-[3px] text-xs">
            WebPack
          </span>
        </div>{' '}
        <div className="flex flex-col items-center cursor-pointer hover:animate-pulse">
          <img src={firebase} alt="Js" className="w-10 h-10" />
          <span className="dark:text-D_textColor text-textColor text-center pt-[3px] text-xs">
            Firebase
          </span>
        </div>{' '}
        <div className="flex flex-col items-center cursor-pointer hover:animate-pulse">
          <img src={figma} alt="Js" className="w-10 h-10" />
          <span className="dark:text-D_textColor text-textColor text-center pt-[3px] text-xs">
            Figma
          </span>
        </div>{' '}
        <div className="flex flex-col items-center cursor-pointer hover:animate-pulse">
          <img src={sass} alt="Js" className="w-10 h-10" />
          <span className="dark:text-D_textColor text-textColor text-center pt-[3px] text-xs">
            Sass
          </span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:animate-pulse">
          <img src={html} alt="Js" className="w-10 h-10" />
          <span className="dark:text-D_textColor text-textColor text-center pt-[3px] text-xs">
            HTML
          </span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:animate-pulse">
          <img src={css} alt="Js" className="w-10 h-10" />
          <span className="dark:text-D_textColor text-textColor text-center pt-[3px] text-xs">
            CSS
          </span>
        </div>{' '}
        <div className="flex flex-col items-center cursor-pointer hover:animate-pulse">
          <img src={bootstrap} alt="Js" className="w-10 h-10" />
          <span className="dark:text-D_textColor text-textColor text-center pt-[3px] text-xs">
            Bootstrap
          </span>
        </div>{' '}
        <div className="flex flex-col items-center cursor-pointer hover:animate-pulse">
          <img src={tailwind} alt="Js" className="w-10 h-10" />
          <span className="dark:text-D_textColor text-textColor text-center pt-[3px] text-xs">
            Tailwind
          </span>
        </div>
      </div>
    </section>
  );
}
