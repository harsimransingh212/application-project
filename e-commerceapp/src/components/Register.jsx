import React from 'react';
import{useState} from'react'
function Register(props) {
    const[formdata,setformdata]=useState(null);
    const handlechange=(e)=>
        {
            let{name,value}=e.target;
            setformdata((prev)=>
            {
                return{...prev,[name]:value}
            })
        }
  const submitForm=async(e)=>{
         e.preventDefault()
         console.log(formdata)
         const response=await fetch("http://localhost:7000/registeruser/registration",{method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(formdata)})
         const registeruser=await response.json()
         localStorage.setItem("todouser",JSON.stringify(registeruser))
        }
    return (
        <form>
            <div className='mb-3'>
                <label className="form-label">Name</label>
                <input type="text" name='name' className='form-control' onChange={handlechange} />
            </div>
            <div className='mb-3'>
                <label className="form-label">Email</label>
                <input type="email" name='email' className='form-control' onChange={handlechange} />
            </div>
            <div className='mb-3'>
                <label className="form-label">Password</label>
                <input type="password" name='password' className='form-control' onChange={handlechange} />
            </div>
            <button className='btn btn-primary' onClick={submitForm}>Register</button>
        </form>
    );
}
export default Register;