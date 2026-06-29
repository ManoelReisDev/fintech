import { useState } from "react";
import DataRange from "./DataRange";
import Meses from "./Meses";

const Header = () => {
  const [title, setTitle] = useState('Resumo');

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
