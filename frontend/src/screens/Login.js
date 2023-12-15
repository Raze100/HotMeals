import React , {useState} from 'react'
import { Link , useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import register from '../../src/register.png'
import image from '../../src/logo.jpeg'
import LoginCSS from '../screens/LoginCSS.css'
export default function Login() {
  const [credentials, setcredentials] = useState({ email:"", password:""})

  let navigate = useNavigate()
    const handleSubmit= async(e)=>{
    e.preventDefault();
    console.log(JSON.stringify({email: credentials.email , password:credentials.password }))
    const response = await fetch("http://localhost:5000/api/loginuser",{
        method:"POST",
    headers :{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({email: credentials.email , password:credentials.password })
    });

    const json =await response.json()
    console.log(json);
    if(!json.success){
        alert("Enter Valid Credentials")
    } 
    if(json.success) {
        localStorage.setItem("userEmail",credentials.email);
        localStorage.setItem("authToken",json.authToken);    
        console.log(localStorage.getItem("authToken"))
        navigate("/");
    }   

    
}
    

    const onChange =(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
    
    // <div className='d-flex flex-column min-vh-100' style={{ backgroundImage:{image} }} >
    <>
    <div className='login-bg'>
     <><Navbar/></>
     
        <div className='login-container' >
            <form  onSubmit={handleSubmit}>
            <div className='mt-5'>
                <span className="fs-1 mx-3">Login </span>
                <img className='image' src={register} width={100} height={100}></img>
            </div>  

                <>
                <div className="mb-5 mt-5">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name= 'email' value ={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                </>
                <>
                <div className="mb-5">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name= 'password' value ={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
                </div>
                </>
                
                <button type="submit" className=" m-1 btn btn-primary">Submit</button>
                <Link to="/createuser" className='m-4 btn btn-danger'>I am a New User</Link>
            </form>

        </div>
     
     
        <><Footer/></>
        </div>
        </>
    // </div>
  )
}
