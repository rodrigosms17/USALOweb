import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./HomePage.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import productos from "../../productos/productos.jsx";

const HomePage = () => {
  const [busqueda, setBusqueda] = useState(""); 
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(""); 

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
    (categoriaSeleccionada === "" || producto.categoria === categoriaSeleccionada)
  );

  return (
    <div className="homepage">
      <Header setBusqueda={setBusqueda} setCategoriaSeleccionada={setCategoriaSeleccionada} />
      <main>
        <section className="productos">
          <div className="productos-lista">
            {productosFiltrados.map((producto) => (
              <div key={producto.id} className="producto">
                <Link to={`/detalles-producto/${producto.id}`}>
                  <img src={producto.imagen} alt={producto.nombre} />
                </Link>
                <h3>{producto.nombre}</h3>
                <p className="precio">S/. {producto.precio}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
