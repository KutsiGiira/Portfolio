import React from "react";
import {useState, useEffect }from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp(){
    const navigate = useNavigate();
        const [err, setErr] = useState({});
        const [data, setdata] = useState({
            username: '',
            password: '',
            email: ''
      });
    
        function handleChange(e) {
        const { name, value } = e.target;
        setdata((prev) => ({ ...prev, [name]: value }));
        setErr((prev => ({ ...prev, [name]: '' })));
      }
    
        function Check(e) {
         e.preventDefault();
         const newerror = {};
            if(!data.username.trim()){
                newerror.username = "! Username can't be empty"
            }
            if(!data.password.trim()){
                newerror.password = "! please enter password"
            }
            if(!data.email.trim()){
                newerror.email = "! please enter email"
            }
                setErr(newerror);
                if (Object.keys(newerror).length === 0) {
                    fetch('http://localhost:8080/register', {method: "POST",  credentials: "include", headers :{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(d => {setdata(d), navigate("/")})
                .catch(err => console.error(err))
        }
    }
    return(
        
    <div className="bg-purple-100 w-screen h-screen flex items-center justify-center ">
        <form className=" bg-white-800 w-200 h-120 flex  flex-row shadow-2xl rounded-2xl" onSubmit={Check}>
            <section className="bg-white w-[60%] h-full rounded-tl-2xl rounded-bl-2xl flex justify-center items-center text-purple-700 flex-col">
                <h1 className="text-4xl mb-5 text-center">Create Account for <br /> Your Locked List</h1>
                <input type="text" name='username' value={data.username} onChange={handleChange} className="border-purple border-1 w-[60%] rounded-md px-2 py-1 mt-4 mb-2" placeholder="Username"/>
                <p className="text-center text-red-600 mb-2">{err.username} </p>
                <input type="password" name='password' value={data.password} onChange={handleChange} className="border-purple border-1 w-[60%] rounded-md px-2 py-1 mb-2" placeholder="Password"/>
                <p className="text-center text-red-600 mb-2">{err.password}</p>
                <input type="email" name='email' value={data.email} onChange={handleChange} className="border-purple border-1 w-[60%] rounded-md px-2 py-1 mb-2" placeholder="Email"/>
                <p className="text-center text-red-600 mb-2">{err.email}</p>
                <Link to="/"><span className="text-1xl mt-2 mb-5 hover:underline">Already have an account ?</span></Link>
                <button className="border-white bg-purple-700 text-white border-1 p-1 w-30 mt-3 rounded-xl hover:bg-white hover:border-purple-700 hover:border-1 hover:text-purple-700 hover:cursor-pointer" type="submit">Sign Up</button>
            </section>
            <section className="bg-purple-700 w-[40%] h-full rounded-tr-2xl rounded-br-2xl flex justify-center items-center text-white flex-col gap-5">
                <h1 className="text-4xl">Create Account</h1>
                <p className="text-center">Not you first time here ? <br /> Login to get access to you locked list</p>
                <Link to="/"><button className="border-white border-1 p-1 w-40 rounded-xl hover:bg-white hover:border-purple-700 hover:border-1 hover:text-purple-700 hover:cursor-pointer">Login</button></Link>
                </section>
    </form>
    </div>
    )
}
export default SignUp;