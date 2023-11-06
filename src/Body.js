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
          <h1 className="text-primary mb-4">Learning how to read and write through discussions</h1>
          <p style={{lineHeight: "30px"}}>
          Use this platform to plan class activities that involve interactions between students and the tutor/teacher. To do so, you need the following information:</p>
          <ul style={{lineHeight: "30px"}}>
            <li>The desired duration of the discussion.
            </li>
            <li>The age range of the students.</li>
            <li>The skill you want children to practice through this discussion.</li>
            <li>Difficulties students are currently having when it comes to using this skill. </li>
            <li>Short content you want to base the discussion on: 
                <ul>
                    <li><a href="https://kidshealth.org/es/kids/bodyarticles.html">Informative texts </a></li>
                    <li><a href="https://cuentosparadormir.com/cuentos-cortos">Short stories</a></li>
                    <li><a href="https://arbolabc.com/ciencias-tecnologia">Science and technology articles</a></li>
                    <li><a href="http://www.history-for-kids.com/myths-and-legends.html">Myths and leyends</a></li>
                    <li>Anything else </li>
                </ul>
                
            </li>
          </ul>
        
        </div>
      </div>
    </div>
  );
}

export default Body;
