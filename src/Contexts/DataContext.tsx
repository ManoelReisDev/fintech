import React, { createContext } from "react";
import useFetch from "../Hooks/useFetch";

interface IDataContextType {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
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
  const { data, loading, error } = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas/`,
  );

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
