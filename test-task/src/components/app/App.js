import React from 'react'
import './App.css';
import {Header} from '../header-block/Header'
import {Main} from '../main-block/Main'
import {SlideBlock} from '../slider-block/SliderBlock'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <SlideBlock />
    </div>
  );
}

export default App;
