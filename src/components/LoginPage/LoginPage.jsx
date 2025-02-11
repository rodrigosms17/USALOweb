import React from "react";
import { useNavigate } from "react-router-dom"; // Para manejar la navegación
import "./LoginPage.css";
import loginImage from "../../assets/LoginImage.png";

const LoginPage = () => {
  const navigate = useNavigate(); // Hook para la navegación

  return (
    <div className="login-container" style={{ backgroundImage: `url(${loginImage})` }}>
      <div className="login-box">
        <h2>USALO</h2>
        <form>
          <label>Usuario:</label>
          <input type="text" name="usuario" placeholder="Ingrese su usuario" />

          <label>Contraseña:</label>
          <input type="password" name="password" placeholder="Ingrese su contraseña" />

          <button type="submit">Ingresar</button>
        </form>
        <button className="back-button" onClick={() => navigate(-1)}>Regresar</button>
      </div>
    </div>
  );
};

export default LoginPage;
