import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { CountriesList } from "./components/CountriesList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList />} />
      </Routes>
    </>
  );
}

export default App;
