import Page from './pages/Page';
import React, { useEffect } from 'react';
import "./styles/main.scss";
import Landing from './pages/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompleteForm from './pages/CompleteForm';
import ReactGA from 'react-ga';

const App: React.FC = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/predelegate' element={<Page />} />
        <Route path='/predelegate/complete' element={<CompleteForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
