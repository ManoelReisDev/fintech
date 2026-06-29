import type { IVenda } from "../Types/Venda";
import { NavLink } from "react-router-dom";

const VendaItem = ({ venda }: { venda: IVenda }) => {
  const preco = venda.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="venda box mb">
      <NavLink to={`/vendas/${venda.id}`} style={{ fontFamily: "monospace" }}>
        {venda.id}
      </NavLink>
      <div>{venda.nome}</div>
      <div>{preco}</div>
    </div>
  );
};

export default VendaItem;
