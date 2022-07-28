import SectionTitle from '../../Components/UI/SectionTitle';
import Modal from '../../Components/Modals/ServicesModal';
import useModal from '../../Hooks/useModal';
import ServiceContent from '../../Components/Modals/ServiceContent';
import ServiceContent2 from '../../Components/Modals/ServiceContent2';

export default function Services() {
  const { showModalContent, setShowModalContent } = useModal();

  return (
    <>
      <section id="services" className="px-6 pt-10 pb-16">
        <SectionTitle title="Services" subtitle="What I offer" />
        <div className="grid grid-cols-2 gap-6 pt-12">
          {/* <!--==================== SERVICE 1 ====================--> */}
          <div className="shadow-md hover:shadow-xl group dark:bg-D_containerColor bg-containerColor pt-14 pr-2 pb-5 pl-6 rounded-md font-bold">
            <div>
              <i className="uil uil-arrow services__icon text-firstColor text-2xl"></i>
              <h3 className="pt-4 dark:text-D_titleColor text-titleColor pb-6">
                Frontend
                <br />
                Developer
              </h3>
            </div>

            <span
              onClick={() => setShowModalContent([true, 1])}
              className=" text-firstColor  flex items-center max-w-fit justify-start space-x-2 hover:text-firstColorAlt cursor-pointer  duration-300">
              <span className="group text-sm">View More</span>
              <i className="uil uil-arrow-right button__icon group-hover:pl-1 duration-300 text-xl"></i>
            </span>
          </div>
          {/* 
   <!--==================== SERVICE 2 ====================--> */}
          <div className="shadow-md hover:shadow-xl group dark:bg-D_containerColor bg-containerColor pt-14 pr-2 pb-5 pl-6 rounded-md font-bold">
            <div>
              <i className="uil uil-arrow services__icon text-firstColor text-2xl"></i>
              <h3 className="pt-4 dark:text-D_titleColor text-titleColor pb-6">
                Wordpress
                <br />
                Developer
              </h3>
            </div>

            <span
              onClick={() => setShowModalContent([true, 2])}
              className="group text-firstColor  flex items-center max-w-fit justify-start space-x-2 hover:text-firstColorAlt cursor-pointer  duration-300">
              <span className="group text-sm">View More</span>
              <i className="uil uil-arrow-right button__icon group-hover:pl-1 duration-300 text-xl"></i>
            </span>
          </div>
        </div>
      </section>
      <Modal onCloseModal={setShowModalContent} visible={showModalContent[0]} id={1}>
        {showModalContent[1] === 1 ? <ServiceContent /> : null}
        {showModalContent[1] === 2 ? <ServiceContent2 /> : null}
      </Modal>
    </>
  );
}
