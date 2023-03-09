import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Content from './components/content/content';
import Casino from './components/content/casino';
import './App.css';
import { FormProvider } from './context/formContext';
import FirstStep from './components/content/firstStep';
import SecondStep from './components/content/secondStep';

function App() {
  return (
    <BrowserRouter>
      <FormProvider>
        <Routes>
          <Route exact path="/" element={<Content />}></Route>
          <Route path="/casino" element={<Casino />}></Route>
          <Route path="/first" element={<FirstStep />}></Route>
          <Route path="/second" element={<SecondStep />}></Route>
        </Routes>
      </FormProvider>
    </BrowserRouter>
  );
}

export default App;
