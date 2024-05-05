import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Intro from './Component/Intro/Intro';
import Portofolio from './Component/Portofolio/Portofolio';
import About from './Component/About/About';


function App() {
  return (
    <div className="container">
      <Navbar/>
      <Intro/>
      <Portofolio/>
      <About/>
    </div>
  )
};

export default App;