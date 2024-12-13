import React, { useState, useEffect } from "react";
import './Section3.css'

function TimePrinting() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();
      
      // Format the time as "hours : minutes : seconds"
      const formattedTime = `${hours} hours : ${minutes} minutes : ${seconds} seconds`;
      setTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="parent-section3">
      <div className="section3-div1">
        <h2>Displaying current time</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          nulla qui enim officia, incidunt ipsam facilis corporis id laborum
          ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          porro.
        </p>
      </div>

      <div className="section3-div2">
        <h1 className="section3-time">{time}</h1>
      </div>
    </div>
  );
}

export default TimePrinting;
