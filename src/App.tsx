import Page from './pages/Page';
import React, { useEffect } from 'react';
import "./styles/main.scss";
import Landing from './pages/Landing';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
        <Route path='/delegate' element={<Page />} />
        <Route path='/delegate/complete' element={<CompleteForm />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
