import "./Student.css"
import AddStudent from "../Add/StudentAdd";
import { useEffect, useState } from "react";
function Student(){
    const [Sadd, Sclose] = useState("none");
    const [students, setStudents] = useState([]);
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
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Address</th>
                    <th>Phone number</th>
                    <th>Class</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {students.map(st => (
                        <tr key={st.id}>
                        <td className="tbody">{st.first_Name}</td>
                        <td className="tbody">{st.last_Name}</td>
                        <td className="tbody">{st.address}</td>
                        <td className="tbody">{st.phone_number}</td>
                        <td className="tbody">{st.classLevel}</td>
                        <td className="tbody"><button onClick={() => deletestudent(st.id)}>X</button> </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </body>
        </main>

    )
}
export default Student;