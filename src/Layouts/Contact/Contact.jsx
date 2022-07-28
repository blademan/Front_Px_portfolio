import SectionTitle from '../../Components/UI/SectionTitle';
import Form from '../../Components/Form/Form';
export default function Contact() {
  return (
    <section id="contact" className="px-6 pt-24 pb-16 ">
      <SectionTitle title="Contact Me" subtitle="Get in touch" />

      <div className="flex flex-col md:flex-row md:space-x-24">
        <div className="pt-4 ">
          <div className="flex space-x-3 pt-8 items-center ">
            <i className="uil uil-phone contact__icon text-firstColor text-3xl"></i>

            <div>
              <h3 className="dark:text-D_titleColor text-titleColor font-bold">Call Me</h3>
              <span className="dark:text-D_textColor text-textColor text-xs">+91 7838436141</span>
            </div>
          </div>

          <div className="flex space-x-3 pt-8 items-center ">
            <i className="uil uil-envelope contact__icon  text-firstColor text-3xl"></i>

            <div>
              <h3 className="dark:text-D_titleColor text-titleColor font-bold">Email</h3>
              <span className="dark:text-D_textColor text-textColor text-xs">
                eduards.leimanis@gmail.com
              </span>
            </div>
          </div>

          <div className="flex space-x-3 pt-8 items-center ">
            <i className="uil uil-map-marker contact__icon  text-firstColor text-3xl"></i>

            <div>
              <h3 className="dark:text-D_titleColor text-titleColor font-bold">Location</h3>
              <span className="dark:text-D_textColor text-textColor text-xs">+RIga, Latvia</span>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
}
