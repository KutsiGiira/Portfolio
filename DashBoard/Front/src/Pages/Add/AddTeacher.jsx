import './AddTeacher.css'
import close from './closeG.svg';
function AddTeacher({style, onClose}){
    return(
        <main className='frm' style={style}>
             <img src={close} alt="close" onClick={onClose} id="x"/>
                <h1 id='rns'>Register New Teacher</h1>
            <form action="" className='tForm'>
                <section id='s1' className='sec'>
                    <span>
                        <label>First Name : </label>
                        <input id="sInp" type="text" name="" placeholder='First name' />
                    </span>
                    <span>
                        <label>Last Name : </label>
                        <input id="sInp" type="text" name="" placeholder='Last Name' />
                    </span>
                </section>
                <section id='s2' className='sec'>
                    <span>
                        <label>Address : </label>
                        <input id="sInp" type="text" name="" placeholder='Address' />
                    </span>
                    <span>
                        <label>Telephone : </label>
                        <input id="sInp" type="number" name="" placeholder='Telephone' />
                    </span>
                    </section>
                    <section id='s3' className='sec'>
                    <span>
                        <label>Subject : </label>
                        <input id="sInp" type="text" name="" placeholder='Subject' />
                    </span>
                    <span>
                        <label>CIN : </label>
                        <input id="sInp" type="text" name="" placeholder='Cin' />
                    </span>
                </section>
                <button type="submit" id='sSub'>Register</button>
            </form>
        </main>
    )
}
export default AddTeacher;