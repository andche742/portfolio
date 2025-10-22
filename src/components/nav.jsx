import icon from '../assets/icon.png';
import { Link } from "react-router-dom";
import './nav.css';

function Nav({ showName = false }) {
   return (
       <nav className="navbar">
            
            <Link to="/" className="navbar-left">
                <img className="logo" src={icon} alt='Home' height='200' width='200'/>
                {showName && <h3 className="name">Andrew Chen</h3>}
            </Link>
           

           <div className="navbar-right">
                <a href="https://github.com/andche742">
                    <p>Github</p>
                </a>
                <a href="https://www.linkedin.com/in/andrew-b-chen742">
                    <p>LinkedIn</p>
                </a>
               <Link to="/projects">Projects</Link>
           </div>
       </nav>
   )
}


export default Nav;