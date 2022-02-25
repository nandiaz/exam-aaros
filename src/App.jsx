import "./App.css";

//import { CardContent } from "./Components/CardContent/CardContent";
import ContentWho from "./Components/Category/QuienesSomos/ContentWho";
//import { Header } from "./Components/NavBar/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Contact from "./Components/Category/Contacto/Contact";
import "bootstrap";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/quienessomos" element={<ContentWho />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
