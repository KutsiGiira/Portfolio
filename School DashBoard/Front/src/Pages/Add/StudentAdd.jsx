import { useState } from 'react';
import './AddStudent.css';
import close from './closeG.svg';

function AddStudent({ style, onClose }) {
    const [fname, setFirstName] = useState('');
    const [lname, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [num, setPhoneNumber] = useState('');
    const [classe, setClasse] = useState('');

    const SendData = (e) => {
        e.preventDefault();

        const studentData = {
            first_Name: fname,
            last_Name: lname,
            address: address,
            phone_number: num,
            class: classe,
        };
        fetch("http://localhost:8080/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(studentData),
        })
        .then(response => response.json())
        .then(data => {
            console.log("Student added:", data);
            onClose();
        })
        .catch(error => {
            console.error("Error:", error);
        });
    };

    return (
        <main className='form' style={style}>
            <img src={close} alt="close" onClick={onClose} id="x"/>
            <h1 id='rns'>Register New Student</h1>
            <form onSubmit={SendData} className='sForm'>
                <section id='s1' className='sec'>
                    <span>
                        <label>First Name: </label>
                        <input
                            id="sInp"
                            type="text"
                            name="fname"
                            value={fname}
                            placeholder='First name'
                            onChange={(e) => setFirstName(e.target.value)} />
                    </span>
                    <span>
                        <label>Last Name: </label>
                        <input
                            id="sInp"
                            type="text"
                            name="lname"
                            value={lname}
                            placeholder='Last Name'
                            onChange={(e) => setLastName(e.target.value)} />
                    </span>
                </section>
                <section id='s2' className='sec'>
                    <span>
                        <label>Address: </label>
                        <input
                            id="sInp"
                            type="text"
                            name="address"
                            value={address}
                            placeholder='Address'
                            onChange={(e) => setAddress(e.target.value)} />
                    </span>
                    <span>
                        <label>Telephone: </label>
                        <input
                            id="sInp"
                            type="number"
                            name="num"
                            value={num}
                            placeholder='Telephone'
                            onChange={(e) => setPhoneNumber(e.target.value)} />
                    </span>
                </section>
                <section id='s3' className='sec'>
                    <span>
                        <label>Grade: </label>
                        <input
                            id="sInp"
                            type="text"
                            name="classe"
                            value={classe}
                            placeholder='Grade'
                            onChange={(e) => setClasse(e.target.value)} />
                    </span>
                </section>
                <button type="submit" id='sSub'>Register</button>
            </form>
        </main>
    );
}

export default AddStudent;
