import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import Resumo from "./Pages/Resumo";
import { DataContextProvider } from "./Contexts/DataContext";
import "./Style.css";

function App() {
  return (
    <DataContextProvider>
      <Sidenav />
      <main>
        <Header />
        <Resumo />
      </main>
    </DataContextProvider>
  );
}

export default App;
