import { useDataContext } from "../Contexts/DataContext";
import VendaItem from "../Components/VendaItem";

const Vendas = () => {
  const { data } = useDataContext();

  if (!data) {
    return <section>Carregando...</section>;
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
