import SectionTitle from '../../Components/UI/SectionTitle';
import PortfolioSlide from '../../Components/PortfolioSlide/PortfolioSlide';

import portfolio_db from '../../Utils/Data/PotfolioData';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Mousewheel } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-6 pt-10 pb-16 md:pb-32">
      <SectionTitle title="Portfolio" subtitle="Most recent work" />
      <Swiper
        className="mySwiper"
        keyboard={{
          enabled: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Mousewheel]}
        navigation
        scrollbar={true}
        mousewheel={true}
        spaceBetween={50}
        slidesPerView={1}>
        {portfolio_db.map((slide, i) => (
          <SwiperSlide key={i}>
            <PortfolioSlide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
