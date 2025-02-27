import './dash.css'
import AddStudent from '../Add/StudentAdd';
import { useState } from 'react';

function Dashboard(){
    const [openpop, closepop] = useState("none")
    function Openpop(){
        closepop("block")
    }
    function Hide(){
        closepop("none");
    }
    return(
        <main id="dash">
            <AddStudent style={{display : openpop}} onClose={Hide} />
            <div className="content">
            <h1>Black Education Admin Page</h1>
                <div className="Add-student">
                        <p onClick={Openpop}>Add More Student</p>
                </div>
                <div className="Add-Teacher">
                        <p>Add More Teacher</p>
                </div>
                <div className="Add-Event">
                        <p>Add Event</p>
                </div>
            </div>
        </main>
    )
}
export default Dashboard;