import "./Student.css"
import AddStudent from "../Add/StudentAdd";
import { useEffect, useState } from "react";
function Student(){
    const [Sadd, Sclose] = useState("none");
    function Close(){
        Sclose("none")
    }
    function Open(){
        Sclose("block")
    }
    return(
        <main class="studentPage">
            <AddStudent style={{display : Sadd}} onClose={Close}/>
            <header className="topSection">
                <button id="butn" onClick={Open}>Add new Student</button>
            </header>
            <body className="bodySection">
            <table border={2} className="table">
                <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Address</th>
                    <th>Phone number</th>
                    <th>Class</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="tbody">Haytam</td>
                    <td className="tbody">Black</td>
                    <td className="tbody">Agadir</td>
                    <td className="tbody">0530506043</td>
                    <td className="tbody">1bac</td>
                </tr>
                </tbody>
            </table>
            </body>
        </main>

    )
}
export default Student;