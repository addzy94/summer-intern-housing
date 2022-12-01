// Add code to create apartment and add to Mongo
import React from 'react';
import { useState } from 'react';

const Apartment = () => {

  const [city, setCity] = useState({ city: "h" })

  return (
    <div>

        <h1>Student Housing Application</h1>
        <h2>{ city.city }</h2>

        <label>
            City:
        </label>

        <input type="text" 
               name="city"
               value={city.city}
               onChange={ setCity } />
    </div>
  )
}

export default Apartment;