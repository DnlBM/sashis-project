//import logo from './logo.svg';
import './App.css';
import React from 'react';
import CTA from './components/cta/CTA';

function App() {
  return (
    <div className="App">
      <CTA buttonType="button-1" buttonText="Explore"/>
      <CTA buttonType="button-2" buttonText="Continue Reading"/>
    </div>
  );
}

export default App;
