import './App.css';
import Page from './components/Page';
import React, { useState } from 'react';
import "./styles/main.scss";
import Language from './components/forms/Language';
import FormAdapter from './components/FormAdapter';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0)

  return (
    <Page />
  )
}

export default App;
