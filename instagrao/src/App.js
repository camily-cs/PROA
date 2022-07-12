import "./App.css";
import { Header } from "./components/Header";
import {Status} from "./components/Status";
import {Publicacao} from "./components/Publicacao";
import {Sugestoes} from "./components/Sugestoes";

function App() {
  return (
    <div className="App">
      <Header />
      <Status />
      <Publicacao />
      <Publicacao />
      <Publicacao />
      <Sugestoes />
    </div>
  );
}

export default App;
