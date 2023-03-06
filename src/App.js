import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Content from './components/content/content';
import Casino from './components/content/casino';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Content />}></Route>
        <Route path="/casino" element={<Casino />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
