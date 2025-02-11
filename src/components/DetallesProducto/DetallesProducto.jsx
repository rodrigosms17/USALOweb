import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productos from '../../productos/productos';  
import './DetallesProducto.css';

const DetallesProducto = () => {
  const { id } = useParams();  
  const producto = productos.find(p => p.id === parseInt(id));  
  const navigate = useNavigate();

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="detalles-producto">
      <div className="info-container">
        <h2>{producto.nombre}</h2>
        <p className="categoria">Categoría: {producto.categoria}</p>
        <p className="precio">S/. {producto.precio}</p>
      </div>

      <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
      
      <a href={producto.link} className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        PEDIR POR WHATSAPP
      </a>

      <button onClick={() => navigate(-1)} className="boton-regresar">Regresar</button>
    </div>
  );
};

export default DetallesProducto;
