// Dependences
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Styles
import "./globals.css";
// Pages
import Home from "./assets/pages/Home/Home.jsx";
import Catalog from "./assets/pages/Catalog/Catalog.jsx";
import About from "./assets/pages/About/About.jsx";
// Components
import Sidebar from "./assets/components/Sidebar/Sidebar.jsx";
import Nav from "./assets/components/Navbar/Nav.jsx";
const App = () => {
  return (
    <Router>
      <header>
        <Nav />
      </header>
      <main>
        <Sidebar />
        <div className="router">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default App;
