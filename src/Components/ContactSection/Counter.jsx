import React from 'react'
import { useState} from 'react'


const CounterUseState = () => {


  const [set, setState] = useState(0);


  const Incre = ()=>{setState(set + 1)}
  const Decre = ()=>{setState(set - 1)}
  const Clear = ()=>{setState(0)}
   
  return (
<><hr />
    <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>useState Hook Example : Increment, Decrement & Reset Functionality</h1>
<h2>count : {set}</h2>
<button style={{padding:'10px', margin:'3px', }} onClick={Incre}>Increment</button>
<button  style={{padding:'10px', margin:'3px'}} onClick={Decre}>Decrement</button>
<button  style={{padding:'10px', margin:'3px'}} onClick={Clear}>All Clear</button>
    </div>
  </>
  )
}


export default CounterUseState;