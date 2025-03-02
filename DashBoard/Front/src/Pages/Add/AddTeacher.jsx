import './AddTeacher.css'
import close from './closeG.svg';
function AddTeacher({style, onClose}){
    return(
        <main className='frm' style={style}>
                        <img src={close} alt="close" onClick={onClose} width={30} id="x"/>
                <form action="">
                <div id='frow'>
                        <div>
                            <label>First name: </label>
                            <input type="text" name="" id="" />
                        </div>

                        <div>
                            <label>Last name: </label>
                            <input type="text" name="" id="" />
                        </div>
                </div>
                <div id="rrow"> 
                        <div>
                            <label>Address</label>
                            <input type="text" name="" id="" />
                        </div>

                        <div>
                            <label>Phone number: </label>
                            <input type="text" name="" id="" />
                        </div>
                </div>

                <div>
                    <div>
                        <label>Subject :  </label>
                        <input type="text" name="" id="" />
                    </div>
                    <button type="submit" id='btn'>Register</button>
                </div>
            </form>
        </main>
    )
}
export default AddTeacher;