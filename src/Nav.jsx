import { Link } from "react-router-dom";
const Nav=()=>{
    return(
        <>
        
        <nav className="text-white flex justify-end ">
            <ul type="none" className="flex flex-row justify-end bg-sky-800  w-[52%] items-end p-4 border-2 rounded-t-10 rounded-b-full font-bold">
                <li className="mr-8 "> <Link to="/About">About</Link> </li>
                <li className="mr-8 "> <Link to="/Certificates">Certificates</Link></li>
                <li className="mr-8 "> <Link to="/Projects">Projects</Link> </li>
                <li className="mr-8 "><Link to="/More">More</Link></li>
                <li className="mr-8 "><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
        
        </>
    )
}
export default Nav;