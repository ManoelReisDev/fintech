import DateInput from "./DateInput";
import { useDataContext } from "../Contexts/DataContext";

const DataRange = () => {

  const { inicio, final, setInicio, setFinal } = useDataContext();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className="box flex"
    >
      <DateInput
        label="Inicio"
        id="inicio"
        name="inicio"
        value={inicio}
        onChange={(event) => setInicio(event.target.value)}
      />
      <DateInput
        label="Fim"
        id="fim"
        name="fim"
        value={final}
        onChange={(event) => setFinal(event.target.value)}
      />
    </form>
  );
};

export default DataRange;
