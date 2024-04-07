import Innovate from '@/Features/Home/Innovate';
import Hero from '../Features/Home/Hero';
import About from '@/Features/Home/About';
import Services from '@/Features/Home/Services';
import Calculate from '@/Features/Home/Calculate';
import { Slides } from '@/Features/Home/Slides';
import Contact from '@/Features/Home/Contact';
import Footer from '@/Features/Home/Footer';
const Home = () => {
 return (
  < >
   <Hero />
   <Innovate />
   <About />
   <Services />
   <Calculate />
   <Slides />
   <Contact />
   <Footer />
  </>
 );
};

export default Home;