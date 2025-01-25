import React, { useState } from "react";
import "./Aside.css"
function SideBar(){
    const Arr = ["Home" , "Students", "Teachers"];
    const [Activity , SetActivity] = useState(0);
    return(
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
    );
}
export default SideBar;