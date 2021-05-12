import React, { useReducer, useState } from 'react';
import './App.css';

//source: https://www.digitalocean.com/community/tutorials/how-to-build-forms-in-react
const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return(
      <div className="wrapper">
        <h1>Availity Registration</h1>
        {submitting &&
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
                <li key={name}><strong>{name}</strong>:{value.toString()}</li>
            ))}
          </ul>
        </div>
        }
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>First Name</p>
              <input name="first_name" onChange={handleChange} required={true}/>
            </label>
            <label>
              <p>Last Name</p>
              <input name="last_name" onChange={handleChange} required={true}/>
            </label>
            <label>
              <p>NPI Number</p>
              <input name="npi_number" onChange={handleChange} required={true}/>
            </label>
            <label>
              <p>Business Address</p>
              <input name="address" onChange={handleChange} required={true}/>
            </label>
            <label>
              <p>Telephone Number</p>
              <input name="telephone" onChange={handleChange} required={true} />
            </label>
            <label>
              <p>Email Address</p>
              <input name="email" onChange={handleChange} required={true} />
            </label>
          </fieldset>

          <button type="submit">Submit</button>
        </form>
      </div>
  )
}

export default App;