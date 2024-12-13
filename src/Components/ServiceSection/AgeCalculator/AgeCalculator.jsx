import React, { useState } from 'react';
import './AgeCalculator.css'


const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState({ years: null, months: null, days: null });

  const calculateAge = (e) => {
    e.preventDefault();
    if (!birthDate) {
      alert('Please select a birth date');
      return;
    }

    const today = new Date();
    const birth = new Date(birthDate);

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    // Adjust months and years if needed
    if (days < 0) {
      months--;
      const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += previousMonth.getDate(); // Add days of the previous month
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    < >
    <div className="age-calculator">
      <h2>Age Calculator</h2>
      <form onSubmit={calculateAge} className="form-container">
        <label htmlFor="birthDate">Enter your birth date:</label>
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <button type="submit">Calculate Age</button>
      </form>
      {age.years !== null && (
        <div className="result-container">
          <h3>Your Age:</h3>
          <p>{age.years} years, {age.months} months, and {age.days} days</p>
        </div>
      )}
    </div>
    </>
  );
};

export default AgeCalculator;
