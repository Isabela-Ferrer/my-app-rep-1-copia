import React from 'react';
import image from "./images/image.jpg"

function Body() {
  return (
    <div className="container my-3 bg-white py-5 col-8">
      <div className="row">
      <div className="col-8 mx-auto mx-3 mb-md-0">
          <img src={image}  alt="classroom" className="img-fluid rounded" />
        </div>
        <div className="col-8 mt-5 mb-md-0 text-start mx-auto">
          <h1 className="text-primary mb-4">Aprendiendo a leer a través de discusiones</h1>
          <p style={{lineHeight: "30px"}}>
          Usa esta plataforma para planear actividades de clase que involucran interacciones entre los estudiantes y el tutor/profesor. Para hacerlo, necesitas la siguiente información:</p>
          <ul style={{lineHeight: "30px"}}>
            <li>La duración deseada de la discusión.
            </li>
            <li>El rango de edad de los estudiantes.</li>
            <li>La habilidad que quieres practicar a través de la discusión.</li>
            <li>Dificultades que están teniendo los estudiantes a la hora de practicar esta habilidad. </li>
            <li>Contenido corto en el cual quieres basar la discusión: 
                <ul>
                    <li><a href="https://kidshealth.org/es/kids/bodyarticles.html">Textos informativos</a></li>
                    <li><a href="https://cuentosparadormir.com/cuentos-cortos">Cuentos cortos</a></li>
                    <li><a href="https://arbolabc.com/ciencias-tecnologia">Articulos acerca de ciencia y tecnología </a></li>
                    <li><a href="https://www.mundoprimaria.com/lecturas-para-ninos-primaria/lecturas-cortas-y-rapidas">Leyendas, cuentos y fábulas </a></li>
                    <li>Cualquier otra cosa! </li>
                </ul>
                
            </li>
          </ul>
        
        </div>
      </div>
    </div>
  );
}

export default Body;
