import React, { createContext, useState } from "react";
import useFetch from "../Hooks/useFetch";

interface IDataContextType {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
}

interface IVenda {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  data: string;
  parcelas: number | null;
}

const DataContext = createContext<IDataContextType | undefined>(undefined);

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const getDateWithOffset = (daysOffset: number) => {
  const date = new Date();
  date.setDate(date.getDate() + daysOffset);

  return formatDate(date);
};

export const useDataContext = () => {
  const context = React.useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return context;
};

export const DataContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [inicio, setInicio] = useState(() => getDateWithOffset(-30));
  const [final, setFinal] = useState(() => getDateWithOffset(0));

  const { data, loading, error } = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`,
  );

  return (
    <DataContext.Provider
      value={{ data, loading, error, inicio, final, setInicio, setFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};
