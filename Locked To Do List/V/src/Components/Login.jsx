import {useState, useEffect }from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const [form, setForm] = useState({
        username: '',
        password: ''
  });

    function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError((prev => ({ ...prev, [name]: '' })));

  }

    function Check(e) {
     e.preventDefault();
     const newerror = {};
        if(!form.username.trim() ){
            newerror.username = "! Username can't be empty"
        }
        if(!form.password.trim()){
            newerror.password = "! please enter password"
        }
      setError(newerror);
                if (Object.keys(newerror).length === 0) {
                    fetch('http://localhost:8080/login', {method: "POST", headers :{
                        "Content-Type": "application/json"
                    },
                      credentials: "include",
                    body: JSON.stringify(form)
                })
                    .then(res => {
                    if (res.status === 401) {
                        throw new Error("Unauthorized: Invalid username or password");
                    }
                    if (!res.ok) {
                        throw new Error("Something went wrong");
                    }
                    if(res.ok){
                        console.log("logged")
                    }
                    return res.json();
                    })
                .then(() => navigate("/todos"))
                .catch(err => setError({ general: err.message }));
        }
  }
    return(
        // bg-[#F8E7F6]
    <div className="bg-purple-100 w-screen h-screen flex items-center justify-center ">
        <form className=" bg-white-800 w-200 h-120 flex  flex-row shadow-2xl rounded-2xl" onSubmit={Check}>
            <section className="bg-purple-700 w-[40%] h-full rounded-tl-2xl rounded-bl-2xl flex justify-center items-center text-white flex-col gap-5">
                <h1 className="text-4xl">Welcome Back</h1>
                <p className="text-center">If you don't already <br />have an account please Sign up first</p>
                 <Link to="/signup"><button className="border-white border-1 p-1 w-40 rounded-xl hover:bg-white hover:border-purple-700 hover:border-1 hover:text-purple-700 hover:cursor-pointer">Sign Up</button></Link>
                </section>
            <section className="bg-white w-[60%] h-full rounded-tr-2xl rounded-br-2xl flex justify-center items-center text-purple-700 flex-col">
                <h1 className="text-4xl mb-5">Login to Your Lock List</h1>
                {error.general && (<p className="text-center text-red-600 mb-2">{error.general}</p>)}
                <input type="text" name='username' value={form.username} onChange={handleChange} className="border-purple border-1 w-[60%] rounded-md pl-2 pr-2 mt-4 mb-2" placeholder="Username"/>
                <p className="text-center text-red-600 mb-2">{error.username}</p>
                <input type="text" name='password' value={form.password} onChange={handleChange} className="border-purple border-1 w-[60%] rounded-md pl-2 pr-2 mb-2" placeholder="Password"/>
                <p className="text-center text-red-600 mb-2">{error.password}</p>
                <Link to="/signup"><span className="text-1xl mt-2 mb-5 hover:underline">Create Account ?</span></Link>
                <button className="border-white mt-2 bg-purple-700 text-white border-1 p-1 w-30 rounded-xl
                 hover:bg-sky-700 hover:bg-white hover:border-purple-700 hover:border-1 hover:text-purple-700 hover:cursor-pointer" type='submit'>Login</button>
            </section>
    </form>
    </div>
    )
}
export default Login;