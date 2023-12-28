import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Login = () => {

    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    
const handleSubmit=(e)=>{
    e.preventDefault();
    
    axios.post('http://localhost:3000/login',{email,password}) 
    .then(result=>{ console.log("login success")
         Navigate('/home');   
        
    })
    .catch(err=>{console.log(err)})
    
    
    }

    return (
        <div>
            
    
      <h1>Registration</h1>
     <form onSubmit={handleSubmit} >
 
  
    <label htmlFor="lname">Email:</label>
    <br />
    <input type="text"  name="lname" onChange={(e)=>setEmail(e.target.value)}  />
    <br />
    <label htmlFor="lname">Password:</label>
    <br />
    <input type="text"  name="password"  onChange={(e)=>{setPassword(e.target.value)}}  />
    <br />
 
    <button type="submit">submit</button>
  </form>
        </div>
    );
};

export default Login;