import React, { useState } from "react";
import "./Aside.css"
import Dashboard from "../assets/Pages/Dashboard";
import Teacher from "../assets/Pages/Teacher";
import Student from "../assets/Pages/Student";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function SideBar(){
    const Arr = ["DashBoard" , "Students", "Teacher"];
    const [Activity , SetActivity] = useState(0);
    const Page = () => {
        switch (Activity) {
          case 0:
            return <Dashboard />;
          case 1:
            return <Student />;
          case 2:
            return <Teacher />;
          default:
            return <Dashboard />;
        }
      };
    return(
        <main>
        <div className="bar">
            <div className="top">
                <span>pic</span><br>
                </br><span>School Name</span>
            </div>
            <hr />
            <div className="content">
                <ul>
                    {Arr.map((e , index) => (<li key={index} className={Activity === index ? "active" : "notActive"} onClick={() =>{SetActivity(index); }}>{e}</li>))}
                </ul>
            </div>
        </div>
        <div className="page">
            {Page()}
        </div>
        </main>
    );
}
export default SideBar;