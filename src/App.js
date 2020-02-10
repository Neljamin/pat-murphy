import React from 'react';

import './App.css';
import { LandingPage, About, Contact } from './components/pages';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <About />
      <Contact />
    </div>
  );
}

export default App;
