import React, { useState } from 'react'
  
  function SimpleForm(props) {
    const [formValues, setFormValues] = useState({personName: "", personFood: ""})
    const [people, setPeople] = useState(props.people)
  
    const submit = (evt) => {
      evt.preventDefault();
      const newPerson = {
        personName: formValues.personName.trim(),
        email: formValues.email.trim(),
        job: formValues.job.trim()
      }
      setPeople(people.concat(newPerson));
      setFormValues({personName: "", email: "", job: ""})
    }
  
    const change = (evt) => {
      const {name, value} = evt.target;
      setFormValues({...formValues, [name]: value})
  
    }
  
    return (
      <div className="container">
        <h1>Team Builder</h1>
        {people.map((person, idx) => (
          <div key={idx}>
            {person.personName}'s email is {person.email} they are a {person.job}.
          </div>
        ))}
        <form onSubmit={submit}>
          <input 
          value={formValues.personName} 
          name="personName" 
          type="text" 
          onChange={change}
          placeholder="Enter your name"
          />
          <input
          value={formValues.email}
          name="email"
          type="text"
          onChange={change}
          placeholder="Enter your email"
          />
          <input
          value={formValues.job}
          name="job"
          type="text"
          onChange={change}
          placeholder="Enter your occupation"
          />
          <input type="submit" value="Add a person" />
        </form>
      </div>
    )
  }
export default SimpleForm;