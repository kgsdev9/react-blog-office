import { Outlet, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"; 

export default function NavBar() {
    return (
      <>   
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={`/`} className="navbar-brand">KGS BLOG</Link>
                   
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <Link to={`/blog`} className="nav-link">Articles </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/about`}>Apropos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/dashboard`}>Dashboard</Link>
                        </li>
                        </ul>
                    </div>
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
        
      </>
    );
  }