import "./Student.css"
import AddStudent from "../Add/StudentAdd";
import SingleStudent from "../Singles/SingleStudent";
import { useEffect, useState } from "react";
import {useNavigate } from 'react-router-dom';
function Student(){
  const navigate = useNavigate();
    const [Sadd, Sclose] = useState("none");
    // const [menu, setMenu] = useState(false);
    const [students, setStudents] = useState([]);
    const heads = ["Fist name", "Last name", "Address", "Phone number", "Class"];
    useEffect(() => {
        fetch("http://localhost:8080/students")
          .then(response => {
            if (!response.ok) {
              throw new Error("Failed to fetch data");
            }
            return response.json();
          })
          .then(data => {
            console.log('Fetched data:', data);
            setStudents(data);
          })
          .catch(error => {
            console.error('Error:', error);
            setError(error.message);
          });
      }, []);

      const deletestudent = (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this student?");
        if(isConfirmed){
            fetch(`http://localhost:8080/students/${id}`, {
                method: "DELETE",
              })
              .then(response => {
                if (response.ok) {
                  setStudents(prevStudents => prevStudents.filter(student => student.id !== id));
                } else {
                  console.error("Failed to delete student");
                }
              })
              .catch(error => console.error("Error:", error));
            };
        }
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
            <table border={1} className="table">
                <thead>
                <tr>
                  {heads.map((r) => (<th>{r}</th>))}
                </tr>
                </thead>
                <tbody>
                    {students.map(st => (
                        <tr key={st.id} style={{color:"red"}}>
                        <td className="tbody">{st.first_Name}</td>
                        <td className="tbody">{st.last_Name}</td>
                        <td className="tbody">{st.address}</td>
                        <td className="tbody">{st.phone_number}</td>
                        <td className="tbody">{st.classLevel}</td>
                        {/* <td className="tbody"><button onClick={() => deletestudent(st.id)}>X</button> </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            </body>
        </main>

    )
}
export default Student;