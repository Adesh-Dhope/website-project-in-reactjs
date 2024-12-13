import React, { useState } from "react";
import "./PasswordGenerator.css";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);

  const generatePassword = () => {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  };

  const ClearPassword = () =>{
    setPassword('')
  }

  return (
    <div className="password-generator-container">
      <h1>Random Password Generator</h1>

      <div className="length-controls">
           <label>Length: {length}</label>
            <input type="range" min="8" max="20" value={length}  className="length-slider"
                  onChange={(e) => setLength(e.target.value)}  />
      </div>

       <div >
           <input type="text" value={password} placeholder="Password will be here"/><br />
           <button onClick={generatePassword} >Generate Password </button>
           <button onClick={ClearPassword}  className="pass-btn">Clear Password</button><br />
       </div>
      
      

    </div>
  );
};

export default PasswordGenerator;