import { useLocation } from "react-router-dom";

export const CountryDetails = () => {
  const location = useLocation();
  return <>{location.state.name}</>;
};
