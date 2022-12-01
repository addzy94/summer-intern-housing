import React from 'react'
import { useState } from 'react';

const Profile = () => {

  const [name, setName] = useState({ name: "Raju"})
  const [email, setEmail] = useState({ email: "Raju@Raju.com"})

  return (
    <div>
        <img src="https://images.indianexpress.com/2021/05/ba-raju-death-.jpg" alt="Raju" style={{ width: "20em", height: "8em" }}/>
        <input type="text" value={ name.name } onChange={ setName } />
        <input type="text" value={ email.email } onChange={ setEmail } />
    </div>
  )
}

export default Profile;