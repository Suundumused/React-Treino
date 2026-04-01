import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from  'react-router-dom';

import './App.css';

import { HeaderSwitcher } from './components/layouts/corners/HeaderSwitcher';
import { FooterSwitcher } from './components/layouts/corners/FooterSwitcher';
import PublicHeader from './components/layouts/corners/public/PublicHeader';
import PublicFooter from './components/layouts/corners/public/PublicFooter';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <HeaderSwitcher header={<PublicHeader/>}/>
        </header>
        <footer>
          <FooterSwitcher footer={<PublicFooter/>}/>
        </footer>
      </Router>
    </div>
  );
}

export default App;
