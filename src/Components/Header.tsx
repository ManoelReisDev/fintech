import { useState } from "react";
import DataRange from "./DataRange";
import Meses from "./Meses";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = useState('Resumo');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setTitle('Resumo');
      document.title = 'Fintech | Resumo';
    } else if (location.pathname === '/vendas') {
      document.title = 'Fintech | Vendas';
      setTitle('Vendas');
    } else if (location.pathname.startsWith('/vendas/')) {
      document.title = 'Fintech | Venda';
      setTitle('Venda');
    }
  }, [location]);

  return (
    <header className="mb">
      <div className="daterange mb">
        <DataRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Meses />
    </header>
  );
};

export default Header;
