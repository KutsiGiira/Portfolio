import "./Student.css"
function Student(){
    return(
        <main class="studenPage">
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
                <tr>
                    <td className="tbody">Haytam</td>
                    <td className="tbody">Black</td>
                    <td className="tbody">Agadir</td>
                    <td className="tbody">0530506043</td>
                    <td className="tbody">1bac</td>
                </tr>
                </tbody>


            </table>
        </main>

    )
}
export default Student;