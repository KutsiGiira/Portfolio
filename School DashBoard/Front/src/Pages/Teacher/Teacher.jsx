import "./Teacher.css"
import AddTeacher from "../Add/AddTeacher";
import { useEffect, useState } from "react";
function Teacher(){
    const [Top, Tset] = useState("none")
    const [teacher, setTeacher] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/teachers")
        .then(response => {
            if(!response.ok){
                throw new Error("failed to fetch data")
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            setTeacher(data);
        })
        .catch(error => {
            console.error('Error:', error);
            setError(error.message);
        });
        }, []);
        const deleteTeacher = (id) => {
            const isConfirmed = window.confirm("Are you sure you want to delete this teacher?");
            if(isConfirmed){
                fetch(`http://localhost:8080/teachers/${id}`, {
                    method: "DELETE",
                  })
                  .then(response => {
                    if (response.ok) {
                      setTeacher(prevTeachers => prevTeachers.filter(teacher => teacher.id !== id));
                    } else {
                      console.error("Failed to delete teacher");
                    }
                  })
                  .catch(error => console.error("Error:", error));
                };
            }
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
            <table border={1} className="table">
                <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Phone number</th>
                    <th>Subject</th>
                    <th>Class</th>
                    <th>Cin</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {teacher.map(tea => (
                        <tr key={tea.id}>
                        <td className="tbody">{tea.first_Name}</td>
                        <td className="tbody">{tea.last_Name}</td>
                        <td className="tbody">{tea.phone_number}</td>
                        <td className="tbody">{tea.subject}</td>
                        <td className="tbody">{tea.classLvl}</td>
                        <td className="tbody">{tea.cin}</td>
                        <td className="tbody"><button onClick={() => deleteTeacher(tea.id)}>X</button> </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </body>
        </main>
    )
}
export default Teacher;