import { BrowserRouter as Router, Route, Routes } from  'react-router-dom';

import './App.css';

import { HeaderSwitcher } from './components/layouts/corners/HeaderSwitcher';
import { FooterSwitcher } from './components/layouts/corners/FooterSwitcher';
import PublicHeader from './components/layouts/corners/public/PublicHeader';
import PublicFooter from './components/layouts/corners/public/PublicFooter';
import Home from './pages/home-pages/Home';
import About from './pages/about-pages/About';
import Partner from './pages/partners-pages/Partner';


function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <HeaderSwitcher header={<PublicHeader/>}/>
        </header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/partner" element={<Partner/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <footer>
          <FooterSwitcher footer={<PublicFooter/>}/>
        </footer>
      </Router>
    </div>
  );
}

export default App;
