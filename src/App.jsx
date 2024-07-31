
import './App.css';
import React, {useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const friendlyMessage =`Hello ${firstName} ${middleName} ${lastName} Welcome to the site`;


  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleMiddleNameChange = (e) => setMiddleName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);

  return (
    <>
    <div class="app"></div>
    <h1>{friendlyMessage}</h1>
    <form>
      <input type="text" placeholder="First Name" value={firstName} onChange={handleFirstNameChange}/>
      <input type="text" placeholder='Middle Name' value={middleName} onChange={handleMiddleNameChange}/>
      <input type="text" placeholder='Last Name' value={lastName} onChange={handleLastNameChange}/>
    </form>
    App
    </>
  );
}

export default App;
