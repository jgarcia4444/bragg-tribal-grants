import './App.css';

import Header from './components/Header';
import OurServices from './components/OurServices';
import Resources from './components/Resources';
import Schedule from './components/Schedule';
import Navbar from './components/Navbar';
import Partners from './components/Partners';
import Contact from './components/Contact';

function App() {
  return (
    <div className=" h-screen">
      <Navbar />
      <Header />
      <OurServices />
      <Resources />
      <Partners />
      <Schedule />
      <Contact />
    </div>
  );
}

export default App;
