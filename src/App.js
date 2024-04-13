
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/Hero/HeroSection'
import MidSection from './Components/MidSection/MidSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <HeroSection/>
      <MidSection/>
    </div>
  );
}

export default App;
