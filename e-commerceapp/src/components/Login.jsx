import React from 'react';
import { useState } from 'react';
function Login(props) {
    const[formdata,setformdata]=useState(null);
    const handlechange=(e)=>
        {
            let{name,value}=e.target;
            setformdata((prev)=>
            {
                return{...prev,[name]:value}
            })
        }

const submitForm=async(event)=>{
    event.preventDefault()
    console.log(formdata)
    const response=await fetch("http://localhost:7000/loginuser/login",{method:"POST",
       headers:{"Content-type":"application/json"},
       body:JSON.stringify(formdata)})
      const loginuser= await response.json()
      localStorage.setItem("todouser",JSON.stringify(loginuser))
}
    return (
        <div>
            <form>
             <div className='mb-3'>
                <label className="form-label">Email</label>
                <input type="email" name='email' className='form-control' onChange={handlechange} />
            </div>
            <div className='mb-3'>
                <label className="form-label">Password</label>
                <input type="password" name='password' className='form-control' onChange={handlechange} />
            </div>
            <button className='btn btn-primary' onClick={submitForm}>Login</button>
        </form>
        </div>
    );
}

export default Login;