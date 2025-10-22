import icon from '../assets/icon.png';
import { Link } from "react-router-dom";
import './Nav.css';

function Nav() {
   return (
       <nav className="navbar">
            <div className="navbar-left">
            <Link to="/">
                <img className="logo" src={icon} alt='Home' height='200' width='200'/>
            </Link>
           </div>

           <div className="navbar-right">
                <a href="https://github.com/andche742">
                    <p>Github</p>
                </a>
                <a href="https://www.linkedin.com/in/andrew-b-chen742">
                    <p>LinkedIn</p>
                </a>
               <Link to="/projects">Projects</Link>
               <Link to="/contact">Contact</Link>
           </div>
       </nav>
   )
}


export default Nav;