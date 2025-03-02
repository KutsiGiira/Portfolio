import './dash.css'
import AddStudent from '../Add/StudentAdd';
import AddTeacher from '../Add/AddTeacher';
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
            <h1>Black Education Admin Page</h1>
                <div className="Add-student">
                        <p onClick={Openpop}>Add More Student</p>
                </div>
                <div className="Add-Teacher">
                        <p  onClick={Tpop}>Add More Teacher</p>
                </div>
                <div className="Add-Event">
                        <p>Add Event</p>
                </div>
            </div>
        </main>
    )
}
export default Dashboard;