import type { IVenda } from "../Contexts/DataContext";

const VendaItem = ({ venda }: { venda: IVenda }) => {
  const preco = venda.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="venda box mb">
      <a href="" style={{ fontFamily: "monospace" }}>
        {venda.id}
      </a>
      <div>{venda.nome}</div>
      <div>{preco}</div>
    </div>
  );
};

export default VendaItem;
