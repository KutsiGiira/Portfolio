import './dash.css'
import AddStudent from '../Add/StudentAdd';
import AddTeacher from '../Add/AddTeacher';
import StudentSvg from './student.svg'
import TeacherSvg from './teacher.svg'
import { useState } from 'react';

function Dashboard(){
    const [openpop, closepop] = useState("none")
    const [Topen, Tclose] = useState("none")
    function Openpop(){
        closepop("block")
    }
    function Tpop(){
        Tclose("block")
    }
    function Hide(){
        closepop("none");
        Tclose("none")
    }
    return(
        <main id="dash">
            <AddStudent style={{display : openpop}} onClose={Hide} />
            <AddTeacher style={{display : Topen}} onClose={Hide} />
            <div className="content">
            <h1 id='homepageTitle'>Welcome To Black Education Admin Page</h1>
                <div className="Add-student" >
                        <div onClick={Openpop} id='subsHome'><img src={StudentSvg} alt="Student"  width={100}/><p id='adding'>Add New Student</p></div>
                </div>
                <div className="Add-Teacher" id='subsHome'>
                    <div onClick={Tpop} id='subsHome'><img src={TeacherSvg} alt="Student"  width={100}/><p id='adding'>Add New Teacher</p></div>
                </div>
            </div>
        </main>
    )
}
export default Dashboard;