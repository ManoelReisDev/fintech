import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import Resumo from "./Pages/Resumo";
import { DataContextProvider } from "./Contexts/DataContext";
import "./Style.css";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Resumo />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
