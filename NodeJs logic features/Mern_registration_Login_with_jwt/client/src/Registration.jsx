import  { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';


const registration = () => {

const [name,setName]=useState();
const [email,setEmail]=useState();
const [password,setPassword]=useState();

const handleSubmit=(e)=>{
e.preventDefault();

axios.post('http://localhost:3000/registration',{name,email,password}) 
.then(result=>{ console.log(result)
     Navigate('/login');   
    
})
.catch(err=>console.log(err))


}




    return (
        <div>
        <h1>Registration</h1>
     <form onSubmit={handleSubmit} >
    <label htmlFor="fname">First name:</label>
    <br />
    <input type="text" id="fname" name="fname" onChange={(e)=>setName(e.target.value)}  />
    <br />
    <label htmlFor="lname">Email:</label>
    <br />
    <input type="text"  name="lname" onChange={(e)=>setEmail(e.target.value)}  />
    <br />
    <label htmlFor="lname">Password:</label>
    <br />
    <input type="text"  name="password"  onChange={(e)=>{setPassword(e.target.value)}}  />
    <br />
    {/* <Link to="/login">Registration</Link> */}
    <button type="submit">submit</button>
  </form>

        </div>
    );
};

export default registration;