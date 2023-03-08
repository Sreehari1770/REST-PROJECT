import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState ,useEffect} from 'react';
function Update() {
  const[id,setid]=useState('');
  const[name,setname]=useState('');
  const[age,setage]=useState('');
  const[country,setcountry]=useState('');
  const[clubName,setclubName]=useState('');
  const[playernumber,setplayernumber]=useState('');
  const[position,setposition]=useState('');
  const[myData,setMyData]=useState([]);
  const[isError,setIsError]=useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8080/football")
      .then((response)=>{
          console.log(response.data)
          setMyData(response.data)
      })
      .catch((error)=> setIsError(error.message));
  }, []);

  async function update(event){
    const length=Object.keys(myData).length;
    event.preventDefault();
    let f=0;
    for(let i=0;i<length;i++){
      if(Number(id)===myData[i].id){
        f=1;
        try{
          await axios.put("http://localhost:8080/football",
          {
            id:id,
            name:name,
            age:age,
            country:country,
            clubName:clubName,
            playernumber:playernumber,
            position:position
          });
          alert("Updated SuccessFully");
          setid("");
          setname("");
          setage("");
          setcountry("");
          setclubName("");
          setplayernumber("");
          setposition("");
        }
        catch (err) {
          alert("update Failed");
        }
      }
    }
    if(f===0){
      alert('User Registation Failed');
    }
  }
    return ( 
        <> 
    <center>
    <div className='con'>
    <h2>Update Player Details</h2>
    <form >
      <div className='input-div'>
        <label htmlFor="name">Name:</label><br/>
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
      <button type="submit" onClick={update}>UPDATE</button>
    </form><br/>
    <Link to='/'>
                <button type="submit"  style={{padding:'5px'}} >Back</button>
    </Link>
    </div>
    </center>
    </>
     );
}

export default Update;