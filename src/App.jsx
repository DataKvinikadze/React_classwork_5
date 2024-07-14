import React, { useState } from "react";

const App = () =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const nameOnChange = (event)=>{
    const usernameNewValue = event.target.value;
    setUsername(usernameNewValue)
  }

  const passwordOnChange = (event) =>{
    const passwordNewValue = event.target.value;
    setPassword(passwordNewValue)
  }

  return(
    <>
      <h1>Header</h1>
      <input onChange={(event)=>{
        nameOnChange(event)
      }} type="text" placeholder="Username" />
      <input onChange={(event)=>{
        passwordOnChange(event)
      }} type="password" placeholder="Password"/>
      <p>Your Username: {username}</p>
      <p>Your Password: {password}</p>
    </>
  )



}
export default App;