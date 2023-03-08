import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

function Login () {
  const[id,setid]=useState('');
  const[name,setname]=useState('');
  const[age,setage]=useState('');
  const[country,setcountry]=useState('');
  const[clubName,setclubName]=useState('');
  const[playernumber,setplayernumber]=useState('');
  const[position,setposition]=useState('');

  async function save(event){
    event.preventDefault();
    try{
      await axios.post("http://localhost:8080/football",
      {
        id:id,
        name:name,
        age:age,
        country:country,
        clubName:clubName,
        playernumber:playernumber,
        position:position
      });
      alert("Added SuccessFully");
      setid("");
      setname("");
      setage("");
      setcountry("");
      setclubName("");
      setplayernumber("");
      setposition("");
    }
    catch(err){
      alert("Failed");
    }
  }
  
  return (
    <>
    

    <center>
    <div className='con'>
    <h2>Enter Player Details</h2>
    <form >
      <div className='input-div'>
        <label htmlFor="name">Name:</label>
        <input type="text" value={name} onChange={(event)=>setname(event.target.value)} />
      </div>
      <div className='input-div'>
        <label htmlFor="id">Id:</label>
        <input type="number" value={id} onChange={(event)=>setid(event.target.value)} />
      </div>
      <div className='input-div'>
        <label htmlFor="club">ClubName:</label>
        <input type="text" value={clubName} onChange={(event)=>setclubName(event.target.value)} />
      </div>
      <div className='input-div'>
        <label htmlFor="age">Age:</label>
        <input type="number" value={age} onChange={(event)=>setage(event.target.value)}   />
      </div>
      <div className='input-div'>
        <label htmlFor="country">Country:</label>
        <input type="text" value={country} onChange={(event)=>setcountry(event.target.value)}   />
      </div>
      <div className='input-div'>
        <label htmlFor="pos">PlayerPosition:</label>
        <input type="text" value={position} onChange={(event)=>setposition(event.target.value)}  />
      </div>
      <div className='input-div'>
        <label htmlFor="num">PlayerNumber:</label>
        <input type="number" value={playernumber} onChange={(event)=>setplayernumber(event.target.value)}  />
      </div>
      <button type="submit" onClick={save}>Submit</button>
    </form>
    </div>
    
    </center>
    </>
  );
};


export default Login;
