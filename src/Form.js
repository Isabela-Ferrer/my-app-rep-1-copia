import React, { useState } from 'react';
import { process } from './env'

function TeacherForm() {
    const [formData, setFormData] = React.useState({
        age: '',
        goal: '',
        context: '',
        skill: "",
        duration: ""
    });
    const [lessonPlan, setLessonPlan] = React.useState("")

    const [formSubmitted, setFormSubmitted] = React.useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    console.log(formData)

    const apiKey = process.env.OPENAI_API_KEY

    const APIBody = {
        model: "gpt-3.5-turbo", 
        messages: [{"role": "system", "content":"Eres un profesional en el aprendizaje progresivo"},
        {"role": "user", "content": `Planifica una clase para una maestra de escuela primaria. 
        Ella tiene que enseñarle a una clase de estudiantes de ${formData.age} años a leer. 
        La duración de la clase es de ${formData.duration} minutos, y tu objetivo principal es ayudar a los estudiantes a 
        ${formData.goal} dadas sus dificultades en ${formData.skill}.
        Debes planear una lección basada en discusiones y actividades centradas en el siguiente contexto:
        "${formData.context}"
        Por favor, genera un esquema detallado para la clase, que incluya temas de discusión, marcas de tiempo, actividades en equipo 
        y cualquier recurso necesario.`}],
        temperature: 0.5,
        max_tokens: 10,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0
    }

    /*
    async function handleSubmit(event) {
        event.preventDefault()
        await fetch("https://api.openai.com/v1/completions",
            {method : "POST",
                headers : {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apiKey,
                },
                body: JSON.stringify(APIBody)})
                .then((data)=> {return data.json();})
                .then(data=> {
                    console.log(data);
                    let response = data.choices[0].text.trim()
                    return response
                })
            
    }*/
    async function handleSubmit(event) {
        event.preventDefault();
        try {
          const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + apiKey,
            },
            body: JSON.stringify(APIBody),
          });
          const data = await response.json();
          console.log(data)
          const result = data.choices[0].message.content;
          setLessonPlan(result)
          setFormSubmitted(true)
          
        } catch (error) {
          console.error("Error:", error);
        }
      }

  return (
    <div className="text-start p-5 col-8 mx-auto bg-white">
      <h2>A planear!</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group p-4">
          <label htmlFor="goal">Duración (minutos):</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="form-control"
            placeholder='ej. 30'
          />
        </div><div className="form-group p-4">
          <label htmlFor="age">Edad de los Estudiantes:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="form-control"
            placeholder='ej. 5-6'
          />
        </div>
        <div className="form-group p-4">
          <label htmlFor="goal">Objetivo  de la discusión:</label>
          <input
            type="text"
            id="goal"
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            className="form-control"
            placeholder='ej. Aprender a escribir y diferenciar las vocales'
          />
        </div>
        <div className="form-group p-4">
          <label htmlFor="goal">Dificultades:</label>
          <input
            type="text"
            id="skill"
            name="skill"
            value={formData.skill}
            onChange={handleChange}
            className="form-control"
            placeholder='ej. Errores confunciendo la a y la o'
          />
        </div>
        <div className="form-group p-4">
          <label htmlFor="context">Texto de Referencia/Contexto:</label>
          <textarea
            id="context"
            name="context"
            value={formData.context}
            onChange={handleChange}
            className="form-control"
            placeholder='ej. Una galaxia es una inmensa estructura astronómica que reúne una gran cantidad de estrellas, sistemas planetarios, gas, polvo cósmico y otros objetos celestes que están unidos por la fuerza de la gravedad. Las galaxias son los componentes fundamentales del universo y representan un vasto sistema estelar en el que se encuentran innumerables astros y sistemas planetarios.

            Estas formaciones galácticas varían en tamaño, desde las pequeñas galaxias enanas con solo unas pocas miles de millones de estrellas, hasta las gigantescas galaxias elípticas o espirales que pueden albergar cientos de miles de millones o incluso billones de estrellas. Las galaxias también presentan diversas formas, como espirales, elípticas, irregulares o lenticulares, y esta diversidad se relaciona con su historia de formación y evolución.
            
            Dentro de una galaxia, las estrellas pueden agruparse en estructuras definidas, como los brazos espirales en el caso de las galaxias espirales, o distribuirse de manera más uniforme, como en las galaxias elípticas. Además de las estrellas, el espacio intergaláctico contiene gas interestelar y polvo cósmico, que son materiales cruciales para la formación de nuevas estrellas.
            
            Nuestra propia galaxia, la Vía Láctea, es una galaxia espiral que contiene nuestro sistema solar. La Vía Láctea se extiende por un diámetro de aproximadamente 100,000 años luz y se compone de varios brazos espirales que rodean un núcleo central.
            
            Además de la Vía Láctea, el universo alberga innumerables otras galaxias, algunas de las cuales son visibles desde la Tierra. La galaxia de Andrómeda (M31) es una de las galaxias más cercanas a la Vía Láctea, mientras que la galaxia del Triángulo (M33) es otro ejemplo de una galaxia que podemos observar en el cielo nocturno.
            
            Las galaxias no suelen existir de forma aislada; tienden a agruparse en cúmulos de galaxias, como el Cúmulo de Virgo o el Cúmulo de Coma, formando estructuras a gran escala.
            
            El estudio de las galaxias desempeña un papel crucial en nuestra comprensión del universo, ya que nos proporciona información sobre su composición, evolución, formación estelar y dinámica a gran escala. A pesar de los avances en la astronomía, aún existen muchos misterios por descubrir sobre las galaxias, como la naturaleza de la materia oscura y la energía oscura, que parecen influir en su evolución y en la expansión del universo. Las galaxias son testigos de la inmensidad del cosmos y nos ofrecen una visión fascinante del espacio y el tiempo.'
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      
      {formSubmitted && <h1 className="my-5- p-5 text-primary">La estructura de la clase: </h1>}
        <p className="px-5">{lessonPlan}</p>

    </div>
  );
}

export default TeacherForm;
