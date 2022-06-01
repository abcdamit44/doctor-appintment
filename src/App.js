
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import MakeAnAppointment from './components/MakeAnAppointment';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <MakeAnAppointment />
      <Footer />
    </>
  );
}

export default App;
