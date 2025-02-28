import { useState } from 'react';
import './AddStudent.css';
import close from './closeG.svg';
function AddStudent({style, onClose}){
    return(
        <main className='form' style={style}>
            <img src={close} alt="close" onClick={onClose} width={30} id="x"/>
            <form action="">
                <div id='f'>
                        <div>
                            <label>First name: </label>
                            <input type="text" name="" id="" />
                        </div>

                        <div>
                            <label>Last name: </label>
                            <input type="text" name="" id="" />
                        </div>
                </div>
                <div id="r"> 
                        <div>
                            <label>Address name: </label>
                            <input type="text" name="" id="" />
                        </div>

                        <div>
                            <label>Phone number: </label>
                            <input type="text" name="" id="" />
                        </div>
                </div>

                <div>

                    <div id='s'>
                        <label>Address: </label>
                        <input type="text" name="" id="" />
                    </div>
                    <div>
                        <label>Class: </label>
                        <input type="text" name="" id="" />
                    </div>
                    <button type="submit" id='btn'>Register</button>
                </div>
            </form>
        </main>
    )
}
export default AddStudent;