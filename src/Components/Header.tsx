import { useDataContext } from "../Contexts/DataContext";

const Header = () => {
  const { data } = useDataContext();
  console.log(data);
  return <div>Header</div>;
};

export default Header;
