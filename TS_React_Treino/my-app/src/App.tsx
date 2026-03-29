import './App.css';
import Msg from './components/condicional/Msg';
import CrazyButton from './components/eventosTest/CrazyButton';
import Input from './components/eventosTest/Input';
import List from './components/ListasTeste/List';
import Button from './components/propsTest/Button';
import User from './components/propsTest/User';
import Counter from './components/useStateTest/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Button theme="dark" onClick={() => console.log("clicked")} options={{variant: "normal"}}>
        Enviar
      </Button>
      <User name="caio"></User>
      <Counter></Counter><p></p>
      <CrazyButton></CrazyButton>
      <Input></Input>
      <Msg></Msg>
      <List></List>
      <footer></footer>
    </div>
  );
}

export default App;
