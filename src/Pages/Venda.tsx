import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import type { IVenda } from "../Types/Venda";
import Loading from "../Components/Loading";

interface IVendaSemData extends Omit<IVenda, "data"> {}

const Venda = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<IVendaSemData>(
    `https://data.origamid.dev/vendas/${id}`,
  );

  if (loading) return <Loading />;
  if (!data) return <div>Venda não encontrada</div>;

  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço:{" "}
        {data.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
    </div>
  );
};

export default Venda;
