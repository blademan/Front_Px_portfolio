import SectionTitle from '../../Components/UI/SectionTitle';
import testimonial_db from '../../Utils/Data/TestimonialData';
import Testimonial from '../../Components/Testimonial/Testimonial';

export default function Testimonials() {
  return (
    <section className="px-6 pt-24  pb-6 text-center">
      <SectionTitle title="Testimonials" subtitle="Happy customers" />

      <div className="grid md:grid-cols-2 gap-x-6 lg:gap-x-12 pt-12">
        {testimonial_db.map((item) => (
          <Testimonial key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}
