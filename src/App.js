import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Contact from "./components/contact";
import Gallery from "./components/gallery";
import Main from "./components/main";
import Products from "./components/products";
import Login from "./components/Login";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<div>Esta es una ruta</div>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
