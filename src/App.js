import logo from './logo.svg';
import './App.css';
import { HeroSection } from './Components/HeroSection';
import { Routes,Route } from 'react-router-dom';
import CTASection from './Components/CTASection';
import How from './Components/How';
import Testimonials from './Components/Testimonials';
import Pricing from './Components/Pricing';
import Meals from './Components/Meals';
import Home from './Components/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cta' element={<CTASection/>}/>
      <Route path='/how' element={<How/>}/>
      <Route path='/meals' element={<Meals/>}/>
      <Route path='/testimonials' element={<Testimonials/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
    </Routes>
    </>
  );
}

export default App;
