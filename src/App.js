import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import DetallesProducto from './components/DetallesProducto/DetallesProducto.jsx';
import LoginPage from './components/LoginPage/LoginPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detalles-producto/:id" element={<DetallesProducto />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
