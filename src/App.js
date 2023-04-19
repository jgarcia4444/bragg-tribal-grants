import './App.css';

import Header from './components/Header';
import OurServices from './components/OurServices';
import Resources from './components/Resources';
import Schedule from './components/Schedule';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className=" h-screen">
      <Navbar />
      <Header />
      <OurServices />
      <Resources />
      <Schedule />
    </div>
  );
}

export default App;
