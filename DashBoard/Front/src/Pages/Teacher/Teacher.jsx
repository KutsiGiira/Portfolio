import "./Teacher.css"
import AddTeacher from "../Add/AddTeacher";
import { useState } from "react";
function Teacher(){
    const [Top, Tset] = useState("none")
    function Shut(){
        Tset("none")
    }
    function Op(){
        Tset("block")
    }
    return(
        <main class="TeacherPage">
            <AddTeacher style={{display : Top}} onClose={Shut}/>
            <header className="topSection">
                <button id="bttn" onClick={Op}>Add new Teacher</button>
            </header>
            <body className="bodySection">
            <table border={2} className="table">
                <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Phone number</th>
                    <th>Subject</th>
                    <th>Class</th>
                    <th>Cin</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="tbody">Haytam</td>
                    <td className="tbody">Black</td>
                    <td className="tbody">Agadir</td>
                    <td className="tbody">0530506043</td>
                    <td className="tbody">1bac</td>
                    <td className="tbody">1bac</td>
                </tr>
                </tbody>
            </table>
            </body>
        </main>
    )
}
export default Teacher;