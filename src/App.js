import './App.css';

import Header from './components/Header';
import OurServices from './components/OurServices';
import Resources from './components/Resources';
import Schedule from './components/Schedule';

function App() {
  return (
    <div className=" h-screen">
      <Header />
      <OurServices />
      <Resources />
      <Schedule />
    </div>
  );
}

export default App;
