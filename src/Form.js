import React from 'react';


function TeacherForm() {
    const [formData, setFormData] = React.useState({
        apikey: "",  
        age: '',
        goal: '',
        context: '',
        skill: "",
        duration: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    console.log(formData)


    const [lessonPlan, setLessonPlan] = React.useState("")
   
    const [formSubmitted, setFormSubmitted] = React.useState(false)
    const APIBody = {
        model: "gpt-3.5-turbo", 
        messages: [{"role": "system", "content":"You are a professional in progressive learning"},
        {"role": "user", "content": `Plan a class for an elementary school teacher. 
        She has to teach a class of ${formData.age}-year-old students how to read. 
        The duration of the class is ${formData.duration} minutes, and its aim is to help students 
        ${formData.goal} due to their difficulties in ${formData.skill}.
        You should plan a lesson based on the following context:
        "${formData.context}"
        Generate a detailed outline for the class, including discussion topics, time stamps, team activities 
        and any necessary resources.`}],
        temperature: 0.5,
        max_tokens: 1000,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0
    }


    async function handleSubmit(event) {
        event.preventDefault();
        try {
          const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + formData.apikey,
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
          setLessonPlan("ERROR: There has been an error in your request. Most likely, this has to do with your API key.")
        }
      }

  return (
    <div className="text-start p-5 col-8 mx-auto bg-white">
      <h2>Let's plan!</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group p-4">
          <label htmlFor="goal">Open AI API Key:</label>
          <input
            type="password"
            id="apikey"
            name="apikey"
            value={formData.apikey}
            onChange={handleChange}
            className="form-control"
            placeholder=''
          /> </div>
      <div className="form-group p-4">
          <label htmlFor="goal">Duration (minutes):</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="form-control"
            placeholder='eg. 30'
          />
        </div><div className="form-group p-4">
          <label htmlFor="age">Age range:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="form-control"
            placeholder='eg. 5-6'
          />
        </div>
        <div className="form-group p-4">
          <label htmlFor="goal">Goal of the discussion/skill being taught:</label>
          <input
            type="text"
            id="goal"
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            className="form-control"
            placeholder='eg. Learning how to write and identify vowels'
          />
        </div>
        <div className="form-group p-4">
          <label htmlFor="goal">Difficulties:</label>
          <input
            type="text"
            id="skill"
            name="skill"
            value={formData.skill}
            onChange={handleChange}
            className="form-control"
            placeholder='ej. Confusion between the a and o'
          />
        </div>
        <div className="form-group p-4">
          <label htmlFor="context">Context for the discussion:</label>
          <textarea
            id="context"
            name="context"
            value={formData.context}
            onChange={handleChange}
            className="form-control"
            placeholder='ej. A galaxy is an immense astronomical structure that brings together a large number of stars, planetary systems, gas, cosmic dust and other celestial objects that are united by the force of gravity. Galaxies are the fundamental components of the universe and represent a vast star system in which countless stars and planetary systems are found.

            These galactic formations range in size from small dwarf galaxies with only a few billion stars, to gigantic elliptical or spiral galaxies that can host hundreds of billions or even trillions of stars. Galaxies also have various shapes, such as spirals, ellipticals, irregular or lenticular, and this diversity is related to their history of formation and evolution.
           
            Within a galaxy, stars can be grouped into defined structures, such as spiral arms in the case of spiral galaxies, or distributed more uniformly, as in elliptical galaxies. In addition to stars, intergalactic space contains interstellar gas and cosmic dust, which are crucial materials for the formation of new stars.
           
            Our own galaxy, the Milky Way, is a spiral galaxy that contains our solar system. The Milky Way extends a diameter of approximately 100,000 light years and is made up of several spiral arms surrounding a central core.
           
            In addition to the Milky Way, the universe is home to countless other galaxies, some of which are visible from Earth. The Andromeda galaxy (M31) is one of the closest galaxies to the Milky Way, while the Triangle galaxy (M33) is another example of a galaxy that we can observe in the night sky.
           
            Galaxies do not usually exist in isolation; They tend to group together in galaxy clusters, such as the Virgo Cluster or the Coma Cluster, forming large-scale structures.
           
            The study of galaxies plays a crucial role in our understanding of the universe, providing us with information about its composition, evolution, star formation and large-scale dynamics. Despite advances in astronomy, there are still many mysteries to discover about galaxies, such as the nature of dark matter and dark energy, which seem to influence their evolution and the expansion of the universe. Galaxies are witnesses to the immensity of the cosmos and offer us a fascinating vision of space and time.'
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      {!formSubmitted && <p className="subtle p-5">Only hit sumbit once! The response may take a couple seconds to appear.</p>}
      </form>
      
      {formSubmitted && <h1 className="my-5- p-5 text-primary">Planned structure: </h1>}
        <p className="px-5">{lessonPlan}</p>

    </div>
  );
}

export default TeacherForm;
