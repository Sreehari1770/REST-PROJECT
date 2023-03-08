import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Getdetails from './Get';
function Delete() {
    const[id,setId]=useState();
    const[error,setError]=useState('');
    function del(){
        axios
            .delete('http://localhost:8080/football?id='+id)
            .then((response)=>{
                console.log(response.data);
            })
            .catch((error)=>setError(error.message));
        alert("User Deleted");
    }
    return ( 
        <>
        <center>
        <div className='con'>
            <h2>Delete Player Details</h2>
            <div className='input-div'>
                <label htmlFor="sid">Id:</label>
                <input type="number" onChange={(e)=>setId(e.target.value)} value={id} />
            </div>
            <button type="submit" onClick={del}>Delete Player</button>
            <br/><br/>
            <Link to='/'>
                <button type="submit"  style={{padding:'5px'}} >Back</button>
    </Link>
        </div>
        <h2>{error}</h2>
        {/* <div className='Getdetails'>
            <Getdetails/>
        </div> */}
        </center>
        </>
     );
}

export default Delete;