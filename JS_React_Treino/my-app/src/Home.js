import './Home.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/testeProps/SayMyName';
import Pessoa from './components/testeProps/Pessoa';
import List from './components/fragments/List';
import NewList from './components/propsSuperAvancados/NewList';
import EventoTeste from './components/events/EventoTeste';
import FormTeste from './components/events/FromTeste';
import EventoProp from './components/testeProps/EventoProp';
import Condicional from './components/ifElse/Condicional';
import OutraLista from './components/Listas/OutraLista';
import TheParent from './components/stateLifts/TheParent';

import {BrowserRouter as Router, Route, Link, Routes} from  'react-router-dom';
import MyHome from './pages/components/MyHome';
import Contato from './pages/components/Contato';

import {FaFacebook} from 'react-icons/fa';

function Home() {
  const name = "kkkaoadio";
  const randomImageUrl = "httpfs://m.media-amazon.com/images/I/61Oa801S95L._AC_UF894,1000_QL80_.jpg";

  const meusItens = ["React", "Vue", "Angular"];

  function sum(a, b) {
    return a + b;
  }

  return (
    <div className="Home">
      <h2>Olá, {name}</h2>
      <h2>Soma = {2 + 2}</h2>
      <p>Nova soma: {sum(2, 3)}</p>
      <img src={randomImageUrl} alt="Imagem random"/>

      <HelloWorld></HelloWorld>

      <SayMyName name="Tarantula"></SayMyName>
      <Pessoa name="Caio" idade="10000000"></Pessoa>
      <List></List>
      <NewList testeItem3="coisa 3" testeItem4="coisa 4"></NewList>

      <EventoTeste></EventoTeste>
      <EventoProp></EventoProp>
      <FormTeste></FormTeste>
      <Condicional></Condicional>
      <OutraLista itens={meusItens}></OutraLista>
      <TheParent></TheParent>
      <p>Rotas</p>
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
        <Routes>
            <Route exact path="/" element={<MyHome/>}></Route>
            <Route path='/contato' element={<Contato/>}></Route>
        </Routes>
      </Router>
      <p>
        Icons
      </p>
      <FaFacebook></FaFacebook>
    </div>
  );
}

export default Home;