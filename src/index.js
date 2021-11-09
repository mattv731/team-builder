import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const personList = [
  {personName: 'Johnny Cash', personFood: 'cookies'},
  {personName: 'Dwayne Johnson', personFood: 'brownies'},
  {personName: 'Abba Dabba', personFood: 'Roman'},
]

function SimpleForm() {
  const [formValues, setFormValues] = useState({personName: "", personFood: ""})
  const [people, setPeople] = useState(personList)

  const submit = (evt) => {
    evt.preventDefault();
    const newPerson = {
      personName: formValues.personName.trim(),
      personFood: formValues.personFood.trim()
    }
    setPeople(people.concat(newPerson));
  }

  const change = (evt) => {
    const {name, value} = evt.target;
    setFormValues({...formValues, [name]: value})

  }

  return (
    <div className="container">
      <h1>Team Builder</h1>
      {personList.map((person, idx) => (
        <div key={idx}>
          {person.personName}'s favorite food is {person.personFood}.
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
        value={formValues.personFood}
        name="personFood"
        type="text"
        onChange={change}
        placeholder="Enter your favorite food"
        />
        <input type="submit" value="Add a person" />
      </form>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <SimpleForm />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
