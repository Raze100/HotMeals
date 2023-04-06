import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import register from '../../src/register.png'
export default function Signup() 
{

  
    const [credentials, setcredentials] = useState({name:"", email:"", password:"",geolocation:""})

  
    const handleSubmit= async(e)=>{
    e.preventDefault();
    console.log(JSON.stringify({name:credentials.name ,email: credentials.email , password:credentials.password , location:credentials.geolocation}))
    const response = await fetch("http://localhost:5000/api/createuser",{
        method:"POST",
    headers :{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({name:credentials.name ,email: credentials.email , password:credentials.password , location:credentials.geolocation})
    });

    const json =await response.json()
    console.log(json);
    if(!json.success){
        alert("Enter Valid Credentials")
    }    
}
    

    const onChange =(event)=>{
    
            setcredentials({...credentials,[event.target.name]:event.target.value})
        
    }
    const passwordcheck =(event)=>{
        if(credentials.password === credentials.confirmPassword)
        {
            setcredentials({...credentials,[event.target.password]:event.target.value})
        }
        else{
            console.log("Re enter correct password")
        }
    }

    return (
    
    <div className='d-flex flex-column min-vh-100'>
        <><div><Navbar/></div></>
        
        <div className='container'>
        
            <div className='mt-5'>
                <span className="fs-1">Register here</span>
                <img className='ms-4' src={register} width={100} height={100}></img>
            </div>
        
        <br/>
        <p className="text-[30px]">Create new account here</p>
                <form  onSubmit={handleSubmit}>
                        <div className="mb-3 mt-5">
                        <label htmlFor="name" className="form-label">Name*</label>
                        <input type="text" className="form-control" name= 'name' value ={credentials.name} onChange={onChange}/>
                        </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address*</label>
                        <input type="email" className="form-control" name= 'email' value ={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password*</label>
                        <input type="password" className="form-control" name= 'password' value ={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password*</label>
                        <input type="password" className="form-control" name= 'password' value ={credentials.confirmPassword} onChange={passwordcheck} id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address*</label>
                        <input type="text" className="form-control" name= 'geolocation' value ={credentials.geolocation} onChange={onChange} id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className=" m-3 btn btn-primary">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Aready a User</Link>
                </form>
                
        </div>
        
        <><div className='mt-auto'><Footer/></div></>
    </div>
    
    )
 }
