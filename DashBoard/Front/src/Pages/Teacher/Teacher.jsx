import "./Teacher.css"
function Teacher(){
    return(
        <main class="TeacherPage">
                    <table border={2} className="table">
                <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Address</th>
                    <th>Phone number</th>
                    <th>Subject</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="tdTeacher">Haytam</td>
                    <td className="tdTeacher">Black</td>
                    <td className="tdTeacher">Agadir</td>
                    <td className="tdTeacher">0530506043</td>
                    <td className="tdTeacher">1bac</td>
                </tr>
                <tr>
                    <td className="tdTeacher">Haytam</td>
                    <td className="tdTeacher">Black</td>
                    <td className="tdTeacher">Agadir</td>
                    <td className="tdTeacher">0530506043</td>
                    <td className="tdTeacher">1bac</td>
                </tr>
                </tbody>


            </table>
        </main>
    )
}
export default Teacher;