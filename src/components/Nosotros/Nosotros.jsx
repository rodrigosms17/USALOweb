import React from "react";
import './Nosotros.css';
import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"

const Nosotros = () => {
    return (
      <div className="nosotros">
        <Header />
        <h2>Sobre Nosotros</h2>
        <p>El Colegio San Marcos es una institución educativa con más de 50 años de experiencia formando a estudiantes en un ambiente de excelencia académica y valores. Nos enfocamos en el desarrollo integral de nuestros alumnos, preparándolos para afrontar los desafíos del futuro.</p>
        <p>Nuestros valores fundamentales son el respeto, la responsabilidad y la solidaridad. Creemos en una educación de calidad que fomente la creatividad y el pensamiento crítico.</p>
        <h3>Misión</h3>
        <p>Brindar una educación integral, de calidad y accesible, formando a jóvenes capaces de contribuir positivamente a la sociedad.</p>
        <h3>Visión</h3>
        <p>Ser reconocidos como un referente educativo en el país, por nuestra innovación y el compromiso con el desarrollo de nuestros estudiantes.</p>
        <Footer />
      </div>
    );
  };
  
  export default Nosotros;