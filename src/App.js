import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Contact from "./components/contact";
import Gallery from "./components/gallery";
import Main from "./components/main";
import Products from "./components/products";


function App() {
  return (
    <Router>
      <Routes>
        {/* Encontré el error: usa element como props de Route y el componente se llama con una etiqueta*/}
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
