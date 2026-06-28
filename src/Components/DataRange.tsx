import { useState } from "react";
import DateInput from "./DateInput";

const DataRange = () => {
  const [incio, setInicio] = useState("");
  const [final, setFinal] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <DateInput
        label="Inicio"
        id="inicio"
        name="inicio"
        value={incio}
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
