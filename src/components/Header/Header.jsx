import React, { useState } from 'react';
import './Header.css';
import logousalo from '../../assets/logo.png';

const Header = ({ setBusqueda, setCategoriaSeleccionada }) => { // Se recibe setCategoriaSeleccionada
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleCategoryMenu = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  // Función para seleccionar una categoría
  const seleccionarCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria); // Actualiza la categoría seleccionada
    setIsCategoryOpen(false); // Cierra el menú después de seleccionar
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-logo">
          <img src={logousalo} alt="Logo" />
          <h1><a href="/" className="nombreUsalo">USALO</a></h1>
        </div>
        <nav className="header-nav">
          <ul>
            <li>
              <button className="hamburger-btn" onClick={toggleCategoryMenu}>
                {isCategoryOpen ? '✖' : '☰'}
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Barra de búsqueda */}
      <div className="search-form">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Buscar productos por nombre..." 
          onChange={(e) => setBusqueda(e.target.value)} // Actualiza el estado en tiempo real
        />
      </div>

      {isCategoryOpen && (
        <div className="category-menu">
          <p onClick={() => seleccionarCategoria("")}>Todos</p>
          <p onClick={() => seleccionarCategoria("Perfumes")}>Perfumes</p>
          <p onClick={() => seleccionarCategoria("Accesorios")}>Accesorios</p>
          <p onClick={() => seleccionarCategoria("Calzado")}>Calzado</p>
          <p onClick={() => seleccionarCategoria("Hogar")}>Hogar</p>
          <p onClick={() => seleccionarCategoria("Higiene")}>Higiene</p>
        </div>
      )}
    </header>
  );
};

export default Header;
  