import Preloader from './Components/PreLoader/PreLoader';
import ProgressBar from './Components/ProgressBar/ProgressBar';
import Wrapper from './Components/UI/Wrapper';
import Home from './Layouts/Home/Home';
import Header from './Layouts/Header/Header';
import About from './Layouts/About/About';
import Skills from './Layouts/Skills/Skills';
import Qualification from './Layouts/Qualification/Qualification';
import Services from './Layouts/Services/Services';
import Portfolio from './Layouts/Portfolio/Portfolio';
import Project from './Layouts/Project/Project';
import Testimonials from './Layouts/Testimonials/Testimonials';
import Contact from './Layouts/Contact/Contact';
import Footer from './Layouts/Footer/Footer';
import ScrollToTop from './Components/ScrollTop/ScrollToTop';
import SoundButton from './Components/SoundButton/SoundButton';

function App() {
  return (
    <>
      <Preloader />
      <ProgressBar />
      <Header />
      <SoundButton />
      <Wrapper>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Portfolio />
        <Project />
        <Testimonials />
        <Contact />
      </Wrapper>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
