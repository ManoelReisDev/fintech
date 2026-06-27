import { useDataContext } from "../Contexts/DataContext";

const Resumo = () => {
  const { data } = useDataContext();
  console.log(data);
  return <div>Resumo</div>;
};

export default Resumo;
