import "./App.css";
import Login from "./login/login";
import Accueil from "./page_accueil/accueil";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./components/dashboad";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/statistiques" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
