import React, { useState } from 'react';
import './Section4.css'

const DataDisplay = () => {
const [data, SetData] = useState({name:'',email:'', number:'', age:'', message:''});
const [show, SetShow] = useState([])


  const HandleSubmit = (e)=>{
    e.preventDefault();
    SetShow([...show, data])
    SetData({name:'',email:'', number:'', age:'', message:''})
    alert("Form has been submitted Successfully")
  }

  const HandleChange = (a)=>{
const {name, value} = a.target;
SetData({...data,[name]:value})
  }
  return (
    <div className='parent-div'>
          <div className='section4-div1'>
            <h3>Fill all details & See data in next table </h3>
               <form onSubmit={HandleSubmit}> 
                  <input type="text" name='name' value={data.name} onChange={HandleChange} placeholder='Enter Name'  className='section4-form' required/><br />
                  <input type="email" name='email' value={data.email} onChange={HandleChange} placeholder='Enter Email' className='section4-form' required/><br />
                  <input type="text" name='number' value={data.number} onChange={HandleChange} placeholder='Enter Contact Info' className='section4-form' required/><br />
                  <input type="age" name='age' value={data.age} onChange={HandleChange} placeholder='Enter Age' className='section4-form' required /><br />
                  <textarea name="message" value={data.message} onChange={HandleChange} placeholder='Enter Message' className='section4-textarea' required></textarea><br />
                  <button type='submit' className='section4-button'>Submit</button>
               </form>
          </div>

          <div className='section4-div2'>
          <table border={1} className='section4-table'>
<thead>
  <tr>
    <th>Sr.No</th>
    <th>Name</th>
    <th>Email</th>
    <th>Contact No</th>
    <th>Age</th>
    <th>Message</th>
  </tr>
</thead>
<tbody>{show.map((content, srno)=>(
  <tr key={srno}>
    <td>{srno}</td>
    <td>{content.name}</td>
    <td>{content.email}</td>
    <td>{content.number}</td>
    <td>{content.age}</td>
    <td>{content.message}</td>
  </tr>
))}
  
</tbody>
 </table>
         </div>
    </div>
  )
}
export default DataDisplay;