import { useEffect, useState } from 'react';
import './AddTeacher.css'
import close from './closeG.svg';
function AddTeacher({style, onClose}){

    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [cls, setClass] = useState('')
    const [num, setNum] = useState('')
    const [subj, setsubj] = useState('')
    const [cin, setCin] = useState('')

        const SendData = (e) => {
            e.preventDefault();
            const teadata = {
                first_Name: fname,
                last_Name: lname,
                phone_number: num,
                subject: subj,
                class: cls,
                cin: cin,
                };
                fetch("http://localhost:8080/teachers", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(teadata),
                })
                .then(Response => Response.json())
                .then(data => {
                    console.log("Teacher added: ", data);
                    onClose();
                })
                .catch(error =>{
                    console.log("Error:", error);
                });
            };
            
    return(
        <main className='frm' style={style}>
             <img src={close} alt="close" onClick={onClose} id="x"/>
                <h1 id='rns'>Register New Teacher</h1>
            <form onSubmit={SendData} className='tForm'>
                <section id='s1' className='sec'>
                    <span>
                        <label>First Name : </label>
                        <input id="sInp" type="text" name="" value={fname} placeholder='First name' onChange={(e) => setfname(e.target.value)} />
                    </span>
                    <span>
                        <label>Last Name : </label>
                        <input id="sInp" type="text" name="" value={lname} placeholder='Last Name' onChange={(e) => setlname(e.target.value)}/>
                    </span>
                </section>
                <section id='s2' className='sec'>
                    <span>
                        <label>Address : </label>
                        <input id="sInp" type="text" name="" value={cls} placeholder='Address'onChange={(e) => setClass(e.target.value)}/>
                    </span>
                    <span>
                        <label>Telephone : </label>
                        <input id="sInp" type="number" name="" value={num} placeholder='Telephone' onChange={(e) => setNum(e.target.value)} />
                    </span>
                    </section>
                    <section id='s3' className='sec'>
                    <span>
                        <label>Subject : </label>
                        <input id="sInp" type="text" name="" value={subj} placeholder='Subject' onChange={(e) => setsubj(e.target.value)}/>
                    </span>
                    <span>
                        <label>CIN : </label>
                        <input id="sInp" type="text" name="" value={cin}  placeholder='Cin' onChange={(e) => setCin(e.target.value)}/>
                    </span>
                </section>
                <button type="submit" id='sSub'>Register</button>
            </form>
        </main>
    )
}
export default AddTeacher;