import {NavLink} from "react-router-dom"
import './nav.css'
function Nav(){
    return(
        <nav>
            <div className="LogoTitle">
                <a href="/"><img src="https://cdn.freebiesupply.com/letters/large/fancy-b.jpg" alt="logo" width={100} id="logo"/>
                </a>
                <span>Black Education</span>
            </div>
            <hr />
            <div className="Links">
                    <NavLink to="/" className={({isActive}) => (isActive ? "active" : "Nactive")} id="link">Dashboard</NavLink>
                    <NavLink to="/students" className={({isActive}) => (isActive ? "active" : "Nactive")} id="link">Students</NavLink>
                    <NavLink to="/teacher" className={({isActive}) => (isActive ? "active" : "Nactive")} id="link">Teachers</NavLink>
            </div>
        </nav>
    )
}
export default Nav;