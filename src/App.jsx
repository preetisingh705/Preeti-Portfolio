import React from 'react';
// components
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Services from './components/Service/Services';
import Work from './components/Project/Work';
import Contact from './components/Contact/Contact';
import Cursur from './components/Cursor/Cursur';
import ScollTop from './components/ScrollTop/ScollTop';


function App() {
  
  return ( 
   <div className='dark:bg-black bg-white bg-no-repeat overflow-hidden '>
      <Nav />
      <Header />
      <Banner />
      <About />
      <Work />
      <Services />
      <Contact />
      <ScollTop />
      <Cursur />

      {/* <div className='h-[1000px]'></div> */}
   </div>
  );
};

export default App;
