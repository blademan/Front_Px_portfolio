import Button from '../../Components/Button/Button';

export default function PortfolioSlide(props) {
  return (
    <>
      <div className="flex flex-col justify-center pt-12 items-center ">
        <div className="flex flex-col md:flex-row space-y-3 md:space-x-10 px-4 pb-20">
          <img src={props.img} alt="Lake" className="max-w-sm item-center" />
          <div className="flex flex-col pt-6">
            <h3 className="dark:text-D_titleColor font-bold text-left text-2xl">{props.title}</h3>
            <p className="dark:text-D_textColor text-textColor pb-6 pt-2">{props.description}</p>
            <Button name="Link" href={props.link} icon="uil uil-download-alt " />
          </div>
        </div>
      </div>
    </>
  );
}
