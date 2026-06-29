import { useDataContext } from "../Contexts/DataContext";
import VendaItem from "../Components/VendaItem";
import Loading from "../Components/Loading";

const Vendas = () => {
  const { data } = useDataContext();

  if (!data) {
    return <section><Loading /></section>;
  }

  return <ul>
    {data.map((item) => (
      <li key={item.id}>
        <VendaItem venda={item} />
      </li>
    ))}
  </ul>;
};

export default Vendas;
