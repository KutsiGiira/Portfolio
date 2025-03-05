import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from "../Pages/Dashboard/Dashboard";
import Student from "../Pages/Student/Student";
import Teacher from "../Pages/Teacher/Teacher";
import Nav from "./nav";
import './layout.css'
function Router(){
    return(
        <main className="FullPage">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Dashboard />}/>
                    <Route path="/teacher" element={<Teacher />}/>
                    <Route path="/students" element={<Student />}/>
                </Routes>
            </BrowserRouter>
        </main>

    )
}
export default Router;