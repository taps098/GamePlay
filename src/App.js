import React from 'react';
import MainApp from './components/MainApp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/aboutPage/aboutPage';
import ContentPage from './components/contentPage/ContentPage';
import ColourGame from './components/colourGame/ColourGame';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MainApp />
      <div className='contentPageStyle'>
      <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/game" element={<ContentPage />} />
      <Route path="/colourGame" element={<ColourGame />} />
      
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
