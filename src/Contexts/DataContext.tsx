import React, { createContext, useState } from "react";
import useFetch from "../Hooks/useFetch";
import formatDate from "../Utils/formatDate";
import type { IVenda } from "../Types/Venda";

interface IDataContextType {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
}

const DataContext = createContext<IDataContextType | undefined>(undefined);

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
