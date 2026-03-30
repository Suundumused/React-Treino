import './App.css';
import { BrowserRouter as Router, Route, Routes } from  'react-router-dom';

import { HeaderSwitcher, FooterSwitcher, PublicHeader, PublicFooter } from './layouts';
import { Home, About, AddItem, DeleteItem, EditItem, GetItem, ListItem } from './pages';


function App() {
  return (
    <div className="App">
      <Router>
          <HeaderSwitcher header = {<PublicHeader />} />
          <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/items/list" element={<ListItem/>}/>
            <Route path="/items/get" element={<GetItem/>}/>
            <Route path="/items/add" element={<AddItem/>}/>
            <Route path="/items/edit" element={<EditItem/>}/>
            <Route path="/items/delete" element={<DeleteItem/>}/>

            <Route path="/about" element={<About/>}/>
          </Routes>
      </Router>
      <FooterSwitcher footer = {<PublicFooter />}/>
    </div>
  );
}

export default App;