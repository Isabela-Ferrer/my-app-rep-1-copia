import React from 'react';
import image from "./images/image.jpg"

function Body() {
  return (
    <div className="container my-3 bg-white col-8">
      <div className="row w-100 mx-auto row-cols-lg-2 row-cols-1">
        <div className="col mt-5 mb-md-0 text-start mx-auto">
          <h1 className="text-primary display-3 mb-2">Teaching reading and writing skills through discussions</h1>
          </div>
        <div className="col text-start mt-5">
          <p style={{lineHeight: "30px"}}>
          Use this platform to plan class activities that involve interactions between students and the tutor/teacher. To do so, you need the following information:</p>
          <ul style={{lineHeight: "30px"}}>
            <li>The desired duration of the discussion.
            </li>
            <li>The age range of the students.</li>
            <li>The skill you want children to practice through this discussion.</li>
            <li>Difficulties students are currently having when it comes to using this skill. </li>
            <li>Short content you want to base the discussion on: <a href="https://kidshealth.org/es/kids/bodyarticles.html">informative texts </a>, <a href="https://cuentosparadormir.com/cuentos-cortos">short stories</a>, <a href="https://arbolabc.com/ciencias-tecnologia">science and technology articles</a>, <a href="http://www.history-for-kids.com/myths-and-legends.html">myths and leyends</a>, or anything else!</li>
               </ul>
        </div>
      </div>
      <div class="row">
      <div className="col-8 mx-auto mx-3 mb-md-0 mt-5">
          <img src={image}  alt="classroom" className="img-fluid rounded mb-5" />
        </div>
        </div>
    </div>
  );
}

export default Body;
