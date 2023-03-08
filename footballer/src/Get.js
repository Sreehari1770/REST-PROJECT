import React, { useState,useEffect } from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import axios from "axios";
const Getdetails=()=> {
    const[myData,setMyData]=useState([]);
    const[isError,setIsError]=useState("");

    useEffect(()=>{
        axios
            .get("http://localhost:8080/football")
            .then((response)=>{
                console.log(response.data)
                setMyData(response.data)
            })
            .catch((error)=>setIsError(error.message));
    },[]);
    return ( 
        <>
       
        <center>
        {/* <div className='body'>
            <h1>Get Player Details</h1>
            <div>
                <label htmlFor="id">Id:</label>
                <input type="number" id="id"  />
            </div>
            <button type="submit">Get Player</button>
            <br/><br/>
        </div> */}
        <br/>
        <h2>Footballers Details</h2><br/>
        {isError!==""&&<h2>{isError}</h2>}
        <div className="grid">
            <table id="table" >
            <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
            <th>ClubName</th>
            <th>PlayerNumber</th>
            <th>Position</th>
            </tr>
            {myData.slice(0,8).map((post)=>{
                return(
                        <tr key={(post.id)}>
                            <td>{post.name}</td>
                            <td>{post.age}</td>
                            <td>{post.country}</td>
                            <td>{post.clubName}</td>
                            <td>{post.playernumber}</td>
                            <td>{post.position}</td>
                        </tr>
                 )
            })}
            </table>
        </div>
        <br/> <br/> 
        <Link to='/'>
            <button type="submit"  style={{padding:'5px'}} >Back</button>
</Link>
        </center>
        </>
     );
}

export default Getdetails;